//querySelector is a function that grabs the tag (parameter)...and then I assigned it to a variable
var myHeading = document.querySelector('h1');
//textContent is a property (the text contained within) of the tag variable that we created in the previous line-heigh
//so we're resetting the content of <h1></h1> to "Hello World"...which will override whatever is on the index.html within h1 tags
myHeading.textContent = "chrisbrickey.com";


//selecting everything on the page and assigning it to a var
var myHTML = document.querySelector('html');
//when the user clicks anywhere on the selected HTML (frontpage), an alert pops up
myHTML.onclick = function() {
  alert('HeeHee, that tickles!')
}


//selecting all img on index.html
var myImage = document.querySelector('img');
//when user clicks on image, it switches between star_banner and astronaut
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "images/stars_long_banner.jpg") {
      myImage.setAttribute ('src','images/astronaut_banner.jpg');
    } else {
      myImage.setAttribute ('src','images/stars_long_banner.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading4 = document.querySelector('h4');

//asks user to enter their name and then shows "Hi, ____!" where the h4 tags are placed on the index.html
function setUserName() {
  var myName = prompt('Please enter your name.');
  //setItem function stores data in the browser so we can later retrieve it
  localStorage.setItem('name', myName);
  //provide a welcome message
  myHeading4.textContent = 'Hi, ' + myName + '!';
}

//Initialization code
//below line checks to see whether the 'name' data exists (has the user NOT YET (!) given their name?)
if(!localStorage.getItem('name')) {
  //calls the function defined directy above this if/else statement
  setUserName();
//else (user has already given name)
} else {
  //retrieve the stored name using getItem()
  var storedName = localStorage.getItem('name');
  //use the stored name to do the welcome message
  myHeading4.textContent = 'Hi, ' + storedName + '!';
}

//allows user to change their login name when they click the button - they reset the initialization process above
myButton.onclick = function() {
  setUserName();
}
