let buttons = document.getElementsByClassName("color-button");
let answer_button = Math.round(Math.random()*(buttons.length-1));
let answer_message = document.getElementById('answer');
// document.getElementById('start-button').addEventListener('click', start_game(buttons));
// document.getElementById('reset-button').addEventListener('click', reset_game(buttons));

function start_game(){
    answer_message.innerHTML = "Begin Game! Select the button that matches the rgb values shown above";
    for (i = 0; i < buttons.length; i++){
        let red = get_button_color();
        let green = get_button_color();
        let blue = get_button_color();
        set_button_color (buttons[i], red, green, blue);
        buttons[i].addEventListener('click', function(){
            if (this == buttons[answer_button]){
                answer_message.innerHTML = "Correct!";
                document.getElementsByTagName("body")[0].setAttribute('style',
                    'background-color: rgb('+ 242 +','+ 252 +','+ 180 +');');
                document.getElementById("color-value").innerHTML = `(${red}, ${green}, ${blue})`;
            }
            else {
                answer_message.innerHTML = "";
                answer_message.innerHTML = "Wrong! Guess Again!";
            }
        });
    }
}

function set_button_color (button, red, green, blue){
    button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');');
}

function get_button_color(){
    return Math.round(Math.random()*255);
}

function reset_game (){
    answer_message.innerHTML = "";
    document.getElementById("color-value").innerHTML = "";
    for (i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('style', 'background-color: rgb('+ 255 +','+ 0 +','+ 0 +');');
    }
    document.getElementsByTagName("body")[0].setAttribute('style', 'background-color: rgb('+ 175 +','+ 225 +','+ 225 +');');
}