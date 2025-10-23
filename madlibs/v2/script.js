(function (){
    "use strict";
    console.log("reading JS");

    const myForm = document.querySelector("#myform"); // holds entire form
    const madLib = document.querySelector('#madlib');
    const madLibtext = document.querySelector("#text"); // holds madlib article
    const legend = document.querySelector('#title'); //holds the legend tag
    const formData = document.querySelectorAll('input[type=text]'); // holds all input values in a array for those in input with type text
    const closeButton = madLib.querySelector('button'); //close button inside madlib

    // Event for when the submit button gets pressed
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processData(formData); // Calls function to process data 

    });

    function processData(formData){
        const words = []; // empty array to store our madlib values
        const emptyFields = []; // empty array to store the empty fields if there's any, enteries are numbers
        let counter = 0; 

        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value); //pushes the current index value in words array
            } 
            else {
                emptyFields.push(counter); // pushes the current counter (serves as index) in emptyField array
            }
            counter++;
        }

        if (emptyFields.length > 0){
            showErrors(formData, emptyFields); // Calls function to show the errors
        } else {
            makeMadlib(words); //Calls function to show madlib
        }

    }

    // function that processes the empty fields values and shows errors to user.
    function showErrors(formData, emptyFields){
        const errorID = formData[emptyFields[0]]; // holds the first value that was not inputted
        const errorText = `Please fill out this field: ${errorID.id}`;

        legend.innerHTML = errorText; // changes the text inside madLib article to be the errorText
        document.querySelector(`#${errorID}`).focus(); // focuses on the field not filled

    }

    function makeMadlib(words){

        // Code for showing and closing the overlay that pops up after generate
        madLib.className = 'showing';

        const myText = `Today <b>${words[0]}</b> strutted into my office complaining about their enormous <b>${words[1]}</b>. It was honestly quite <b>${words[2]}</b> and not to mention that halfway through they started to <b>${words[3]}</b> all over the rug! They apologized and mentioned  the behavior might be related to early kittenhood issues, which is something I’ll have to look more into. Despite this once I offered them the <b>${words[4]}</b> laser pointer, their mood instantly improved. We ended the session with mutual grooming and good vibes, I do look forward to seeing them next session to see if they improve.`;

        madLibtext.innerHTML = myText;
        for(const eachField of formData){ //goes through each value of formData array
            eachField.value = ''; // clears out value
        }
    }

    // Code to shoe if close button pressed
    closeButton.addEventListener('click', function(event){
        event.preventDefault();

        madLib.className = 'hidden';
    });



})();