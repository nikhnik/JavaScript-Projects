$("#btn").click(function () { 
    const birtdayDate = new Date($("#dob").val());
    if($("#dob").val() == ""){
        alert("Please enter your date of birth");
    }
    const currentDate = new Date();

    let age = currentDate.getFullYear()-birtdayDate.getFullYear();
    const  month = currentDate.getMonth()-birtdayDate.getMonth();

    if(month<0 || (month == 0 && currentDate.getDay()<birtdayDate.getDate())){
        age--;
    }
    if(age>0){
    $("#text").text("Your age is "+age+" years old");
    }
});

