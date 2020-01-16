"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Joel Mendivil
   Date:  1/16/20 

*/

//Variables containing the date
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

//Variables to help which sky map needs to be displayed
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = ((2 * thisMonth + thisHour) % 24);

var imgStr = "<img src='sd_sky" + mapNum +".png' />";

document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);