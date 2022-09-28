/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35
if (jonSnowAttack>jamieLannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister")   
}else if (jamieLannisterAttack>jonSnowAttack){
    console.log("Jamie Lannister has better attack than Jon Snow")
}else {
    console.log("Jamie Lannister has the same attack as Jon Snow")
}

let jonSnowHealth = 100;
let jonSnowDefence=0;

//jamie lannister has attacked


if (jonSnowHealth <= jamieLannisterAttack){
    jonSnowHealth=0;
    console.log("Jon Snow Has been slain")
}
else{
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)//templateLiterals
}

jonSnowDefence += 25;

if (jonSnowHealth<=jamieLannisterAttack-jonSnowDefence){
    console.log("Jon Snow has been slain")
    jonSnowHealth=0;
}else{
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefence
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)//
}

if (jonSnowHealth +50 >= 100){
    jonSnowHealth=100;
}else{
    jonSnowHealth+=50;
}
let coinLandsHeads = false;
if (coinLandsHeads){
    console.log("The fight continues")

}
else{
    console.log("Jon is allowed to run away")
}
for (let i=0; i<5; i++){
    jonSnowHealth -= (jamieLannisterAttack-jonSnowDefence)  // parenthesis can be removed -= has lower precedence than subtraction, similarly true for comparison
    console.log('Jon\'s health is now ' + jonSnowHealth)
}

//write logic in for loop that detects if Jon's health is negative, in which case print Jon is dead and stop loop iterations.