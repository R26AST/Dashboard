//This is an example of a json data
//NB: The questions are supposed to be served from an api not added in the javascript
var exam = {
    "duration": 60,
    "instruction": "Jawablah dengan menekan tombol opsi jawaban yang tersedia.<br><br>Untuk pengguna komputer/laptop sendiri dapat menekan tombol A, B, C, D, atau E pada keyboard untuk menjawab.",
    "questions":[
        {
            "question": 'Sebuah asteroid misterius memiliki periode orbit 54 tahun, dan memiliki eksentrisitas 0,37. Pada tanggal 8 Juli 2271, asteroid ini mencapai titik terjauhnya. Kapankah asteroid ini mencapai jarak terdekatnya dari Matahari?',
            "options": ["Tahun 2379", "Tahun 2346", "Tahun 2325", "Tahun 2298", "Tahun 2271"],
            "answerPosition": 3
        },
        {
            "question": "Anggaplah kita hidup di masa depan dengan teknologi yang amat canggih. Terdapat sebuah teleskop yang mampu menangkap foto bintang yang teramat jauh. Bintang tersebut diestimasikan memiliki paralaks sebesar 2 pas (pico arcsecond). Estimasi jarak dari bintang tersebut adalah ...",
            "options":["50pc", "50kpc", "50Mpc", "50Gpc", "500Gpc"],
            "answerPosition": 4
        },
        {
            "question": "Consider the binary system Kepler-16, which has the primary star Kepler-16A and the secondary star Kepler-16B. It has an orbital period P = 41.08 days and the measured parallax is p =13.29 mas. Calculate the total mass of the stars, using the fact that their maximum angular separation measured from Earth is θ = 2.98 mas and they are on an edge-on orbit.",
            "options": ["0.56 M<sub>⊙</sub>", "0.74 M<sub>⊙</sub>", "0.89 M<sub>⊙</sub>", "1.03 M<sub>⊙</sub>", "1.17 M<sub>⊙</sub>"],
            "answerPosition": 3
        },
        {
            "question": 'Dua buah bintang terpisah sebesar 2,6 derajat di langit. Kedua bintang tersebut masing-masing memiliki paralaks 0,07" dan 0,32". Berapakah jarak antara kedua bintang tersebut?',
            "options": ["35", "175", "11,6pc", "10025", "60025"],
            "answerPosition": 2
        },
        {
           "question": `Sebuah bintang yang memiliki luminositas yang sama dengan Matahari (Mv = 4,7 mag) berjarak 26 parsek dari Bumi. Tentukanlah magnitudo semu bintang tersebut dan apakah bintang tersebut dapat terlihat dari Bumi. (Abaikan ekstingsi atmosfer dan materi antar bintang)`,
            "options": ["6,77 mag dan terlihat", "6,77 mag dan tidak terlihat", "5,77 mag dan terlihat", "5,77 mag dan tidak terlihat", "4,77 mag dan terlihat"],
            "answerPosition": 1
        },
        {
            "question": `Louis sedang berada di ruangan tertutup. Apabila ia ingin keluar dari ruangan tersebut, ia harus memecahkan suatu teka-teki fisika.
	    <br>Berikut adalah properti-properti yang dimiliki oleh foton
     <br>1.Foton memiliki momentum
     <br>2.Foton pasti merupakan gelombang
     <br>3.Semakin pendek panjang gelombang foton, semakin besar energi foton
     <br>4.Foton tidak memiliki massa
     <br><Bantulah Louis untuk memecahkan teka-teki tersebut dengan menjawab pernyataan yang benar agar dia dapat keluar!`,
            "options": ["1, 2, dan 3", "1 dan 3", "2 dan 4", "benar semua", "salah semua"],
            "answerPosition": 1
        },
        {
            "question": "Sebuah planet yang bermassa 6 x 10<sup>25</sup> kg mengorbit bintang induknya dengan kecepatan 12 km/s. Jika planet dianggap sebagai benda partikel dan momentum sudut sistem bernilai 2,6 x 10<sup>41</sup> kg m<sup>2</sup>/s, tentukan periode planet tersebut!",
            "options": ["3 tahun", "4 tahun", "5 tahun", "6 tahun", "7 tahun"],
            "answerPosition": 3
        },
        {
            "question": "Sebuah yang planet mengorbit matahari memiliki periode orbit 10747 hari, dengan jarak rata-rata dari matahari 10 AU. Tentukan kecepatan planet tersebut!",
            "options": ["1,6 km/s", "7,89 km/s", "8,32 km/s", "9,67 km/s", "10,12 km/s"],
            "answerPosition": 2
        },
        {
            "question": 'Reaksi fusi nuklir pada inti bintang hanya terbatas hingga unsur <sub>26</sub>Fe. Hal ini terjadi karena',
            "options": ["Atom terberat adalah Besi", "Bintang tidak mengandung atom yang lebih berat dari Besi", "Reaksi fusi nuklir yang melibatkan pembuatan unsur lebih berat dari Fe memerlukan energi, bukan menghasilkan energi", "Atom Fe tidak bisa direaksi fusikan kembali", "Temperatur bintang tidak cukup untuk membakar Fe"],
            "answerPosition": 2
        },
        {
            "question": "Diketahui sebuah bintang dengan magnitudo semu = m dan magnitudo mutlak = M. Selama perjalanan cahayanya di ruang antar bintang, magnitudo semu bintang tersebut bertambah sebesar 2,6. tentukan perbandingan jarak yang sebenarnya dengan jarak yang mengabaikan absorpsi!",
            "options": ['1,0', '0,9', '0,7', '0,5', '0,3'],
            "answerPosition": 4
        },
        {
            "question": "Pengamatan spektroskopi dilakukan pada sebuah bintang yang berotasi. Diketahui pelebaran garis doppler <i>Fe<sub>1</sub></i> 4071,74 Å bintang tersebut sebesar 3 Å. Berapakah kecepatan rotasi bintang tersebut?",
            "options": ['100km/s', '110km/s', '200km/s', '220km/s', '440km/s'],
            "answerPosition": 1
        },
        {
            "question": "Diketahui sebuah sistem planet di sebuah galaksi yang sangat jauh dari Bumi. Sistem planet tersebut terdiri dari sebuah bintang deret utama sebagai bintang induk dan 5 planet. Salah satu planet yang mengorbit bintang deret utama tersebut memiliki sumbu semi mayor sebesar 2,6 SA dan periode orbit selama 2 tahun. Perkirakanlah luminositas dari bintang induk tersebut dalam satuan luminositas Matahari!",
            "options": ["1,3 L<sub>⊙</sub>", "4,394 L<sub>⊙</sub>", "19,3 L<sub>⊙</sub>", "177,8 L<sub>⊙</sub>", "1 L<sub>⊙</sub>"],
            "answerPosition": 3
        },
        {
            "question": `A star with a density that is not homogeneous, follows the equation : <br><br>
      <span style="font-size: 20px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c1;</mi><mo>(</mo><mi>r</mi><mo>)</mo><mo>=</mo><msub><mi>&#x3c1;</mi><mn>0</mn></msub><mo>(</mo><mn>1</mn><mo>-</mo><mfrac><mrow><mn>2</mn><mi>r</mi></mrow><mi>R</mi></mfrac><mo>)</mo></math></span>
	<br><br>Where <i>r</i> is a distance from center to some point of <i>r</i> and <i>R</i> was the radius of 
      the stars, which is equals to 5 times radius of the sun, while <i>ρ<sub>0</sub></i> = 3700<i>kg/m</i><sup>3</sup>.
      Calculate the accumulated mass at the distance of 1/2 <i>R</i> ! 
      <br>(Hint : Use the continuity mass equation! <span style="font-size: 20px;">
      <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>d</mi><mi>M</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>4</mn><mi>&#x3c0;</mi><msup><mi>r</mi><mn>2</mn></msup><mi>&#x3c1;</mi><mo>(</mo><mi>r</mi><mo>)</mo></math></span>
     ) `,
            "options": ["0,8", "0,9", "1", "1,1", "1,22"],
            "answerPosition": 3
        },
        {
            "question": "Berapakah <i>FoV</i> sebuah teleskop yang memiliki fokus 80 cm dan <i>eyepiece</i> dengan <i>FoV<sub>eyepiece</sub></i> 80° dan fokus 25 mm?",
            "options": ["1°15'", "1°30'", "2°15'", "2°30'", "3°15'"],
            "answerPosition": 3
        },
        {
            "question": "Suatu ayunan bandul yang berada di Bumi, memiliki periode sebesar 4 detik. Berapakah periode ayunan bandul tersebut jika berada di planet Mars?",
            "options": ["5,5 detik", "6 detik", "6,5 detik", "7 detik", "7,5 detik"],
            "answerPosition": 2
        }
    ]
}

