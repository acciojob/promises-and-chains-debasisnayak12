//your JS code here. If required.
document.getElementById('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
			if(age >= 18){
				alert(`Welcome, ${name}. You can vote.`);
				resolve();
			}else{
				alert(`Oh sorry ${name}. You aren't old enough.`);
				reject();
			}
		}, 4000);
	});
	// promise
	//  .then(() => {
	// 	 console.log("Person is above 18");
	//  })
	// .catch(() => {
	// 	console.log("Person is below 18");
	// });
});



