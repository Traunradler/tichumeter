var v0,v1,v2,v3,v4 ;
var daten=[];
var nullpunkt_x=20;
var nullpunkt_y=550;
var breite=40;
//let daten=[];
//daten.push(v1);
//daten.push(v2);
//daten.push(v3);

function setup() {
myCanvas=createCanvas(800, 600);
myCanvas.id('myCanvas');
myCanvas.parent('canvasHolder');
v0=createVector(0, 0);

daten.push(v0);

translate(nullpunkt_x,nullpunkt_y);

var rot=createInput("","number");
rot.class("form-control")
rot.parent('rotHolder');
rot.id('rot');

var gruen=createInput("","number");
gruen.class('form-control');
gruen.id('gruen');
gruen.parent('gruenHolder');

var eintragen=createButton('Eintragen');
eintragen.class('btn btn-primary');
eintragen.parent('eintragenHolder');
eintragen.mousePressed(enterData);

var loeschen=createButton('Löschen');
loeschen.class('btn btn-secondary');
loeschen.parent('loeschenHolder');
loeschen.mousePressed(deleteData);
}

function draw() {
background(200);
translate(nullpunkt_x,nullpunkt_y);
drawDiagramm();
drawGraph();
}

function drawGraph(){
 //for(var i=0; i<daten.length;i++)
	//{


	for (var i=0; i<daten.length;i++) //Punkte zeichnen (rot und grün)
		{
		//x Punkte rot;
		strokeWeight(5);
		stroke(255,0,0);
		point(i*breite, (-daten[i].x)/2)
		strokeWeight(0);
		text((daten[i].x), i*breite+5, (-daten[i].x)/2)
    //y Punkte grün

		strokeWeight(5);
		stroke(0,200,24);
		point(i*breite,(-daten[i].y)/2-1)
		strokeWeight(0);
		text(daten[i].y, i*breite+5, (-daten[i].y)/2)
		}

	for (var i=0; i<daten.length-1;i++)
		{
			//rote linie
			strokeWeight(1);
			stroke(255,0,0);
			line(i*breite, (-daten[i].x)/2, (i+1)*breite, (-daten[i+1].x)/2);

			//grüne Linie
			stroke(0,200,24);
			line(i*breite, (-daten[i].y)/2-1, (i+1)*breite, (-daten[i+1].y)/2-1);
		}


}

function drawDiagramm(){

	stroke(0);
	strokeWeight(1);
	line(0,0,740,0);
	line(0,-500,740,-500);
	line(0,-250,740,-250);
	strokeWeight(0);
	text('500',740,-250);
	text('1000',740,-500);
}

function enterData()
{

	var runde=daten.length-1;
 if(!(rot.value==""||gruen.value=="")){
	var xneu=daten[runde].x+int(rot.value);
	var yneu=daten[runde].y+int(gruen.value);
  if(Number.isInteger(xneu)|Number.isInteger(yneu))
	{
	daten.push(createVector(xneu,yneu));
	rot.value='';
	gruen.value='';
	}
	if(xneu>=1000||yneu>1000){
		createP("Spiel ist aus");
	}
	}
}

function deleteData()
{
	daten.pop();
}
