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

function volumeCalculator(){
    let radius = document.getElementById("radius").value;

    let volume = (4/3)* Math.PI * Math.pow(radius, 3);

    alert("The volume of the sphere is " + volume.toFixed(2) + " !")
}