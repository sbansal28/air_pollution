budgetValues = [];

function preload() {
  table = loadTable("rising_temp.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 500);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
}

function draw() {
  background(220);
  text("Improved Air Pollution in Los Angeles (CO Levels)", 80, 100);
  fill(0);

  for (var i = 0; i < numberOfRows; i++) {
    //place years
    fill(0);
    text(table.getString(i, 0), i * 45 + 150, 420);
    //pull numbers
    budgetValues[i] = table.getString(i, 1);
    //draw graph
    
    fill(0);
    rect(i * 45 + 150, 400 - budgetValues[i]*35, 20, budgetValues[i]*35);
    
    fill(255, i, 0);
    noStroke();
    ellipse(i*45+160,395, 25);
    
    fill(0);
  }
   //determine highest value
   maxValue=max(budgetValues);
  for (var k=0;k<maxValue+1;k=k+0.5){
    if (Number.isInteger(k)){
      text(k,120,420-35*k);
    }
    
  }

}