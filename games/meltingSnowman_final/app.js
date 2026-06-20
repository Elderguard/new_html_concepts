
var words = ["APPLE", "PANCAKES", "COMPUTER", "PARIS", "MICROPHONE", "PASTRY"];

// It is necessary to create a list (array) with all the parts of the snowman. Note that each part starts with a dot. This is a CSS notation that indicates each string represents a CSS class, we'll use the strings in the "snomanParts" array to query the correct HTML element by its class name. The list will be from top-to-bottom to make it easier on removing parts.
var snowmanParts = [".hat", ".face", ".scarf", ".hands", ".body-top", ".body-middle", ".body-bottom"];

var randomWord = getRandomWord(words);

// A variable called Keyboard container will be created, for it's value, we will use the function document.querySelector() to reference an element with a specific ID.
var keyboardContainer = document.querySelector('#keyboard-container');

// We can use the adEventListener() function to ensure a function (in this case handleKeyboardClick()) will run whenever a user clicks inside the keyboardContainer. The click event is triggered by clicking your mouse anywhere inside the keyboardContainer HTML element.
keyboardContainer.addEventListener("click", handleKeyboardClick);

function getRandomWord(words) {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomWord = words[randomIndex];
    return randomWord;
}

function generateHiddenWord(word) {
    var letters = word.split("");
    var emptyLetterContainer = document.querySelector("#empty-letter-container");
    
    var lettersHTML = "";
    for (var letter of letters) {
        var letterHTML = `<p class="letter-container"><span class="letter hidden">${letter}</span></p>`;
        lettersHTML += letterHTML;
    }
    
    emptyLetterContainer.innerHTML = lettersHTML;
}

// This function will have the parameter "event" that will be passed to this function whenever the keyboardContainer is clicked. When the keyboard is clicked, we'll run the function.
function handleKeyboardClick(event) {
    // The variable clickedElement will get information about the element that was clicked by using the "target" property. We'll store the element that was clicked in the variable.
    var clickedElement = event.target;
    // We need to check if the click was on a letter. We're going to run a conditional checking if clickedElement does NOT (!) contain the "letter" class OR if (||) it contains the "selected" class, meaning it was previously selected. If it returns "true", the program will exit the function.
    if (!clickedElement.classList.contains("letter") || clickedElement.classList.contains("selected")) return;
    // If the previous condition is "false" the function continues and we'll use it to add the class "selected" to our clickedElement.
    clickedElement.classList.add("selected");
    
    // We're now going to attribute the value (content) of the Element that was clicked into the variable "clickedLetter"
    var clickedLetter = clickedElement.textContent;
    //using this variable as a parameter, we'll call a function that will check if the clickedLetter was the right guess and attribute the result to the variable "hasMatch". The result expected is either "true" or "false"
    var hasMatch = checkForMatch(clickedLetter);
    // We're going to set a conditional to be executed only if "hasMatch" is NOT true.
    if(!hasMatch) {
        // Calls the function to remove a part from the snowman.
        removeSnowmanPart();
        checkForLoser();
    } else {
        checkForWinner();
    }
}

// This function will take the "clickedLetter" as a parameter and will check to see if it matches any of the hidden letters.
function checkForMatch(clickedLetter) {
    // We need something to determine if the user guessed incorrectly, so we need something to check if it is true or false. We'll start a variable "hasMatch" as "false" and only change it to "true" if there is a match when we are comparing the "clickedLetter" to the "hiddenLetter".
    var hasMatch = false;

    // A variable hiddenLetterElements is where we'll store references to the hidden letters. We need to know all of the the hidden letters so the program can compare with the "clickedLetter" parameter. For that, the variable will receive the value we can get using the document.querySelectorAll() function, selecting ALL the elements with the class "hidden". The querySelectorAll() method returns an array-like object that represents any HTML elements with theselector passed into the parentheses.
    var hiddenLetterElements = document.querySelectorAll(".hidden");

    // Once we have all of the "hiddenLetterElements", we can use a for loop to check all the hidden letters one at a time, comparing them with the "clickedLetter" that was passed as a parameter to the function.
    for (var hiddenLetterElement of hiddenLetterElements) {
        // the variable "hiddenLetter" will receive the value(content) of the element on that cicle of the loop.
        var hiddenLetter = hiddenLetterElement.textContent;
        // Then we use a conditional statement to compare the "hiddenLetter" with our "clickedLetter" parameter and check if they are the same.
        if (hiddenLetter === clickedLetter) {
            // Once we know they are equal, which means the player guessed the right letter, we're gonna remove the class "hidden" from that element.
            hiddenLetterElement.classList.remove("hidden");
            hasMatch = true;
        }
    }
    return hasMatch;
}

// A function will be used to remove a single part from the snowman each time the user guesses a letter that isn't one of the hidden letters.
function removeSnowmanPart() {
    // To remove the first item from an array, we use the "Array.shift()" method. We'll store the removed item in a variable called snowmanPart. Remember this will get the Class name.
    var snowmanPart = snowmanParts.shift();
    //Next, we create a variable called "partsToRemove" to store those parts, we'll get the HTML element that represents the snowmanPart using "document.querySelectorAll()".
    var partsToRemove = document.querySelectorAll(snowmanPart);

    //The final step is looping through all ot the "partsToRemove" array and remove each part from the HTML document.
    for (var partToRemove of partsToRemove) {
        // The "element.remove()" function removes an HTML element from the page.
        partToRemove.remove();
    }
}

// We'll create a function to check if the snowman has melted and the user loses. You lose when the snowman has melted, and in our program we're removing parts from the "snomanParts" array every time a user guesses a letter that isn't in the hidden word. The snowman will be "melted" when there are no parts left in the array.
function checkForLoser() {
    // Therefore, if the array is empty, the list has no length, or it's length is equal to zero and we're going to execute an instruction when that condition happens.
    if(snowmanParts.length === 0) {
        document.querySelector("#snowman-container").innerHTML = "<h2>You lost, GAME OVER!<h2>";
        keyboardContainer.innerHTML = `<h2> The word was ${randomWord}<h2>`;
    }
}

// We'll create a function to check if the player wins, that happens when there are no more hidden letters.
function checkForWinner() {
    // The method "querySelectorAll()"" will return an array and it will be attributed to the variable hiddenLetterElements.
    var hiddenLetterElements = document.querySelectorAll(".hidden");
    // We'll check if the length of the "hiddenLetterElements" array is equal to zero.
    if (hiddenLetterElements.length === 0) {
        keyboardContainer.innerHTML = "<h2>You win!</h2>";
    }
}

//PROGRAM //
generateHiddenWord(randomWord);