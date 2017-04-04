var formation = ["Raphael", "Océane", "Jordy","Mouad","Romain","Marco","Florian","Emilie","Franck","Elodie","Grégory","Morel","Maxime","Julien","Dimitri"]; // la formation comtient 5 groupes
var table =["table 1", "table 2", "table 3", "table 4", "table 5"];

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

	formation = shuffle(formation);

var notable = -1

for (j=0; j<=formation.length; j++){

	if (notable>=table.length-1 ){
		notable = 0
	} else

	{notable ++}
	
	
	$("tbody").append("<tr><th>"+formation[j]+"</th><th>"+table[notable]+"</th></td>") 
	};

	};
;

			 
		 

	