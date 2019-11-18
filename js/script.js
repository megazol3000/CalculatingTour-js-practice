

function raschitat() {
peoples = document.getElementById('chel').value;
days = document.getElementById('day').value;
beach1 = document.getElementById('b1');
beach2 = document.getElementById('b2');
beach3 = document.getElementById('b3');
food =document.getElementsByName('food');
stars =document.getElementsByName('star');

stoimost1 = parseFloat(peoples) * (parseFloat(days) * 1000);


for (i=0; i<food.length; i++) {
		if (food[i].checked) {
			stoimost2 = food[i].value * stoimost1;
			break;
		}
	}

if (beach1.checked){ stoimost3 = parseFloat(beach1.value) * stoimost2; } else { stoimost3 = stoimost2; }
if (beach2.checked){ stoimost4 = parseFloat(beach2.value) * stoimost3; } else { stoimost4 = stoimost3; }
if (beach3.checked){ stoimost5 = parseFloat(beach3.value) * stoimost4; } else { stoimost5 = stoimost4; }


for (i=0; i<stars.length; i++) {
		if (stars[i].checked) {
			stoimost6 = stars[i].value * stoimost5;
			break;
		}
	}


document.getElementById('stoimost').innerHTML = "Стоимость тура составит: "+ stoimost6.toFixed(2) + " " +"рублей";
	
}