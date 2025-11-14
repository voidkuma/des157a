// IIFE closure
(function(){
    "use strict";
    console.log('reading JS');

    // selects the description id in my html, saves it into a variable
    const description = document.querySelector('#description');

    //Folllowing event listeners are for parts of a image map for the items section.

    // selects the computer id and adds a Event for when it gets clicked.
    document.querySelector('#computer').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/monitorImg.jpeg" width="100%">
                    <h3>Monitor</h3>
                    <p>Here is my monitor, where I view my digital pieces in detail and bring my sketches to life through color and refinement.</p>
        
        `;
    });

    // selects the keyboard id and adds a Event for when it gets clicked.
    document.querySelector('#keyboard').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/keyboardImg.jpeg" width="100%">
                    <h3>Keyboard</h3>
                    <p>Here is my keyboard, which I use to navigate programs, research art references, and sometimes add digital touches to my work.</p> 
                    `;
    });

    // selects the pencilPouch id and adds a Event for when it gets clicked.
    document.querySelector('#pencilPouch').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/pouchImg.jpeg" width="100%">
                    <h3>Pencil Pouch</h3>
                    <p>Here is my pencil pouch, where I keep essential tools and colorful markers and pens that help bring my drawings to life.</p> 
                    `;
    });

    // selects the tablet id and adds a Event for when it gets clicked.
    document.querySelector('#tablet').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/tabletImg.jpeg" width="100%">
                    <h3>Tablet</h3>
                    <p>Here is my tablet. I use it for digital drawing, layering colors, and refining my work with precision that’s hard to get on paper.</p> 
                    `;
    });

    // selects the book id and adds a Event for when it gets clicked.
    document.querySelector('#book').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/bookImg.jpeg" width="100%">
                    <h3>Sketch Book</h3>
                    <p>Here is my book. I like to flip through it for ideas, notes, or quick sketches when I need inspiration or want to study different styles.</p> 
                    `;
    });

    // selects the pencils id and adds a Event for when it gets clicked.
    document.querySelector('#pencils').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/pencilsImg.jpeg" width="100%">
                    <h3>Pencils</h3>
                    <p>Here are my pencils. I use them all the time to sketch and create traditional drawings before adding any color or digital touches.</p> 
                    `;
    });

    // selects the lamp id and adds a Event for when it gets clicked.
    document.querySelector('#lamp').addEventListener('click', function(){
        // when clicked, the description div's inneHTML gets changed
        // Changes to a image of the item with a description.
        description.innerHTML = `                    <img src="images/lampImg.jpeg" width="100%">
                    <h3>Smiski Lamp</h3>
                    <p>Here is my lamp. It’s small but just the right size for my workspace, adding a little flare of cuteness and light to keep me focused while I draw.</p> 
                    `;
    });

    // array that holds 5 image names
    const myImages = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', ];
    // array that holds 5 descriptions
    const myinfos = [`Here is my sketchbook where I start off with random doodles. Sometimes related to my tablet art, sometimes not. I like filling it with ideas to get my creativity flowing before working digitally.`, `When I draw, I often have music or shows playing in the background. Sounds and colors from songs or movies help spark ideas for tones and palettes in my artwork.`, `I love browsing quick tutorials and tips on Pinterest—it’s one of the best places for creative inspiration and learning new techniques from other artists.`, `I often step outside in Davis to look at murals, community art, or just the sky. The weather and colors around me always influence my mood and artistic choices.`, `It’s always nice to have company while I draw—especially my cats. Their calm presence motivates me and keeps me focused on my art.`];

    let currentImg = 0; // counter for images
    const slide = document.querySelector('#myimage'); //selects the current image in slideshow div
    const info = document.querySelector(`#inspoText p`); //selects the current p tag in the slideshow description

    // selects the next button and adds a event when clicked that calls nextPhoto function
    document.querySelector('#next').addEventListener('click', nextPhoto); //Event that executes when next button pressed

    // function that alters current image's src in slidehow and it's description
    function nextPhoto(){
        currentImg++; //increments the current img to move to next index

        // if counter goes over the amount inside array, it goes to first index
        if(currentImg >myImages.length-1){
            currentImg = 0; //restarts the counter
        }

        slide.src = `images/${myImages[currentImg]}`//changes the src of the current img 
        info.innerHTML = `${myinfos[currentImg]}`; //changes the description

    }

    // selects the next button and adds a event when clicked that calls prevPhoto function
    document.querySelector('#previous').addEventListener('click', prevPhoto); //Event that executes when previous button pressed

    // function that alters current image's src in slidehow and it's description
    function prevPhoto(){
        currentImg--;

        if(currentImg <0){
            currentImg = myImages.length-1; //restarts the counter
        }

        slide.src = `images/${myImages[currentImg]}`
        info.innerHTML = `${myinfos[currentImg]}`;
    }

})();