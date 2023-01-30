

document.getElementById('btn').addEventListener('click', (e) => {
	e.preventDefault();
	let input = document.getElementById('date')
	let needDate = input.value
	console.log(needDate)
	counts(needDate)

})


function counts(needDate) {

	setInterval(function () {
		let now = new Date();
		console.log()
		let targetDate = new Date(needDate);
		console.log()

		let gap = targetDate - now


		let days = Math.floor(gap / 1000 / 60 / 60 / 24);
		let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(gap / 1000 / 60) % 60;
		let seconds = Math.floor(gap / 1000) % 60;

		let result = document.getElementById('result');
		result.textContent = `${days} дн ей : ${hours} чаасов : ${minutes} минут  : ${seconds} секунд`
	}, 1000);

}
