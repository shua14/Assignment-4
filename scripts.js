function passCheck(){
    if(document.getElementById("password").value == "12345678"){
        document.querySelector("h1").innerHTML = "Signed In!!!"
    } else {
        alert("Wrong Password!");
    }
}

function imRight(){
    document.getElementById("textBox").innerHTML = "I'm right"
}

function noRight(){
    document.getElementById("textBox").innerHTML = "No, I'm right!"
}

function mouseOver(){
    alert("Told you to don't hover around me!")
}