let kunci = [0, 0, 3, 4, 2, 3, 1, 2, 1, 0, 2, 0, 3, 4, 2];

var sec = 0, detik, x, hps;
var timerObject;

var questionDiv = document.getElementById("questionDiv");
var optionDiv = document.getElementById("optionDiv");
var questionsButton = document.getElementById("questionsButton");

var answers = [];
var examLength, examTime;

let progress = document.getElementById("progressBar");

function showCbt(){
    document.getElementById("link-modal").style.display = "none";
    document.querySelector(".navbar").style.backgroundColor="#fff";
    questionsButton.innerHTML = "";
    examLength = exam.duration; //Exam length in minutes
    examTime = exam.duration;
    for(var i = 0; i < exam.questions.length; i++){
        questionsButton.innerHTML += '<button class="qbtn" id="NoSoal" onclick="return showQuestion('+i.toString()+')">'+(i + 1).toString()+'</button>';
        answers[i] = -1;
    }
    showQuestion(0);
    x = 0;
    hps = 0;
    detik = exam.duration * 60;
	if(!localStorage.endTime)
	{
		localStorage.endTime = +new Date + detik * 1000;
	}
    timerObject = setInterval(runTimer, 999);
}

var buttonState = 0;
function showNumber() {
    buttonState = 1 - buttonState;
    
    if (buttonState) {
        document.getElementById("menu").style.backgroundColor = "gainsboro"
        document.getElementById("questionsButton").style.display = "block";
        
    }
    else {
        document.getElementById("menu").style.backgroundColor = "white"
        document.getElementById("questionsButton").style.display = "none";
    }
}

