param(
    $action
)

if (-not $action) {
    Write-Output "Usage: ./app.ps1 [start|stop]"
    exit 1
}

if ($action -eq "start") {
    docker build -t ecoinfo .

    if ($?) {
        docker run -d -p 8080:8080 ecoinfo
        exit 0
    } else {
        Write-Output "Error building docker image"
        exit 1
    }
}

if ($action -eq "stop") {
    docker stop (docker ps -a -q)
    docker rm (docker ps -a -q)
}
