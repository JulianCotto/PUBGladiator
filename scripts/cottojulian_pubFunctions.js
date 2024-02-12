"use strict";
/*
   Button Functions
   Author: Julian Cotto
   Date: 07/29/2023

*/

function changeImage(imagePath) {
    document.getElementById("mapSwap").src = imagePath;
    if (imagePath.includes("Erangel")) {
        document.getElementById("mapNameFooter").textContent = "Erangel (8km x 8km)";
    } else if (imagePath.includes("Miramar")) {
        document.getElementById("mapNameFooter").textContent = "Miramar (8km x 8km)";
    } else if (imagePath.includes("Sanhok")) {
        document.getElementById("mapNameFooter").textContent = "Sanhok (4km x 4km)";
    } else if (imagePath.includes("Vikendi")) {
        document.getElementById("mapNameFooter").textContent = "Vikendi (6km x 6km)";
    } else if (imagePath.includes("Karakin")) {
        document.getElementById("mapNameFooter").textContent = "Karakin (2km x 2km)";
    } else if (imagePath.includes("Haven")) {
        document.getElementById("mapNameFooter").textContent = "Haven (1km x 1km)";
    } else if (imagePath.includes("Paramo")) {
        document.getElementById("mapNameFooter").textContent = "Paramo (3km x 3km)";
    } else if (imagePath.includes("Taego")) {
        document.getElementById("mapNameFooter").textContent = "Taego (8km x 8km)";
    } else if (imagePath.includes("Deston")) {
        document.getElementById("mapNameFooter").textContent = "Deston (4km x 4km)";
    }
}

