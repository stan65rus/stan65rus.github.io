const btnEnd = document.getElementById("btn_end");
btnEnd.addEventListener ('click',reload_page);

//массив частй для ника
let part = ["pro", "dreamsq", "tv", "333", 
"mavrodi", "228", "brawl_stars", "top", "palifagus", 
"UKR", "blackReaper", "StarHacker2", "СинийЛучНик", 
"skeletikgames","misterL38956", "borislav", "TheDanilYT", "bel", "zachem-mne-spasat-otrebye-vrode-tebya",
"KanekiKun", "movi", "fortnite", "YaroslavMirnyi", "Pro100_marik", "assasin", "blackDimaIQ228", "navalniyTOP", "SSS", "popov", "666",
"Kur"];

//максимальный случайный член массива
let part_max = part.length;
console.log(part_max);

//максимальная количество частей ника
let max = 6;
console.log(max);

//минимальное количество частей ника
let min = 3;
console.log(min);

//случайное число для количества частей ника
let nick = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log(nick);

//делаем ник
let rand_w;
let full_nick = "";
let new_part;

for (i=0; i <= nick; i++) {
	do {
		rand_w = Math.floor(Math.random() * Math.floor(part_max));
		new_part = part[rand_w];
	} while (full_nick.includes(new_part))

	full_nick = full_nick+"_"+new_part;
}
console.log(full_nick);


let name = prompt("Введи свое имя");
const logName = document.getElementById("log-try");
logName.textContent = name+"_65rus"+full_nick;

function reload_page(){
    window.location.reload();
} 