const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
	let t0 = performance.now();
	for(let i=0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('Found nemo on ' + (i + 1) + ' position');
		}
	}
	let t1 = performance.now();
	console.log('Time: ' + (t1 - t0) + ' milliseconds');
};


findNemo(large);
