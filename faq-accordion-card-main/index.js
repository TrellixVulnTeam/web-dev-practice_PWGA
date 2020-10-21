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

function article(article_added, text, index) {
    // Creates article tag
    let article_tag = document.createElement("article");
    let p_tag = document.createElement("p");
    p_tag.appendChild(document.createTextNode(text));
    article_tag.appendChild(p_tag);

    let question_hr = document.getElementsByClassName("question-hr");
    let questions = document.getElementsByClassName("questions");

    if (article_added == false) {
        // Inserts article tag before hr tag in the list
        questions[2*index].style.fontWeight = "700";
        let list = document.getElementsByTagName("li")[index];
        list.insertBefore(article_tag, question_hr[index]);
        article_added = true;
    }
    else if (article_added == true) {
        // Removes article tag
        let list =  document.getElementsByTagName("li")[index];
        for (let i = 0; i < list.childNodes.length; i++) {
            if (list.childNodes[i].tagName == "ARTICLE") {
                list.removeChild(list.childNodes[i]);
            }
        }
        questions[2*index].style.fontWeight = "400";
        article_added = false;
    }
    return article_added;
}

let article_add1 = false;
let article_add2 = false;
let article_add3 = false;
let article_add4 = false;
let article_add5 = false;

function answer1() {
    article_add1 = article(article_add1, "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.", 0);
}

function answer2() {
    article_add2 = article(article_add2, "No more than 2GB. All files in your account must fit your allotted storage space.", 1);
}

function answer3() {
    article_add3 = article(article_add3 ,"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.", 2);
}

function answer4() {
    article_add4 = article(article_add4 ,"Yes! Send us a message and we’ll process your request no questions asked.", 3);
}

function answer5() {
    article_add5 = article(article_add5, "Chat and email support is available 24/7. Phone lines are open during normal business hours.", 4);
}

// Mobile
function mobile(x) {
    if(x.matches){
        let faq_image = document.getElementById("faqImages");
        for(let i = 0; i < faq_image.childNodes.length; i++) {
            if (faq_image.childNodes[i].id == "illustrationBox") {
                faq_image.removeChild(faq_image.childNodes[i]);
            }
            if (faq_image.childNodes[i].id == "woman") {
                faq_image.removeChild(faq_image.childNodes[i]);
            }
        }
        let img_tag = document.createElement("img");
        $(img_tag).attr({
            "src": "./images/illustration-woman-online-mobile.svg",
            "id": "womanMobile",
            "alt": ""
        });
        faq_image.insertBefore(img_tag, document.getElementById("imageBg"));
    }
}


// Calling mobile()
let x = window.matchMedia("(max-width: 540px)");
mobile(x);

// documentReady(answer1);