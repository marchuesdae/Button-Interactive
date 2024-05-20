var currentQuestion = 1;

function showAlert(message, type) {
    var alertContainer = document.getElementById('alertContainer');
    
    alertContainer.innerHTML = '';
    
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;
    
    alertContainer.appendChild(alertDiv);
    
    setTimeout(function() {
        alertContainer.removeChild(alertDiv);
    }, 2000);
}

function wrongAns() {
    showAlert("Oops, wrong answer, think again!", "danger");
    startQuiz();
}

function startQuiz() {
    document.getElementById('buttonStart').hidden = true;
    document.getElementById('question').innerHTML = '<img src="spider.jpeg" class="rounded float-start img-fluid img-thumbnail" style="width: 100px;" alt="spider"><br>How many legs does a spider have? <br><br> <button onclick="checkAnswer(\'6\')" class="btn btn-primary">6</button> <button onclick="checkAnswer(\'8\')" class="btn btn-primary">8</button> <button onclick="checkAnswer(\'10\')" class="btn btn-primary">10</button>';
    currentQuestion = 1; 
}

function q2() {
    showAlert("Correct! Well done!", "success");
    document.getElementById('question').innerHTML = '<img src="cat.jpeg" class="rounded float-start img-fluid img-thumbnail" style="width: 100px;" alt="cat"><br>What animal is this? <br><br> <button onclick="checkAnswer(\'Cat\')" class="btn btn-primary">Cat</button> <button onclick="checkAnswer(\'Dog\')" class="btn btn-primary">Dog</button> <button onclick="checkAnswer(\'Mouse\')" class="btn btn-primary">Mouse</button>';
    currentQuestion++;
}

function q3() {
    showAlert("Correct! Well done!", "success");
    document.getElementById('question').innerHTML = 'What is the name of the first planet from the sun? <br><br> <button onclick="checkAnswer(\'Mercury\')" class="btn btn-primary">Mercury</button> <button onclick="checkAnswer(\'Venus\')" class="btn btn-primary">Venus</button> <button onclick="checkAnswer(\'Earth\')" class="btn btn-primary">Earth</button>';
    currentQuestion++;
}

function q4() {
    showAlert("Correct! Well done!", "success");
    document.getElementById('question').innerHTML = 'What is the name of the third planet from the sun? <br><br> <button onclick="checkAnswer(\'Venus\')" class="btn btn-primary">Venus</button> <button onclick="checkAnswer(\'Mars\')" class="btn btn-primary">Mars</button> <button onclick="checkAnswer(\'Earth\')" class="btn btn-primary">Earth</button>';
    currentQuestion++;
}

function q5() {
    showAlert("Correct! Well done!", "success");
    document.getElementById('question').innerHTML = '<img src="poseidon.png" class="rounded float-start img-fluid img-thumbnail" style="width: 100px;" alt="greekgod"> Who is the God of the SEA? <br><br> <button onclick="checkAnswer(\'Medusa\')" class="btn btn-primary">Medusa</button> <button onclick="checkAnswer(\'Poseidon\')" class="btn btn-primary">Poseidon</button> <button onclick="checkAnswer(\'Hades\')" class="btn btn-primary">Hades</button>';
    currentQuestion++;
}

function q6() {
    showAlert("Correct! Well done!", "success");
    document.getElementById('question').innerHTML = '<h2 class="animate__animated animate__heartBeat"> CONGRATULATIONS! </h2> <h3 class="animate__animated animate__heartBeat">You completed the quiz!</h3> <p>Do you wish to go back?</p> <br> <button onclick="startQuiz()" class="btn btn-success btn-sm">Okay</button>';
}

function success() {
    startQuiz(); 
}

function checkAnswer(answer) {
    if (currentQuestion === 1 && (answer === '8' || answer === 'eight' || answer === 'EIGHT')) {
        q2();
    } else if (currentQuestion === 2 && (answer === 'Cat' || answer === 'cat' || answer === 'CAT')) {
        q3();
    } else if (currentQuestion === 3 && (answer === 'Mercury' || answer === 'mercury' || answer === 'MERCURY')) {
        q4();
    } else if (currentQuestion === 4 && (answer === 'Earth' || answer === 'earth' || answer === 'EARTH')) {
        q5();
    } else if (currentQuestion === 5 && (answer === 'Poseidon' || answer === 'POSEIDON' || answer === 'poseidon')) {
        q6();
    } else {
        wrongAns();
    }
}
