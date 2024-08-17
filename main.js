function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true}); //code to acess microphone
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/N73cmKYO3/model.json", modelReady);
}


function modelReady(){
    //Add  classify(gotResults)
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    } else{
        console.log(results);
    }


r = Math.floor(Math.random() * 255) + 1;
//add Math.floor(Math.random() * 255) + 1  to g and b
g = Math.floor(Math.random() * 255) + 1;
b = Math.floor(Math.random() * 255) + 1;
console.log("r: ", r, " g: ", g, " b: ", b);

document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
document.getElementById("result_confidence").innerHTML = "Acurracy - " + Math.floor(results[0].confidence * 100)+"%";
document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";

document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";


img = document.getElementById('animal_image');

//add   results[0].label == "Bark"
if (results[0].label == "Bark"){
    img.src = "dog.gif";
    
}
else if (results[0].label == "Roar"){
    //add "dinosaur.gif"
    img.src = "dinosaur.gif";
   
} 
//add results[0].label == "Buzz"
else if (results[0].label == "Buzz"){
    img.src = "bee.gif";
    
}
else{
    img.src = "listen.gif";
    
}
}