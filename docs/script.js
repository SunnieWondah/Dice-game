let random1 = (Math.random()*6);
let floor1 = Math.floor(random1);
let random2 = Math.random()*6;
let floor2 = Math.floor(random2);
let images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".dice .img1").setAttribute("src",images[floor1]);
document.querySelector(".dice .img2").setAttribute("src",images[floor2]);
if (floor1 < floor2) {
    document.querySelector("h1").innerHTML = "<h1>Player 2 Wins!🚩</h1>"
} else if (floor1 > floor2) {
    document.querySelector("h1").innerHTML = "<h1>🚩Player 1 Wins!</h1>"
} else if (floor1 == floor2) {
    document.querySelector("h1").innerHTML = "<h1>Draw!</h1>"
};
 