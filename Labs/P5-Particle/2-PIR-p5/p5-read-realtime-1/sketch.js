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


}


function parseData(data){
  background(255,0,0);
  reading = data.result;
  print("reading:"+reading);

}
