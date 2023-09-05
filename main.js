
const users = [
	{
		name: "brayan muñoz",
		email: "brayan@gmail.com",
		hobbies: ["pintar", "correr", "aprender", "enseñar"],
	},
	{
		name: "Hayder",
		email: "hayderarenas0206@gmail.com",
		hobbies: ["jugar futbol", "jugar free :v", "jugar play", "deportes"],
	},
	{
		name: "sergio",
		email: "sergio@academlo.com",
		hobbies: ["jugar futbol", "Entre muchas mas"],
	},
	{
		name: "diana",
		email: "dimaceri27@gmail.com",
		hobbies: ["música", "bailar", "naturaleza"],
	},
	{
		name: "Camilo Martinez",
		email: "camiloestebam@gmail.com",
		hobbies: ["musica", "leer", "bike"],
	},
	{
		name: "John",
		email: "johnrau@gmail.com",
		hobbies: ["correr", "jugar play", "ir al cine"],
	},
	{
		name: "Matias",
		email: "matias@correo.com",
		hobbies: ["comer", "leer", "lolcito"],
	},
	{
		name: "Andrés Parra",
		email: "anphillip7@gmail.com",
		hobbies: [
			"estudiar idiomas",
			"pasear",
			"cocinar",
			"programar",
			"leer",
			"jugar videojuegos",
			"escuchar musica",
		],
	},
	{
		name: "David",
		email: "kdavidh2002@gmail.com",
		hobbies: ["ciclismo", "jugar warzone"],
	},
	{
		name: "Luis Mota",
		email: "madbroxz@outlook.com",
		hobbies: ["Videojuegos", "Programar", "escuchar musica"],
	},
];

const userHTML = document.querySelector(".user");
for (const user of users) {
let html = `<div class="card">
			<h3>${user.name}</h3>
			<div class="line"></div>
            <p>${user.email}</p>
            <ul>
                ${printHobbies(user.hobbies)}
            </ul>
			</div>
        `;
userHTML.innerHTML += html;
}
function printHobbies(hobbies) {
	let html = "";

	for (const hobbie of hobbies) {
		html += `<li>${hobbie}</li>`;
	}

	return html;
}