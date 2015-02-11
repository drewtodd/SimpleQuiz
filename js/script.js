function returnResults() { 

    var total = 3;
    var score = 0;
    var answers = ["c", "a", "b"];

    // Get user input

    var q1 = document.forms["simpleQuiz"]["q1"].value;
    var q2 = document.forms["simpleQuiz"]["q2"].value;
    var q3 = document.forms["simpleQuiz"]["q3"].value;

    // Validation

    var validationPanel = document.getElementById('validationPanel');
    var errorState;

    for (i = 1; i <= total; i++) {      // i represents the question number (1, 2, 3) 
        var x = eval('q' + i);          // x holds the answer value (a, b, c)
        var q = document.getElementById('question' + i);

        if (x == null || x == '') {            
            q.classList.add("validation-error"); // highlight the offending question
            validationPanel.innerHTML = '<h3>Please complete all questions before proceeding.</h3>';
            validationPanel.style.display = 'block';
            errorState = true;
        } else {
            q.classList.remove("validation-error");
        }
    }

    if (errorState) { 

        return false; 
    
    } else {
   
        validationPanel.style.display = 'none';

        // Check answers

        var wrongAnswers = new Array();

        for (i = 1; i <= total; i++) {
            if (eval('q' + i) == answers[i-1]) {
                score ++;
            } else {
                wrongAnswers.push(eval('question' + i).id);
            }
        }

        // Display overall score

        var resultsPanel = document.getElementById('resultsPanel');
        var pct = (score / total);
        var scoreStyle;

        if (pct < .5) {
            scoreStyle = "boo";
        } else if (pct < .8) {
            scoreStyle = "meh";
        } else {
            scoreStyle = "yay";
        }

        document.getElementById('submit').disabled = true;

        resultsPanel.classList.add(scoreStyle);
        resultsPanel.innerHTML = '<h3>You got ' + score + ' out of ' + total + ' correct.</h3>';
        resultsPanel.style.display = 'block';

        // Highlight the wrong answers
        var element;

        for (i = 0; i < wrongAnswers.length; i++) {
            element = document.getElementById(wrongAnswers[i]);
            console.log('Element: ' + wrongAnswers[i]);
            element.classList.add('wrong-answer'); 
        }

        console.log('Length: ' + wrongAnswers.length);
        for (i = 0; i <= wrongAnswers.length; i++) { console.log(wrongAnswers[i]); }

        return false;
    }
}