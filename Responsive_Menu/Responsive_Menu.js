$(document).ready(function(){
    let $select = $("<select></select>");                       // Creates a selectable drop-down list to receive input from the user
    $("#main-menu").append($select);
    
    $select.change(function(){                                  // Detects whether the value of select has been changed i.e. a different option selection
        window.location = $select.val();                        // Returns the current selected value which is stored in window.location
    });

    $("#main-menu a").each(function(){
        let $option = $("<option></option>");                   // Creates the options inside the selectable drop-down list
        $option.val($(this).attr("href"));
        $option.text($(this).text());

        if ($(this).parent().hasClass("selected")){
            $option.prop("selected", true);
        }
        $select.append($option);
    });
});