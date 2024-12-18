let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let score1 = parseInt(homeScore.textContent);
let score2 = parseInt(awayScore.textContent);
let start = false;
let time = 300;
let interval;

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
    if (start) {
        score1 += 1;
        homeScore.textContent = score1;
        updateLeader();
    }
}

function add2() {
    if (start) {
        score1 += 2;
        homeScore.textContent = score1;
        updateLeader();
    }
}

function add3() {
    if (start) {
        score1 += 3;
        homeScore.textContent = score1;
        updateLeader();
    }
}

function adds1() {
    if (start) {
        score2 += 1;
        awayScore.textContent = score2;
        updateLeader();
    }
}

function adds2() {
    if (start) {
        score2 += 2;
        awayScore.textContent = score2;
        updateLeader();
    }
}

function adds3() {
    if (start) {
        score2 += 3;
        awayScore.textContent = score2;
        updateLeader();
    }
}

function pause() {
    if (start) {
        clearInterval(interval);
        start = false;
    }
}

function resume() {
    if (time < 300 && start != true) {
        start = true;
        timer();
    }
}

function reset() {
    score1 = 0;
    score2 = 0;
    homeScore.textContent = score1;
    awayScore.textContent = score2;
    document.getElementById("leader").textContent = "Start the game";
    document.getElementById("startTimer").disabled = false;
    document.getElementById("timer").textContent = "05:00";
    pause();
}

function startTimer() {
    timer();
    document.getElementById("leader").textContent = "The game has Started";
    document.getElementById("startTimer").disabled = true;
    start = true;
}

function timer() {
    let timer = document.getElementById("timer");
    interval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = minutes + ':' + seconds;
        if (time <= 0) {
            clearInterval(interval);
            alert('Time is up!');
            start = false;
            if (score1 < score2) {
                document.getElementById("leader").textContent = "Time Up!, the away team won";
            } else if (score1 > score2) {
                document.getElementById("leader").textContent = "Time Up!, the home team won";
            } else {
                document.getElementById("leader").textContent = "Time Up!, the game ended at a draw";
            }
        }
        time--;
    }, 1000);
}