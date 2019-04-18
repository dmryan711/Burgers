$("#submit-burger").on('click',function(event){
    event.preventDefault();
    console.log("Click");

    //Check if text box is blank
    if(validateForm()){ //Value is not blank
        var newBurger = {
            name:$("#burger-entry").val().trim()
        }

        $.post("/add",newBurger).then(function(){
           $.get('/burgers',function(data){
                console.log(data);
                displayBurgers(data);
             });

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
        $burgerBox.addClass("burger-not-eaten burgers text-center mt-2 px-2");
        console.log(element.id + "." +" "+element.burger_name);
        
        var $burgerDescription = $("<p/>");
        $burgerDescription.text(element.id + "." +" "+element.burger_name);
        var $eatMeButton = $("<button/>");
        $eatMeButton.addClass("btn btn-primary");
        $eatMeButton.text("Eat Me");

        $burgerBox.append($burgerDescription);
        $burgerBox.append($eatMeButton);

        $("#burger-not-eaten-container").append($burgerBox);

    });
}

