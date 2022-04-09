"use strict";


function add() {
    //Get Element By Id
    let inputInfo = document.getElementById("info");


    //Copy the input to 
    let outPutInfo = document.getElementById("outInfo");
    outPutInfo.value = inputInfo.value;
    inputInfo.value = "";
}

// setInterval(hideBanner, 2000);
// let show = false

// function hideBanner() {
//     let display = show ? "none" : "";

//     show = !show;
//     document.getElementById("banner");

// }


