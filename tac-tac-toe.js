var turnsTracker = [];

function allowDrop(event){
 event.preventDefault();
}

function drag(event){
 event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
	var letter = event.dataTransfer.getData("text");       //x or O
	if(event.target.getElementsByTagName('img').length <1){    // length should 1 or 0
		if (turnsTracker[turnsTracker.length - 1] !== letter     // turnsTrack = ['x',]
			|| turnsTracker.length === 0                         // turnsTracker = [], you can add x or o
			) {
			event.preventDefault();
			var cln = document.getElementById(letter).cloneNode(true);       // clone the image the user dragged
			event.target.appendChild(cln);                                   // put image into the div
			turnsTracker.push(letter);                                      // add letter to turnsTracker = ['x','o']
			if (turnsTracker.length >= 5) {
				var array = document.getElementsByClassName('gridItem');
				declareWinner(array)
			}                                                 // check if theres a winner
	        return null;                                                    //exits the function
	    }
	}
    alert("Hey you can't do that!")                                       // only come here when if statement is not satisfied
}
 
 function declareWinner(arrayDivs){
 	var array = [];
 	for(let i = 0; i < arrayDivs.length; ++i){
 		if(arrayDivs[i].getElementsByTagName('img').length){
	 	array.push(arrayDivs[i].getElementsByTagName('img')[0].getAttribute('id'));
	    }else {
	    array.push(null);
	    }
 	}
 	if (array[0]+array[1]+array[2] === 'xxx' || array[0]+array[1]+array[2] === 'ooo'|| 
 		array[0]+array[3]+array[6] ==='xxx' || array[0]+array[3]+array[6] === 'ooo' || 
 		array[1]+array[4]+array[7] === 'xxx' || array[1]+array[4]+array[7] ==='ooo' || 
 		array[2]+array[5]+array[8] ==='xxx' || array[2]+array[5]+array[8] === 'ooo' || 
 		array[0]+array[4]+array[8] === 'xxx' || array[0]+array[4]+array[8] === 'xxx' || 
 		array[0]+array[4]+array[8] === 'ooo' || array[2]+array[4]+array[6]	=== 'xxx' ||
 		array[2]+array[4]+array[6] === 'ooo' ) {
 		alert("Winner");
 	}
 	};
 	
