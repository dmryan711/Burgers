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

