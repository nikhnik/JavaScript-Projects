const animals = [
    {
        imageSrc: "./images/dog.png",
        about: "Swag dog struts with confidence, a king of the street,  With shades on his eyes and a rhythm in his feet. His vibe is unmatched, he's the talk of the town, Crowned in coolness, rocking his fur like a crown! 🐾😎",
        userName: "Ryder"
    },
    {
        imageSrc: "./images/cat.png",
        about: "Swag cat strolls with style, the coolest on the block, With shades and a smirk, he's the king of the flock. Paws tap to the rhythm, tail sways in the breeze, A feline icon, spreading coolness with ease. 🐾😎",
        userName: "DJ Pawz"
    },
    {
        imageSrc: "./images/rat.png",
        about: "Swag rat struts the alleys, a legend in disguise, With a snapback tilted and mischief in his eyes. Cheese in one paw, and a vibe that's supreme, He's the rodent ruler, living life like a dream. 🐾😎",
        userName: "Nibbles King"
    }
];
let animalIndex = 0;
$("#next-btn").click(function () {
    if(animalIndex == animals.length - 1){
        animalIndex = -1;
    }
    animalIndex = animalIndex+1;
    $("#next-btn").fadeIn(100).fadeOut(100).fadeIn(100);
    $(".profileImage").attr("src",animals[animalIndex].imageSrc);
    $("#text").text(animals[animalIndex].about);
    $("#userName").text(animals[animalIndex].userName);
});

$("#prev-btn").click(function () {
    if(animalIndex == 0 || animalIndex == -1 ){
        animalIndex = 3;
    }
    animalIndex = animalIndex-1;
    $("#prev-btn").fadeIn(100).fadeOut(100).fadeIn(100);
    $(".profileImage").attr("src",animals[animalIndex].imageSrc);
    $("#text").text(animals[animalIndex].about);
    $("#userName").text(animals[animalIndex].userName);
});