function sebelum() {
    x--;
    if (x < 0) {x = 0;}
    else {x = x;}
    showQuestion(x);
	window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}
function setelah() {
    x++;
    if(x > 14) {x = 14;}
    else {x = x;}
    showQuestion(x);
	window.scroll({ top: 470, left: 0, behavior: 'smooth'});
}

function runTimer(){  
	var remaining = localStorage.endTime - new Date;
	
	var hour = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var min = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
	var sec = Math.floor((remaining % (1000 * 60)) / 1000);
	
	var progressWidth = ((remaining / 1000) / detik) * 100;
	
    //let progressWidth = examLength / examTime * 100;
	progress.style.width = progressWidth + "%";

	
    if (progressWidth > 66) {
        progress.style.backgroundColor = "#22baa0";
    }
    else if (progressWidth <= 66 && progressWidth > 33) {
        progress.style.backgroundColor = "#f6d433";
    }
    else if (progressWidth <= 33 && progressWidth > 0) {
        progress.style.backgroundColor = "#f25656";
    }
            else {
                progress.style.backgroundColor = "#22baa0";
            }
    

	if(remaining >= 0){
            $('#timerSpan').text('Sisa Waktu = ' + (hour < 10 ? '0' : '') + hour + ' : ' + (min < 10 ? '0' : '') + min + ' : ' + (sec < 10 ? '0' : '') + sec);
            //progress.style.width = progressWidth + "%";
        }
        else{
            progress.style.width = "0%";
            submitExam();
        }

	
    /*var hour = Math.floor(examLength / 60);
    var min = examLength % 60;
    if(sec <= 9 && min > 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : " + min.toString() + " : 0" + sec.toString();
	}
	else if(min <= 9 && sec > 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : 0" + min.toString() + " : " + sec.toString();
	}
	else if(min <= 9 && sec <= 9) {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : 0" + min.toString() + " : 0" + sec.toString();
	}
	else {
		document.getElementById("timerSpan").innerHTML = "Sisa Waktu = 0" + hour.toString() + " : " + min.toString() + " : " + sec.toString();
	}*/
}


