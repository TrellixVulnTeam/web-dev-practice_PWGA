const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
let content = "";

keys.addEventListener ('click', e1 =>{
    if (e1.target.matches = 'button'){
        const key = e1.target;
        let key_type = key.dataset.keytype;

        if (key.textContent == "AC"){
            // const clear_button = document.querySelector(".clear");
            display.textContent = "0";
            content = "";
        }
        else if (key.textContent != "="){
            content = content.concat(key.textContent);
            if (content.length > 2 && key_type == "operator" && !(/^\d+$/.test(content[content.length-2]))){
                content = content.replace(content[content.length-2],content[content.length-1]);
                content = content.replace(content[content.length-1], '');
            }
            display.textContent = content;
        }
    }
});

function calculate (){
    content = eval(content).toString();
    display.textContent = content;
}

// The pointer change problem is that when cursor is clicked anywhere else apart from 
// buttons then content is continuously concatenated and finally displayed. I was thinking of 
// checking for change in cursor using if condition to eliminate this issue.