var is_chat_box_open = false;
var is_chat_box_minimized = false;

document.getElementsByClassName("chat-icon-wrapper")[0].addEventListener("click", function() {
    is_chat_box_open = true;

    // Hides the chatbot icon
    document.getElementsByClassName("chat-icon-wrapper")[0].classList.add("chat-icon-wrapper-hide");

    // Adds iframe
    let i_frame = document.createElement("IFRAME");
    i_frame.setAttribute("id", "chatBoxIframe");
    i_frame.setAttribute("src", "ChatBot.html");
    i_frame.setAttribute("frameBorder", "0");
    i_frame.classList.add("frame-appear");
    i_frame.classList.add("frame");
    document.body.appendChild(i_frame);

    if (is_chat_box_open) {
        i_frame.onload = function() {
            let doc = i_frame.contentDocument || i_frame.contentWindow.document;
            doc.getElementById("minimize").addEventListener("click", function() {
                // Minimizes the frame
                i_frame.classList.add("frame-hide");

                // Removes the chatbot icon
                document.getElementsByClassName("chat-icon-wrapper")[0].classList.remove("chat-icon-wrapper-hide");

                is_chat_box_open = false;
            });
            doc.getElementById("close").addEventListener("click", function() {
                // Minimizes the frame
                i_frame.classList.add("frame-hide");

                // Removes the chatbot icon
                document.getElementsByClassName("chat-icon-wrapper")[0].classList.remove("chat-icon-wrapper-hide");

                is_chat_box_open = false;
            });
        }
    }
    else {
        i_frame.classList.remove("frame-hide");
    }
});