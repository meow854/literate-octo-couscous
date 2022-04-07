function preload() {

}

function setup () {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
}

rand_bum= ['Crown', 'Grass', 'Drums', 'Swan', 'Nose', 'Paint Can', 'Grapes', 'Bottlecap', 'Feather', 'Hot Tub', 'Beard', 'Diamond', 'Sailboat', 'Ereaser'];
random= Math.floor(Math.random()*rand_bum);
brawlhalla= zariel[random];
console.log(brawlhalla);
document.getElementById("drawn").innerHTML= "Sketch To Be Drawn -" + random;

counter= '0';
check= '';
sketch= '';
holder= '';
score= '0';