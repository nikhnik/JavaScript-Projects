var rollCount = 1;
$("#roll-button").click(function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
     $("#dice").addClass("rollAnimation");
    setTimeout(function () {
        $("#dice").removeClass("rollAnimation");
    }, 1000);
    $("#dice").html(changDice(randomNumber));
    $("#roll-history").append("<li>Roll "+ (rollCount++)+": <span>"+changDice(randomNumber)+"</span></li>");
});

function changDice(randomNumber){
    let text = "";
    switch(randomNumber){
        case 1:
            text = "&#9856;"
            break;
        case 2:
            text = "&#9857;"
            break
        case 3:
            text = "&#9858;"
            break
        case 4:
            text = "&#9859;"
            break
        case 5:
            text = "&#9860;"
            break
        case 6:
            text = "&#9861;"
            break
    }
    return text;
}