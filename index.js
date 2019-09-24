function produceDrivingRange(range) {
	return function(startingPoint, endingPoint) {
		const blockRange = range - Math.abs(parseInt(startingPoint) - parseInt(endingPoint));

		if(Math.sign(blockRange) === -1){
			return `${Math.abs(blockRange)} blocks out of range`;
		} else {
			return `within range by ${blockRange}`;
		}
	}
}

function produceTipCalculator(percent) {
	return function(billTotal) {
		return billTotal * percent;
	}
}

function createDriver() {
	let driverId = 0;

	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	}
}