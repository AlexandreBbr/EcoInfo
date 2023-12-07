import { I, J, L, O, S, T, Z } from './tetrominoes.js';

class Tetris {
    constructor(cvs, ctx, scoreElement) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.scoreElement = scoreElement;

        this.ROW = 20;
        this.COL = this.COLUMN = 10;
        this.SQ = this.squareSize = 20;
        this.VACANT = "WHITE";

        this.board = [];
        for (let r = 0; r < this.ROW; r++) {
            this.board[r] = [];
            for (let c = 0; c < this.COL; c++) {
                this.board[r][c] = this.VACANT;
            }
        }

        this.PIECES = [
            [Z, "red"],
            [S, "green"],
            [T, "yellow"],
            [O, "blue"],
            [L, "purple"],
            [I, "cyan"],
            [J, "orange"]
        ];

        this.p = this.randomPiece();

        document.addEventListener("keydown", this.control.bind(this));

        this.dropStart = Date.now();
        this.gameOver = false;

        this.init();
    }

    drawSquare(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.SQ, y * this.SQ, this.SQ, this.SQ);

        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.SQ, y * this.SQ, this.SQ, this.SQ);
    }

    drawBoard() {
        for (let r = 0; r < this.ROW; r++) {
            for (let c = 0; c < this.COL; c++) {
                this.drawSquare(c, r, this.board[r][c]);
            }
        }
    }

    randomPiece() {
        let r = Math.floor(Math.random() * this.PIECES.length);
        return new Piece(this.PIECES[r][0], this.PIECES[r][1], this);
    }

    init() {
        this.drawBoard();
        this.p.draw();
        this.drop();
    }

    control(event) {
        if (event.keyCode == 37) {
            this.p.moveLeft();
            this.dropStart = Date.now();
        } else if (event.keyCode == 38) {
            this.p.rotate();
            this.dropStart = Date.now();
        } else if (event.keyCode == 39) {
            this.p.moveRight();
            this.dropStart = Date.now();
        } else if (event.keyCode == 40) {
            this.p.moveDown();
        }
    }

    drop() {
        let now = Date.now();
        let delta = now - this.dropStart;
        if (delta > 1000) {
            this.p.moveDown();
            this.dropStart = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.drop.bind(this));
        }
    }
}

class Piece {
    constructor(tetromino, color, tetris) {
        this.tetromino = tetromino;
        this.color = color;
        this.tetris = tetris;

        this.tetrominoN = 0;
        this.activeTetromino = this.tetromino[this.tetrominoN];

        this.x = 3;
        this.y = -2;
    }

    fill(color) {
        for (let r = 0; r < this.activeTetromino.length; r++) {
            for (let c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    this.tetris.drawSquare(this.x + c, this.y + r, color);
                }
            }
        }
    }

    draw() {
        this.fill(this.color);
    }

    unDraw() {
        this.fill(this.tetris.VACANT);
    }

    moveDown() {
        if (!this.collision(0, 1, this.activeTetromino)) {
            this.unDraw();
            this.y++;
            this.draw();
        } else {
            this.lock();
            this.tetris.p = this.tetris.randomPiece();
        }
    }

    moveRight() {
        if (!this.collision(1, 0, this.activeTetromino)) {
            this.unDraw();
            this.x++;
            this.draw();
        }
    }

    moveLeft() {
        if (!this.collision(-1, 0, this.activeTetromino)) {
            this.unDraw();
            this.x--;
            this.draw();
        }
    }

    rotate() {
        let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
        let kick = 0;

        if (this.collision(0, 0, nextPattern)) {
            kick = this.x > this.tetris.COL / 2 ? -1 : 1;
        }

        if (!this.collision(kick, 0, nextPattern)) {
            this.unDraw();
            this.x += kick;
            this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
            this.activeTetromino = this.tetromino[this.tetrominoN];
            this.draw();
        }
    }

    lock() {
        for (let r = 0; r < this.activeTetromino.length; r++) {
            for (let c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    if (this.y + r < 0) {
                        alert("Game Over");
                        this.tetris.gameOver = true;
                        break;
                    }
                    this.tetris.board[this.y + r][this.x + c] = this.color;
                }
            }
        }
        this.clearRows();
        this.tetris.drawBoard();
        this.tetris.scoreElement.innerHTML = this.tetris.score;
    }

    collision(x, y, piece) {
        for (let r = 0; r < piece.length; r++) {
            for (let c = 0; c < piece.length; c++) {
                if (!piece[r][c]) continue;

                let newX = this.x + c + x;
                let newY = this.y + r + y;

                if (newX < 0 || newX >= this.tetris.COL || newY >= this.tetris.ROW) return true;
                if (newY < 0) continue;
                if (this.tetris.board[newY][newX] !== this.tetris.VACANT) return true;
            }
        }
        return false;
    }

    clearRows() {
        for (let r = 0; r < this.tetris.ROW; r++) {
            let isRowFull = this.tetris.board[r].every((cell) => cell !== this.tetris.VACANT);

            if (isRowFull) {
                this.tetris.score += 10;
                for (let y = r; y > 0; y--) {
                    for (let c = 0; c < this.tetris.COL; c++) {
                        this.tetris.board[y][c] = this.tetris.board[y - 1][c];
                    }
                }
                for (let c = 0; c < this.tetris.COL; c++) {
                    this.tetris.board[0][c] = this.tetris.VACANT;
                }
            }
        }
    }
}

export default Tetris;
