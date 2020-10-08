$(document).ready (function(){
    // Unchecking all checboxes initially
    $("input[type=checkbox]").prop('checked', false);

    $("#projects").tabs();
    $("ul").sortable({axis:"x", containment: "#projects"});
    $("ol").sortable({axis:"y", containment: "#projects"});
    
    $("#btn-add-project").button().click(function(){
        // Adding properties to dialog
        // modal property ensures that no other interaction is allowed as long as the dialog is displayed
        // The dialog has two buttons which are created using the "buttons" object
        
        $("#project-dialog").dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new project": function(){
                    let project_name = $("#new-project").val();
                    project_name = project_name.split(" ").join("_");                             // Replaces spaces with underscores
                    $("<li><a href = '#" + project_name+ "'>" + project_name + "</a><span class='ui-icon ui-icon-close'></span></li>")
                                    .appendTo("#main");                                           // A new li element is appended to the unordered list
                    $("<ol id='" + project_name + "'></ol>").appendTo("#projects").sortable();               // A ordered list is created and appended to the div element having id=#projects
                    
                    $("#projects").tabs("refresh");                                               // Makes the new entry appear as a tab
                    let tab_count = $("#projects .ui-tabs-nav li").length;
                     $("#projects").tabs("option", "active", tab_count-1);                        // Makes the newly added project as the active tab. tab_count-1 because jquery library counts from 0
                    $("#new-project").val("");                                                    // Clears the text box after appending
                    $(this).dialog("close");                                                      // Closes the dialog box after appending
                },
                "Cancel": function(){
                    // Clears the text field #new-project adn closes the dialog box
                    $("#new-project").val("");
                    $(this).dialog("close");
                }
            }});
    });

    $("#btn-add-task").button().click(function (){
        $("#task-dialog").dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new task": function(){
                    $("#projects").tabs("refresh");                                              // Refreshes tabs to get the new tab position
                    let active_tab = $("#projects").tabs("option", "active");                    // Gets the active tab
                    let tab_title = $("#main > li:nth-child(" + (active_tab+1) +") > a").attr("href");
                    $("#projects " + tab_title).append("<li><input type = 'checkbox'>" + $("#new-task").val() + "</li>");
                    // alert(tab_title);
                    $("#new-task").val("");
                    $(this).dialog("close");
                },
                "Cancel": function (){
                    $("#new-task").val("");
                    $(this).dialog("close");
                }
            }});
    });

    // Removing a checked task
    $("#projects").on("click", "input[type=checkbox]", function(){
        // closest("li") selects the closest ancestor/parent of "this" element i.e. the checkbox
        $(this).closest("li").slideUp(function (){
            $(this).remove();
        });
    });

    // Removing projects
    $("#projects").on("click", "span.ui-icon-close", function (){
        let project_index = $(this).closest("li").index();
        let project_id = $("#main li:eq(" + project_index + ") a").attr("href");                  // eq is similar to nth child but starts with 0
        $("#main li:eq(" + project_index + ")").remove();                                         // removes the project tab
        $(project_id).remove();                                                                   // removes the contents of the deleted project tab
        $("#projects").tabs("refresh");
    });
});