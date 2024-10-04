let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let score1 = parseInt(homeScore.textContent);
let score2 = parseInt(awayScore.textContent);

function updateLeader() {
    if (score1 < score2) {
        document.getElementById("leader").textContent = "Away is winning";
    } else if (score1 > score2) {
        document.getElementById("leader").textContent = "Home is winning";
    } else {
        document.getElementById("leader").textContent = "It is a Draw";
    }
}

function add1() {
    score1 += 1;
    homeScore.textContent = score1;
    updateLeader();
}

function add2() {
    score1 += 2;
    homeScore.textContent = score1;
    updateLeader();
}

function add3() {
    score1 += 3;
    homeScore.textContent = score1;
    updateLeader();
}

function adds1() {
    score2 += 1;
    awayScore.textContent = score2;
    updateLeader();
}

function adds2() {
    score2 += 2;
    awayScore.textContent = score2;
    updateLeader();
}

function adds3() {
    score2 += 3;
    awayScore.textContent = score2;
    updateLeader();
}

function reset() {
    score1 = 0;
    score2 = 0;
    homeScore.textContent = score1;
    awayScore.textContent = score2;
    updateLeader();
}

function startTimer() {
    let timer = document.getElementById("timer");
    let time = 300;
    let interval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = minutes + ':' + seconds;
        if (time <= 0) {
            clearInterval(interval);
            alert('Time is up!');
        }
        time--;
    }, 1000);
    document.getElementById("startTimer").disabled = true
}