<template>
    <div>
        <Navbar></Navbar>

        <section class="py-8 flex justify-center items-center bg-question-section h-screen">
            <div class="container mx-auto bg-white rounded p-8">
                <h2 class="text-3xl font-semibold mb-4">Quiz Écologique</h2>

                <!-- Question 1 -->
                <div v-if="currentQuestionIndex === 0" class="text-center">
                    <p class="text-lg mb-2">Le recyclage contribue à la réduction des déchets.</p>
                    <button @click="checkAnswer(true)" :class="{ 'btn-quiz': true, 'btn-correct': answerCorrect === true }">
                        Vrai
                    </button>
                    <button @click="checkAnswer(false)"
                        :class="{ 'btn-quiz': true, 'btn-incorrect': answerCorrect === false }">
                        Faux
                    </button>
                </div>

                <div v-if="currentQuestionIndex === 1" class="text-center">
                    <p class="text-lg mb-2">Le CO2 est essentiel à la vie.</p>
                    <button @click="checkAnswer(true)"
                        :class="{ 'btn-quiz': true, 'btn-correct': answerCorrect === true }">
                        Vrai
                    </button>
                    <button @click="checkAnswer(false)"
                        :class="{ 'btn-quiz': true, 'btn-incorrect': answerCorrect === false }">
                        Faux
                    </button>
                </div>

                <div v-if="answerVisible" class="mt-4 text-center">
                    <p>Réponse: Vrai</p>
                    <p>{{ answerExplanation[currentQuestionIndex] }}</p>
                    <button v-if="answerVisible" @click="nextQuestion" class="btn-next">Suivant</button>
                </div>

            </div>
        </section>

    </div>
</template>
  
<script>
import Navbar from './Items/Navbar.vue';

export default {
    name: 'EducationPage',
    components: { Navbar },
    data() {
        return {
            answerCorrect: null,
            answerExplanation: [
                "Le recyclage contribue à la réduction des déchets en réutilisant des matériaux plutôt que de les jeter.",
            ],
            currentQuestionIndex: 0,
            answerVisible: false,
        };
    },
    methods: {
        checkAnswer(userAnswer) {
            this.answerCorrect = userAnswer === true;
            this.answerVisible = true;
        },
        nextQuestion() {
            this.currentQuestionIndex++;
            this.answerVisible = false;
        },
    },
};
</script>
  
<style>
.btn-quiz {
    background-color: white;
    border: 1px solid #000;
    color: #000;
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
}

.btn-next {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    margin-top: 8px;
    cursor: pointer;
}

.bg-question-section {
    background-color: #0e0c0c15;
}

.h-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn-correct {
    background-color: #4caf50;
    color: white;
}

.btn-incorrect {
    background-color: #ff0000;
    color: white;
}

body {
    overflow: hidden;
}
</style>
  