function showQuestion(questionNumber){
    //questionDiv.innerHTML = exam.questions[questionNumber].question;
	questionDiv.innerHTML = '<b>Soal Nomor '+ (questionNumber + 1).toString() +'.</b><br><br>'+ exam.questions[questionNumber].question ;
	
    optionDiv.innerHTML = "";
    x = questionNumber;
    hps = x;
	
     for(var i = 0; i < exam.questions[questionNumber].options.length; i++){
        //optionDiv.innerHTML += '<br><input type="radio" id="opsi" onclick="selectAnswer('+questionNumber+','+ i.toString()+')" name="questionOptions"/>' + exam.questions[questionNumber].options[i].toString() + '<br>';
		
		
		optionDiv.innerHTML += '<input type="radio" id="opsi'+i.toString()+'" onclick="selectAnswer('+questionNumber+','+i.toString()+')" name="questionOptions"/><label for="opsi'+i.toString()+'" class="opsi'+i.toString()+'"><div class="dot" id="abj'+i.toString()+'"></div> <span class="teks">' + exam.questions[questionNumber].options[i].toString() + '</span> </label>';
	 
	 }
    
	/*document.getElementById("abj0").innerHTML = "A";
	document.getElementById("abj1").innerHTML = "B";
	document.getElementById("abj2").innerHTML = "C";
	document.getElementById("abj3").innerHTML = "D";
	document.getElementById("abj4").innerHTML = "E";*/ 

	/*document.addEventListener("keydown", function (e) {
		//Memilih jawaban dengan keyboard
		if (e.key === "A" || e.key === "a") {
			document.getElementById("opsi0").checked = "true";
			selectAnswer(questionNumber, 0);
		}
		else if (e.key === "B" || e.key === "b") {
			document.getElementById("opsi1").checked = "true";
			selectAnswer(questionNumber, 1);
		}
		else if (e.key === "C" || e.key === "c") {
			document.getElementById("opsi2").checked = "true";
			selectAnswer(questionNumber, 2);
		}
		else if (e.key === "D" || e.key === "d") {
			document.getElementById("opsi3").checked = "true";
			selectAnswer(questionNumber, 3);
		}
		else if (e.key === "E" || e.key === "e") {
			document.getElementById("opsi4").checked = "true";
			selectAnswer(questionNumber, 4);
		}
	});*/
    
    $(document).ready(function(){
	$('.auto-save').savy('load');
    });
    
    const questionButton = document.querySelectorAll("#questionsButton > button");
    for(let i = 0; i < questionButton.length; i++){
        questionButton[i].classList.remove("currentQuestion");
    }
    
    questionButton[questionNumber].classList.add("currentQuestion");

        
    //Select option state tracking algorithm
    if(answers[questionNumber] != -1){
        var questionOptions = document.querySelectorAll("#optionDiv > input");
        questionOptions[answers[questionNumber]].checked = true;
    }
    
}

document.addEventListener("keydown", function (e) {
	//Memilih jawaban dengan keyboard
	if (e.key === "A" || e.key === "a") {
		document.getElementById("opsi0").checked = "true";
		selectAnswer(x, 0);
	}
	else if (e.key === "B" || e.key === "b") {
		document.getElementById("opsi1").checked = "true";
		selectAnswer(x, 1);
	}
	else if (e.key === "C" || e.key === "c") {
		document.getElementById("opsi2").checked = "true";
		selectAnswer(x, 2);
	}
	else if (e.key === "D" || e.key === "d") {
		document.getElementById("opsi3").checked = "true";
		selectAnswer(x, 3);
	}
	else if (e.key === "E" || e.key === "e") {
		document.getElementById("opsi4").checked = "true";
		selectAnswer(x, 4);
	}
});

function hapus() {
    var questionOptions = document.querySelectorAll("#optionDiv > input");
    //var ele = document.querySelectorAll("input[type=radio]")[hps];
    
    questionOptions[answers[hps]].checked = false;

    //for(var k = 0; k < exam.questions[hps].options.length; k++){
        //answers[k] = -1;
        selectAnswer(hps, -1);
    //}
    answers[x] = -1;
    document.querySelectorAll("#questionsButton > button")[x].classList.remove("greenHightlight");
}

function selectAnswer(questionNumber,optionNumber){
    raguState = 0;
    answers[questionNumber] = optionNumber;
    document.querySelectorAll("#questionsButton > button")[x].classList.remove("orangeHightlight");
    document.querySelectorAll("#questionsButton > button")[questionNumber].classList.add("greenHightlight");
    //document.querySelectorAll("#questionsButton > button")[questionNumber].className += " greenHightlight";
    answers[questionNumber] = optionNumber;
	localStorage.setItem('answer', JSON.stringify(answers));
}

var yakinState, raguState;
yakinState = 0, raguState = 0;
function ragu() {
    raguState = 1;
    if (answers[x] != -1) {
        document.querySelectorAll("#questionsButton > button")[x].classList.remove("greenHightlight");
        document.querySelectorAll("#questionsButton > button")[x].classList.add("orangeHightlight");
        yakinState = 1;
    }
    return yakinState;
}

function yakin() {
    raguState = 0;
    if (answers[x] != -1) {
    //if (answers[x] != -1 && yakinState != 0) {
        document.querySelectorAll("#questionsButton > button")[x].classList.add("currentQuestion");
        
        document.querySelectorAll("#questionsButton > button")[x].classList.remove("orangeHightlight");
        document.querySelectorAll("#questionsButton > button")[x].classList.add("greenHightlight");
        yakinState = 0;
    }
    return yakinState;
}

var modal = document.querySelector(".modal");

