var formation = ["Raphael", "Océane", "Jordy","Mouad","Romain","Marco","Florian","Emilie","Franck","Elodie","Grégory","Morel","Maxime","Julien"]; // la formation comtient 5 groupes
var table =["table 1", "table 2", "table 3", "table 4", "table 5"];
//var disposition =[formation [i]+ " " + table[i]];	
if (formation !=""){

	function shuffle(array) {
		for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};

	$(document).ready(function(){

	var currentPosition = formation.length, temporaryPosition, randomPosition;

	for (i=formation.length; i<=0; i--){

			randomPosition = Math.round(currentPosition*Math.random());
			currentPosition -= 1

			temporaryPosition = formation[currentPosition];
			formation[currentPosition] = formation[randomPosition];
			formation[randomPosition] = temporaryPosition;
		}
	formation = shuffle(formation);
		console.log (formation);

	});

}

var notable = -1

for (i=0; i<=formation.length; i++){

	if (notable>=table.length-1 ){
		notable = 0
	} else

	{notable ++}

console.log (formation[i] +" "+ table[notable]);
	}