// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, 
// make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

{/* <button id="lib-button"></button> */}

function makeMadLib() {
    var libStory = document.getElementById('story');
    var person = document.getElementById('person').value;
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;

    libStory.innerHTML = person + "is" + adjective + "and" + noun; 
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', makeMadLib);
