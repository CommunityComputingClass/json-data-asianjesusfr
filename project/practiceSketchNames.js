let names = ["Taylor Swift", "Drake" , "Radiohead", "Bruno Mars", "Sza", "Kendrick", "Joey Badass"]
let y = 50; 

function setup() {
  createCanvas(400, 400);
  
  background("magenta")
  fill("white")
  textSize(16)
  
  for(let n = 0; n<names.length; n++){
    text(names[n], 150, y);
    y += 50; 
  }    
}