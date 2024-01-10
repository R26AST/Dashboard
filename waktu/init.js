const efcc_countdown = new countdown({
  target: '.countdown',
  dayWord: ' Hari',
  hourWord: ' Jam',
  minWord: ' Menit',
  secWord: ' Detik'
});


const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	    document.querySelector(".container h3").classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});