function showInstruction(){
    document.querySelector("#instructions").innerHTML = exam.instruction;
    modal.style.display = "block";
}

function daftar(){
    var instructionPar = document.querySelector("#instructions");
        instructionPar.innerHTML = `<h3 style="color: #3C91E6; fontWeight: 700">Daftar Konstanta Astronomi</h3>`;
        //instructionPar.innerHTML += `<object data="CBT/tabel/Tabel-OSN-Astronomi.pdf" frameborder="0" width="100%" height="700px"> </object>`;
		instructionPar.innerHTML += `<img src="CBT/tabel/Tabel-OSN-Astronomi1.png" width="100%"/>
									 <img src="CBT/tabel/Tabel-OSN-Astronomi2.png" width="100%"/>`;
		
		document.getElementById("questionsButton").style.display = "none";
 
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function promptUser(){
    var instructionPar = document.querySelector("#instructions");
    if (raguState != 0) {
        instructionPar.innerHTML = "<p>Anda masih memiliki jawaban yang ragu-ragu</p>";
        instructionPar.innerHTML += "<p class='kembali-btn'><button onclick='closeModal()'>Kembali</button></p>"

    } else if (raguState == 0) {
        instructionPar.innerHTML = "<p>Apakah Anda yakin ingin mengakhiri ujian?</p>";
        instructionPar.innerHTML += "<div class='btn'> <button type='button' class='Tdk-btn' onclick='closeModal()'>Tidak</button> <button type='button' class='Ya-btn' onclick='submitExam()'>Ya</button> </div>"
    }
    //instructionPar.innerHTML += "<p class='btn'> <button class='Ya-btn' onclick='submitExam()'>Ya</button> <button style='background-color:red; button:hover{background:transparent; border: 2px solid red; color: red;' onclick='closeModal()'>Tidak</button></p>"

    modal.style.display = "block";
}

function submitExam(){
    clearInterval(timerObject);
    localStorage.removeItem("endTime");
    modal.style.display = "none";
    document.querySelector('.instructionLink').style.display = "none";
    var score = 0;
    if(localStorage.getItem('answer') == null) {
		for(var i = 0; i < exam.questions.length; i++) {
			if(answers[i] == exam.questions[i].answerPosition) {
				score += 5;
			} 
		}
	}	
	else {
		for(var i = 0; i < exam.questions.length; i++) {
			if(JSON.parse(localStorage.getItem('answer'))[i] == exam.questions[i].answerPosition) {
				score += 5;
			}
		}			
    }
    
    localStorage.setItem("TO_OSK", score);

    //score = score/0.4;
    /*let nilai = score.toString();
    let users = sessionStorage.getItem("user");
    if(users == 0) {
        //setCookie(nilai0, nilai);
       Cookies.set('data0', 'true');
        sessionStorage.setItem("nilai0", score);
    }
    else if(users == 1) {
        sessionStorage.setItem("nilai1", score);
    }
    else if(users == 2) {
        sessionStorage.setItem("nilai2", score);
    }
    else if(users == 3) {
        sessionStorage.setItem("nilai3", score);
    }
    else if(users == 4) {
        sessionStorage.setItem("nilai4", score);
    }
    else if(users == 5) {
        sessionStorage.setItem("nilai5", score);
    }
    else {
        sessionStorage.setItem("nilai6", "0");
    }*/
    
    document.querySelector(".daftar").style.display = "none";
    document.querySelector(".pSubmit").style.display = "none";
    document.querySelector(".content > div:last-child > div").innerHTML = "Anda telah selesai mengerjakan ujian. <br> <br> <br> Keterangan kunci : <br> 0 = A, 1 = B, 2 = C, 3 = D, 4 = E, -1 = Tidak dijawab<br> <br> <br> ";
    document.querySelector(".content > div:last-child > div").innerHTML += "Jawaban Anda : "+ JSON.parse(localStorage.getItem('answer')) +"<br> <br> <br>";
    document.querySelector(".content > div:last-child > div").innerHTML += "Kunci Jawaban : "+ kunci +"<br> <br> <br>";
    document.querySelector(".content > div:last-child > div").innerHTML += "<br> <br> <br> <center><a class='kirim' href='https://r26ast.github.io/Dashboard/' id='kembali' style='text-decoration: none;'>Kembali</a></center> <br> <br>"
    document.querySelector(".total").innerHTML = "Nilai : " + score.toString();

	$('kembali').click(function() {
		localStorage.removeItem('answer'); 
	});
}

/*function setCookie(cname, value) {
        document.cookie = cname + '=' + value + ';' + ';path=/';
    }*/
