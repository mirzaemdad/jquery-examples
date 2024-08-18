

function showText(){
    document.getElementById('s_text').innerHTML = "Hello SSB";
}
function hideText(){
    document.getElementById('s_text').innerHTML = "";
}



let number_1, number_2;

number_1 = 4;
number_2 = 5;

number_1 += number_2;

function dataManipulate(){
    document.getElementById('res').innerHTML=
    number_1;
}

//  JavaScript can change HTML attribute values 
function changeHtml(){
    document.getElementById('change_html').innerHTML= "How strange! I changed HTML content.";
}
function lightOn(){
    document.getElementById('img').src = 'images/light-on.jpg';
}
function lightOff(){
    document.getElementById('img').src = 'images/light-off.jpg';
}

// change the style of an HTML element

function changeStyle(){
    document.getElementById('change_style').style.fontSize = '30px';
}

// hide HTML elements

function hideElements(){
    document.getElementById('hide').style.display = 'none';
}
// show hidden HTML elements

function showElements(){
    document.getElementById('show').style.display = 'block';
}

// JavaScript Math

document.getElementById("random_math").innerHTML =
Math.floor(Math.random() * 10);


function intRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

function intResRandom(){
    document.getElementById("show_result").innerHTML = intRandom(10, 20);
}

const d = new Date();
document.getElementById("show_date").innerHTML = d;