$("#submit-burger").on('click',function(event){
    event.preventDefault();
    console.log("Click");

    //Check if text box is blank
    if(validateForm()){ //Value is not blank
        var newBurger = {
            name:$("#burger-entry").val().trim()
        }
        
        $.post("/add",newBurger,function(data){
            

        });

        //Empty Burger Name
        $("#burger-entry").val("");


       
    }else{  //Value is Blank

    }

    // //submit burger to db
    // var test = {
    //     name:"devon"
    // }
    // // $.get("/",function(data){});

    // // //when thats done get all burgers


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

