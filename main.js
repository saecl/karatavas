let choices = ["māja", "koks", "asfalts", "ola", "sadursme"];
let result = choices[Math.floor(Math.random()*choices.length)];
let print = ""
let doneLets = [];
for(let i = 0; i < result.length; i++){
    print += "-";
}
let z = 0;
document.getElementById("res").innerHTML = print;
function press(){
    let letter = document.getElementById("word").value;
    if(letter){
        let yes = 0;
        for(let i of doneLets){
            if(i != letter) yes++;
        }
        if(yes == doneLets.length){
            doneLets.push(letter);
            document.getElementById("done").innerHTML += letter + ", ";
            let found = false;
            for(i = 0; i < result.length; i++){
                if(result.charAt(i) == letter){
                    print = setCharAt(print, i, letter);
                    found = true;
                }
            }
            let count = 0;
            for(let k of print){
                if(k == "-") count++;
            }
            if(count == 0) alert("YOU WON!!!");
            if(!found){
                z++;
                draw(z);
            }
            document.getElementById("res").innerHTML = print;
            document.getElementById("word").value = "";
        }
        else{
            document.getElementById("word").value = "";
        }
    }
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function draw(k){
    ctx = plot.getContext("2d");
    ctx.beginPath();
    switch(k){
        case 1: ctx.moveTo(10, 300); ctx.lineTo(90, 300);
        break; 
        case 2: ctx.moveTo(50, 300); ctx.lineTo(50, 100);
        break;
        case 3: ctx.moveTo(50, 100); ctx.lineTo(150, 100);
        break;
        case 4: ctx.moveTo(150, 100); ctx.lineTo(150, 150);
        break;
        case 5: ctx.arc(150, 180, 30, 0, Math.PI*2);
        break;
        case 6: ctx.moveTo(150, 210); ctx.lineTo(150, 240);
        break;
        case 7: ctx.moveTo(150, 240); ctx.lineTo(130, 270);
        break;
        case 8: ctx.moveTo(150, 240); ctx.lineTo(170, 270);
        break;
        case 9: ctx.moveTo(150, 210); ctx.lineTo(130, 220);
        break;
        case 10: ctx.moveTo(150, 210); ctx.lineTo(170, 220);
        break;
        case 11: alert("YOU LOST!!!");
    }
    ctx.stroke();
}