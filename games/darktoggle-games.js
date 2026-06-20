var body = document.querySelector('body');
var toggle = document.querySelector('.change');
var dark = false;


//FUNCTION
function darkMode() {
    //Changes the value of 'dark' from false to true
    dark = true;
    //Add 'dark' class to the element in the var body
    body.classList.add('dark');
    body.classList.remove('light');
    //Save in local storage the value for dark mode on
    localStorage.setItem('theme','dark');
    document.querySelector(".change").innerHTML = '<img id="darkicon" src="../../images/darkmode.png" alt="toggle dark mode">';

}

function lightMode() {
    //Changes the value of 'dark' from true to false
    dark = false;
    //Remove 'dark' class from the element in the var body
    body.classList.remove('dark');
    body.classList.add('light');
    //Save in local storage the value for dark mode off
    localStorage.setItem('theme','light');
    document.querySelector(".change").innerHTML = '<img id="darkicon" src="../../images/lightmode.png" alt="toggle dark mode">';
    
}

//MAIN

//Check stored values
console.log(localStorage.getItem('theme'));
if(localStorage.getItem('theme') == 'dark') {
    darkMode();
}
if(localStorage.getItem('theme') == 'light') {
    lightMode();
} else if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == "null") {
    lightMode();
}

//Add 'dark' class when users click on the change button.
toggle.addEventListener('click', function() {
    if (dark === false) {
        darkMode();
    } else if (dark === true) {
        lightMode();
    }
});
