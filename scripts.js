function passCheck(){
    if(document.getElementById("password").value == "12345678"){
        alert("Signed In!!!");
    } else {
        alert("Wrong Password!");
    }
}

function imRight(){
    document.querySelector(".textBox").innerHTML = "I'm right"
}

function noRight(){
    document.querySelector(".textBox").innerHTML = "No, I'm right!"
}

function mouseOver(){
    alert("Told you to don't hover around me!")
}