var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');  //set var as src attribute from image element
  if (mySrc === 'images/MC_Drei-Finger-Faultier.jpg') {  //if attribute is the sloth:
    myImage.setAttribute ('src', 'images/stinky_fox.png') //set it to stinky fox
  } else {
    myImage.setAttribute ('src', 'images/MC_Drei-Finger-Faultier.jpg'); //if anything else, set to the sloth image
  }
}
/*
1 set the image element as variable "myImage"
3 on clicking the image, run this function:
4 set the mySrc to the src attrib of img element
5 check if mySrc is the image name. 
6 if it is then change it to the other image
7 else (it will be the other image) change it to the original image
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Sloths are cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Sloths are cool, ' + storedName;
}

 myButton.onclick = function() {
  setUserName();
}






