function passCheck(){
    if(document.getElementById("password").value == "12345678"){
        
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