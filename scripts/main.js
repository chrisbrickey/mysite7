//querySelector is a function that grabs the tag (parameter)...and then I assigned it to a variable
var myHeading = document.querySelector('h1');
//textContent is a property (the text contained within) of the tag variable that we created in the previous line-heigh
//so we're resetting the content of <h1></h1> to "Hello World"...which will override whatever is on the index.html within h1 tags
myHeading.textContent = 'chrisbrickey.com';


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
