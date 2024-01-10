const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		});
		li.classList.add('active');
		main.scroll({top: 0, left : 0, behavior : 'smooth'});
	});
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById("menuBar");
const silang = document.getElementById("silang");

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	menu.style.display = "none";
	silang.style.display = "block";
});

let main = document.getElementById('main');
window.onclick = function(event) {
    if (event.target != menuBar) {
        sidebar.classList.add('hide');
        menu.style.display = "block";
        silang.style.display = "none";
    }
};


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
});


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
});

const switchMode = document.getElementById('switch-mode');
let mode = localStorage.getItem('mode');

if(mode == 'gelap') {
	//home();
	switchMode.checked = "true";
	document.body.classList.add('dark');
	document.querySelector(".container h3").classList.add('dark');
} else {
	//switchMode.checked = "false";
	document.body.classList.remove('dark');
	//home();
}

switchMode.addEventListener('change', function () {
	if(this.checked) {
		localStorage.setItem('mode', 'gelap');
		document.body.classList.add('dark');
	    	document.querySelector(".container h3").classList.add('dark');		
	} else {
		localStorage.setItem('mode', 'terang');
		document.body.classList.remove('dark');
	}
});


let Judul = document.getElementById("Judul");
let subJudul = document.getElementById("subJudul");
let ikon = document.getElementById("ikon");
let sambutan = document.getElementById("sambutan");

let tahun = new Date().getFullYear();
let thn_lalu = tahun - 1;

function home() {
  Judul.innerHTML = "Dashboard";
  subJudul.innerHTML = "Beranda";
  //ikon.classList.remove("");
  //ikon.classList.add("bxs-home");
  ikon.setAttribute("class", "bx bxs-home");
  sambutan.innerHTML = "Halaman Utama";
  document.getElementById("konten_home").style.display = "block";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function materi() {
  Judul.innerHTML = "Materi";
  subJudul.innerHTML = "Materi";
  ikon.setAttribute("class", "bx bx-book");
  sambutan.innerHTML = "Halaman Materi"
  document.getElementById("konten_materi").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none"
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function tes() {
  Judul.innerHTML = "Tes";
  subJudul.innerHTML = "Tes";
  //ikon.classList.remove("");
  //ikon.classList.add("bx-task");
  ikon.setAttribute("class", "bx bx-task");
  sambutan.innerHTML = "Halaman Tes"
  document.getElementById("konten_tes").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function telegram() {
  Judul.innerHTML = "Telegram";
  subJudul.innerHTML = "Telegram";
  ikon.setAttribute("class", "fa fa-telegram");
  sambutan.innerHTML = "Halaman Telegram"
  document.getElementById("konten_telegram").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function instagram() {
  Judul.innerHTML = "Instagram";
  subJudul.innerHTML = "Instagram";
  ikon.setAttribute("class", "fa fa-instagram");
  sambutan.innerHTML = "Halaman Instagram"
  document.getElementById("konten_instagram").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function youtube() {
  Judul.innerHTML = "Youtube";
  subJudul.innerHTML = "Youtube";
  ikon.setAttribute("class", "fa fa-youtube-play");
  sambutan.innerHTML = "Halaman Youtube"
  document.getElementById("konten_youtube").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function lomba_univ() {
  Judul.innerHTML = "Lomba Universitas";
  subJudul.innerHTML = "Lomba Universitas";
  ikon.setAttribute("class", "fa fa-graduation-cap");
  sambutan.innerHTML = "Halaman Lomba Univ"
  document.getElementById("konten_lomba_univ").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_pengaturan").style.display = "none";
}

function pengaturan() {
  Judul.innerHTML = "Pengaturan";
  subJudul.innerHTML = "Pengaturan";
  ikon.setAttribute("class", "fa fa-cog");
  sambutan.innerHTML = "Halaman Setting"
  document.getElementById("konten_pengaturan").style.display = "block";
  document.getElementById("konten_home").style.display = "none";
  document.getElementById("konten_materi").style.display = "none";
  document.getElementById("konten_tes").style.display = "none";
  document.getElementById("konten_telegram").style.display = "none";
  document.getElementById("konten_instagram").style.display = "none";
  document.getElementById("konten_youtube").style.display = "none";
  document.getElementById("konten_lomba_univ").style.display = "none";
}

function braphy() {
  window.open('https://www.instagram.com/braphyevent'+ tahun.toString() +'', '_blank')
}

function upc() {
  window.open('https://instagram.com/upc.'+ tahun.toString() +'', '_blank');
}

function logout() {
  window.close();
  window.open('https://google.com', '_self');
  window.history.forward(); 
}

home();
