function calculateCalories() {
	let currentWeight  = Number(prompt("Your current weight (kg)?"), "");
	let desiredWeight = Number(prompt("Your desired weight (kg)?"), "");
	let weeksCalculation = Number(prompt("How many weeks?"),"");
	let firstResult = (((7700 * (currentWeight - desiredWeight)) / weeksCalculation) / 7);
	let secondResult = (((7700 * (desiredWeight - currentWeight)) / weeksCalculation) / 7);
	if (currentWeight > desiredWeight) {
		alert("If you want to achive the desired wieght, you have to lose " + firstResult + " per day!");
		let confirmation = confirm("Want to calculate calories again?");
		if (confirmation === true) {
			calculateCalories();
		} 
	} else {
		alert("If you want to achive the desired wieght, you have to gain " + secondResult + " per day!");
		let confirmation = confirm("Want to calculate calories again?");
		if (confirmation === true) {
			calculateCalories();
		}
	}
	return firstResult;
	return secondResult;
}


let calculation = calculateCalories();






