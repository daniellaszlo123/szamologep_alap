window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

var txt="";

function init() {
    szamok();
    esemenyBeallit();
    muvJelMeghivas();
    ID("torles").addEventListener("click", visszaallit);
    ID("egyenlo").addEventListener("click", szamol);
}

var tomb=[];

function szamol(event) {
    if (muvelJel=="osszeadas") {
        var tarolo=CLASS("kijelzo").event.target.innerHTML;
        tomb=tarolo.split("+");
        var osszeg= tomb[0]+tomb[1];
        console.log(osszeg);
        CLASS("kijelzo").innerHTML=osszeg;
    }
}

var muvelJel=event.target.id;
function muvJelMeghivas() {
    ID("osszeadas").addEventListener("click", muveletiJel);
    ID("kivonas").addEventListener("click", muveletiJel);
    ID("szorzas").addEventListener("click", muveletiJel);
    ID("osztas").addEventListener("click", muveletiJel);
}

function visszaallit() {
    CLASS("kijelzo")[0].innerHTML="";
}

function szamok() {
    for (let i = 0; i < 10; i++) {
        txt+="<button id='"+i+"'>"+i+"</button>";        
    }
    CLASS("szamok")[0].innerHTML=txt;
}

function esemenyBeallit() {
    for (let i = 0; i < 10; i++) {
        ID(i).addEventListener("click", ertekBeallit);
    }
}

function ertekBeallit(event) {
    if (event.target.innerHTML==0) {
        CLASS("kijelzo")[0].innerHTML+="0";
    }
    else if (event.target.innerHTML==1) {
        CLASS("kijelzo")[0].innerHTML+="1";
    }
    else if (event.target.innerHTML==2) {
        CLASS("kijelzo")[0].innerHTML+="2";
    }
    else if (event.target.innerHTML==3) {
        CLASS("kijelzo")[0].innerHTML+="3";
    }
    else if (event.target.innerHTML==4) {
        CLASS("kijelzo")[0].innerHTML+="4";
    }
    else if (event.target.innerHTML==5) {
        CLASS("kijelzo")[0].innerHTML+="5";
    }
    else if (event.target.innerHTML==6) {
        CLASS("kijelzo")[0].innerHTML+="6";
    }
    else if (event.target.innerHTML==7) {
        CLASS("kijelzo")[0].innerHTML+="7";
    }
    else if (event.target.innerHTML==8) {
        CLASS("kijelzo")[0].innerHTML+="8";
    }
    else if (event.target.innerHTML==9) {
        CLASS("kijelzo")[0].innerHTML+="9";
    }
}

var muvJel="";
function muveletiJel(event) {
    if (event.target.id=="osszeadas") {
        CLASS("kijelzo")[0].innerHTML+="+";
        muvJel="+";
    }else if (event.target.id=="kivonas") {
        CLASS("kijelzo")[0].innerHTML+="-";
        muvJel="-";
    }else if (event.target.id=="szorzas") {
        CLASS("kijelzo")[0].innerHTML+="*";
        muvJel="*";
    }else if (event.target.id=="osztas") {
        CLASS("kijelzo")[0].innerHTML+="/";
        muvJel="/";
    }
}