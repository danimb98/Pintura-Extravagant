var c = 0;


function setup() {
  createCanvas(720, 400); //Crea un cuadrat de 720 x 400.
  background(255); //Fons del quadrat (blanc).
  strokeWeight(2) //Gruix de la linea (10).
  colorMode(HSB); //Tipus de color seleccionat (HSB).
  
  

}

function draw() {
  
  if (mouseIsPressed) {
   stroke(255);
  } else {
   noStroke(237, 34, 93);
  }
  rect(mouseX - 20, mouseY, 50,50); 
  rect(mouseX - 20, mouseY, 50,50);
  fill(mouseX - 20, mouseY, mouseX + 20, mouseY);
  print(mouseX, mouseY);
}