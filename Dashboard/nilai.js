let nilaiOSN = document.getElementById("nilai-OSN");
let users = sessionStorage.getItem("user");
let hapus = document.getElementById("clearbtn");
let btnOSN = document.getElementById("btnOSN");
let nilaipage = document.getElementById("nilaipage");

if(users == 0) {
    document.getElementById("username").innerHTML = "R26 ASTRO";
    let nilaiR26 = localStorage.getItem("nilai0");
    nilaiOSN.innerHTML = nilaiR26; //localStorage.getItem("nilai0");
    hapus.hidden = false;
    nilaipage.hidden = false;
    //nilaiOSN.innerHTML = Cookies.get('nilai0');
   // nilaiOSN.innerHTML = getCookie('nilai0');
    if(nilaiR26 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 1) {
    document.getElementById("username").innerHTML = "AST001";
    let nilai1 = localStorage.getItem("nilai1");
    nilaiOSN.innerHTML = nilai1;
    
    if(nilai1 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 2) {
    document.getElementById("username").innerHTML = "AST002";
    let nilai2 = localStorage.getItem("nilai2");
    nilaiOSN.innerHTML = nilai2;
    
    if(nilai2 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 3) {
    document.getElementById("username").innerHTML = "AST003";
    let nilai3 = localStorage.getItem("nilai1");
    nilaiOSN.innerHTML = nilai3;
    
    if(nilai3 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 4) {
    document.getElementById("username").innerHTML = "AST004";
    let nilai4 = localStorage.getItem("nilai4");
    nilaiOSN.innerHTML = nilai4;
    
    if(nilai4 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 5) {
    document.getElementById("username").innerHTML = "AST005";
    let nilai5 = localStorage.getItem("nilai5");
    nilaiOSN.innerHTML = nilai5;
    
    if(nilai5 >= 0) {
        btnOSN.style.display = "none";
    }
    else {
        btnOSN.style.display = "block";
        nilaiOSN.innerHTML = "";
    }
}
else if(users == 6) {
    nilaipage.hidden = false;
}
else if(users == 7) {
    nilaipage.hidden = false;
}
else {
    document.getElementById("username").innerHTML = "ASTRO";
}

/*
if (users == 0 && localStorage.getItem('nilai0') != "") {
    document.getElementById("btnOSN").style.display = "none";
}
else if (users == 1 && localStorage.getItem('nilai1') != "") {
    document.getElementById("btnOSN").style.display = "none";
}
else if (users == 2 && localStorage.getItem('nilai2') != "") {
    document.getElementById("btnOSN").style.display = "none";
}
else if (users == 3 && localStorage.getItem('nilai3') != "") {
    document.getElementById("btnOSN").style.display = "none";
}
else if (users == 4 && localStorage.getItem('nilai4') != "") {
    document.getElementById("btnOSN").style.display = "none";
}
else if (users == 5 && localStorage.getItem('nilai5') != "") {
    document.getElementById("btnOSN").style.display = "none";
}

/*
function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}*/