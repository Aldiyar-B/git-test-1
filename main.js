
const serverUrl = 'https://api.genderize.io';

let input = document.querySelector('.content');
input.addEventListener('submit', (event) => {
	event.preventDefault();
	f(document.querySelector('.input').value)
})

async function f(userName) {
	const url = `${serverUrl}?name=${userName}`;
	const response = await fetch(url);
	const data = await response.json();
	const gender = data.gender;

	console.log(`${userName} is ${gender}`)

}