$(document).ready(function(){
    getBurgersAndDisplay();

});

function getBurgersAndDisplay(){
    $.get('/burgers',function(data){
        console.log(data);
        displayBurgers(data);
     });

}

$("#burger-not-eaten-container").bind('click', function(event){
  var $burgerBox =  $("#"+event.target.id).parent();
  var burgerId = $burgerBox.attr("id");
  var burgerText = $("#burger-paragraph-id-"+burgerId).text().replace(burgerId+ "." +" ","");

    var jsonArray = [
        {
            id:burgerId,
            burger_name:burgerText,
            devoured: true
        }
    ];
    $burgerBox.remove();
    displayBurgers(jsonArray);
    updateBurger(burgerId,burgerText);
});

function updateBurger(burgerId,burgerDescription){
    $.ajax({
        url: "/update/:"+burgerId+"/:"+burgerDescription+"/:"+true,
        type: 'PUT',
        success: function(result) {
            console.log("Done!");
        }
    });

}


$("#submit-burger").on('click',function(event){
    event.preventDefault();
    console.log("Click");

    //Check if text box is blank
    if(validateForm()){ //Value is not blank
        var newBurger = {
            name:$("#burger-entry").val().trim()
        }

        $.post("/add",newBurger).then(function(){
           getBurgersAndDisplay();
        });

        //Empty Burger Name
        $("#burger-entry").val("");       
    }else{  //Value is Blank

    }
});

// Form validation
function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
}

//Display Burgers
function displayBurgers(burgerObjectArray =[]){
    burgerObjectArray.forEach(element =>{
        var $burgerBox = $("<div/>");
        
        
        var $burgerDescription = $("<p/>");
        $burgerDescription.text(element.id + "." +" "+element.burger_name);
        $burgerDescription.attr("id","burger-paragraph-id-"+element.id);

        $burgerBox.attr("id",element.id.toString());
        $burgerBox.append($burgerDescription);

        if(element.devoured){
            $burgerBox.addClass("burger-eaten burgers text-center mt-2 px-2");
            $("#burger-eaten-container").append($burgerBox);

        }else{
            $burgerBox.addClass("burger-not-eaten burgers text-center mt-2 px-2");
            var $eatMeButton = $("<button/>");
            $eatMeButton.addClass("btn btn-primary eat-me");
            $eatMeButton.attr("id","burger-"+element.id);
            $eatMeButton.text("Eat Me");
            $burgerBox.append($eatMeButton);
            $("#burger-not-eaten-container").append($burgerBox);
        }
       
    });
}



