/* var feuilleCV = document.getElementById('#mainDiv').style; 

var bouttonCV = document.querySelector('button');

bouttonCV.addEventListener('click', cliquerBoutton);

function cliquerBoutton() {
    document.getElementById('mainDiv').style.display = 'block';
};*/
/* -----------------------------------------------Canvas 1-------------------------------------- */
var canvas1 = document.getElementById('canvas1');
var contexte = canvas1.getContext('2d');

contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'rgb(102, 98, 98)';
contexte.moveTo(85, 0);
contexte.lineTo(150, 175);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'rgb(102, 98, 98)';
contexte.moveTo(0, 75);
contexte.lineTo(120, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillStyle = 'white';
contexte.fillText('Accueil', 1, 120);

/* -----------------------------------------------Canvas 2-------------------------------------- */

var canvas2 = document.getElementById('canvas2');
var contexte = canvas2.getContext('2d');
contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'red';
contexte.moveTo(165, 0);
contexte.lineTo(250, 170);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'red';
contexte.moveTo(0, 75);
contexte.lineTo(200, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillText('Informations', 10, 120);

/* -----------------------------------------------Canvas 3-------------------------------------- */

var canvas3 = document.getElementById('canvas3');
var contexte = canvas3.getContext('2d');

contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'red';
contexte.moveTo(165, 0);
contexte.lineTo(250, 170);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'red';
contexte.moveTo(0, 75);
contexte.lineTo(200, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillText('Parcours', 10, 120);

/* -----------------------------------------------Canvas 4-------------------------------------- */

var canvas4 = document.getElementById('canvas4');
var contexte = canvas4.getContext('2d');

contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'blue';
contexte.moveTo(165, 0);
contexte.lineTo(250, 170);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'blue';
contexte.moveTo(0, 75);
contexte.lineTo(200, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillText('Compétences', 10, 120);

/* -----------------------------------------------Canvas 5-------------------------------------- */

var canvas5 = document.getElementById('canvas5');
var contexte = canvas5.getContext('2d');

contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'red';
contexte.moveTo(165, 0);
contexte.lineTo(250, 170);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'red';
contexte.moveTo(0, 75);
contexte.lineTo(200, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillText('Divers', 10, 120);

/* -----------------------------------------------Canvas 6-------------------------------------- */

var canvas6 = document.getElementById('canvas6');
var contexte = canvas6.getContext('2d');

contexte.beginPath();
contexte.lineWidth = '70';
contexte.strokeStyle = 'red';
contexte.moveTo(165, 0);
contexte.lineTo(250, 170);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '150';
contexte.strokeStyle = 'red';
contexte.moveTo(0, 75);
contexte.lineTo(200, 75);
contexte.stroke();
contexte.font = 'bold 35px Times New Roman, Serif';
contexte.fillText('Contact', 10, 120);