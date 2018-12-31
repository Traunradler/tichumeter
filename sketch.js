var v0,v1,v2,v3,v4 ;
var daten=[];
var nullpunkt_x=20;
var nullpunkt_y=570;
var breite=35;
//let daten=[];
//daten.push(v1);
//daten.push(v2);
//daten.push(v3);

function setup() {
myCanvas=createCanvas(600, 620);
myCanvas.id('myCanvas');
myCanvas.parent('canvasHolder');
v0=createVector(0, 0);

daten.push(v0);

translate(nullpunkt_x,nullpunkt_y);

var rot=select('#rot');
var gelb=select('#gelb');


var eintragen=select('#eintragenHolder');
//eintragen.class('btn btn-primary');
//eintragen.parent('eintragenHolder');
eintragen.mousePressed(enterData);

var loeschen=select('#loeschenHolder');
loeschen.mousePressed(deleteData);
}

function draw() {
background(217,233,252);
translate(nullpunkt_x,nullpunkt_y);
drawDiagramm();
drawGraph();
}

function drawGraph(){
 //for(var i=0; i<daten.length;i++)
	textSize(16);
	//{
	for (var i=0; i<daten.length-1;i++)
		{
			//rote linie
			strokeWeight(2);
			stroke(228,158,159);
			line(i*breite, (-daten[i].x)/2, (i+1)*breite, (-daten[i+1].x)/2);

			//grüne Linie
			stroke(239,208,147);
			line(i*breite, (-daten[i].y)/2-1, (i+1)*breite, (-daten[i+1].y)/2-1);
		}

	for (var i=0; i<daten.length;i++) //Punkte zeichnen (rot und grün)
		{
		//x Punkte rot;
		strokeWeight(8);
		stroke(228,158,159);
		point(i*breite, (-daten[i].x)/2)
		strokeWeight(0);
		text((daten[i].x), i*breite+5, (-daten[i].x)/2)
    //y Punkte grün

		strokeWeight(8);
		stroke(239,208,147);
		point(i*breite,(-daten[i].y)/2-1)
		strokeWeight(0);
		text(daten[i].y, i*breite+5, (-daten[i].y)/2)
		}




}

function drawDiagramm(){

	stroke(0);
	strokeWeight(2);
	stroke(100);
	line(0,0,539,0);
	line(0,-500,539,-500);
	strokeWeight(1);

  for(var i=50; i<500; i+=50)
	{line(0,-i,539,-i);
	//line(0,-100,539,-100);
	//line(0,-150,539,-150);
	//line(0,-200,539,-200);
	//line(0,-250,539,-250);
}

	strokeWeight(0);
	fill(50);
	text('1000',541,-500);
}

function enterData()
{

	var runde=daten.length-1;
 if(!(rot.value==""||gelb.value=="")){
	var xneu=daten[runde].x+int(rot.value);
	var yneu=daten[runde].y+int(gelb.value);
  if(Number.isInteger(xneu)|Number.isInteger(yneu))
	{
	daten.push(createVector(xneu,yneu));
	rot.value='';
	gelb.value='';
	}
	if(xneu>=1000){
		var rotgewonnen=createP('Rot hat gewonnen');
		rotgewonnen.parent('rotgew')
		rotgewonnen.class('gewonnen rot');
	}
	if(yneu>=1000)
	var gelbgewonnen=createP('Gelb hat gewonnen');
	gelbgewonnen.parent('gelbgew')
	gelbgewonnen.class('gewonnen gelb');
	}
}

function deleteData()
{
	if(daten.length>1)
	{
	daten.pop();
	}
}
