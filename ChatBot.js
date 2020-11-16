function documentReady(callback) {
    // if the document is already loaded or rendered
    if (document.readyState != 'loading') {
        callback();
    }
    // else in modern browsers
    else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    }
    // else in IE <= 8 and other equivalent browsers
    else {
        document.attachEvent('onreadystatechange', function(){
            if (document.readyState == 'complete') {
                callback();
            }
        });
    }
}

// Animation for chat bot elements
var i = 0;

function displayElements() {
    if (i == 1) {
        document.getElementsByClassName("top-row-text")[0].style.display = "block";
        i = i+1;
    }
    else if (i == 2) {
        console.log(i);
        document.getElementsByClassName("robot-icon-wrapper")[0].style.display = "block";
        i = i+1;
    }
    else if (i == 3) {
        document.getElementsByClassName("front-box")[0].style.display = "block";
        i = i+1;
    }
    else if (i == 4) {
        document.getElementsByClassName("wrapper-2")[0].style.display = "flex";
        i = i+1;
    }
    else if(i == 5) {
        document.getElementById("question1").style.display = "flex";
        i = i+1;
    }
    else if(i == 6) {
        document.getElementById("question2").style.display = "flex";
        i = i+1;
    }
    else if (i == 7) {
        document.getElementById("question3").style.display = "flex";
        i = i+1;
    }
    else if (i == 8) {
        document.getElementById("question4").style.display = "flex";
        i = i+1;
    }
    else if (i == 9) {
        document.getElementsByClassName("button")[0].style.display = "flex";
    }
}

function chatBotAnimation() {
    document.getElementsByClassName("top-row")[0].style.display = "block";
    i = i+1;
    let interval_id = setInterval(displayElements, 1000);
    if (i == 9) {
        clearInterval(interval_id);
    }
}

documentReady(chatBotAnimation);

// Minimize and close
function minimizeChatBot() {
    // document.getElementsByClassName("container")[0].classList.add("hide");
}

function closeChatBot() {
    // document.getElementsByClassName("container")[0].classList.add("hide");
}