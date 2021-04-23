$(document).ready(function() {

    //hide
    $("#hide").click(function() {
        $("#animate").hide(1000);
    });

    //show
    $("#show").click(function() {
        $("#animate").show(5000);
    });

    //animate
    $("#cool").on({            //To define multiple events on same id ..we used "on" function    (otherwise we can separately use the same cool id 2 times for clicking nd for mousenter)
        //click
        click : function(){
            $("#animate").css({"background-color":"black","color":"pink","border":"pink dashed 10px"})
            $("#animate").animate({padding:"20px",fontSize:"40px",left:"500px",width:"300px",height:"200px"})   //animate function doesnt support color propertt..so we cant give bg color property to animate
        },

        //hover
        mouseenter : function(){
            alert("Make that box cool");
        }
    });

//body change by double click
$("#dblclick").dblclick(function(){
    $("body").css({"background-color":"lightgrey","color":"purple","font-size":"25px","text-align":"center"});
    $("button").css({"background-color":"black","color":"pink","font-size":"30px"});
})

});