var myImage = document.querySelector('img')

myImage.onclick = function() {
  mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/hipster-banner.png') {
    myImage.setAttribute ('src','images/adventure-time.png');
  } else {
    myImage.setAttribute ('src','images/hipster-banner.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello,' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello,' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
