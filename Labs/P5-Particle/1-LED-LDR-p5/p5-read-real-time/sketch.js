var data;
var reading =0;
var currentM;

function setup() {
  createCanvas(500,500);
  var url= 'https://api.particle.io/v1/devices/260037000447333439313830/analogvalue?access_token=27280314aec35f59f2530e76ba2e999f3600dfd9';
  data = loadJSON(url, parseData);
  currentM=millis();
}



function draw() {
  fill(255);
  if(millis()-currentM>500){
    callAPI();
    text(reading, 20,20);
    ellipse(width/2,height/2,reading,reading);
  }


}


function parseData(data){

  reading = data.result;
  print("reading:"+reading);



}

function callAPI(){
    background(255,0,0);
  var url= 'https://api.particle.io/v1/devices/260037000447333439313830/analogvalue?access_token=27280314aec35f59f2530e76ba2e999f3600dfd9';
  data = loadJSON(url, parseData);
  currentM=millis();
}
