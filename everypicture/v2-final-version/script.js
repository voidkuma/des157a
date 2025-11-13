(function(){
    "use strict";
    console.log('reading JS');

    // selects the description id in my html, saves it into a variable
    const description = document.querySelector('#description');

    //Folllowing event listeners are for parts of a image map for the items section.

    document.querySelector('#computer').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/monitorImg.jpeg" width="100%">
                    <h3>Monitor</h3>
                    <p>Here is my monitor, where I view my digital pieces in detail and bring my sketches to life through color and refinement.</p>
        
        `;
    });
    document.querySelector('#keyboard').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/keyboardImg.jpeg" width="100%">
                    <h3>Keyboard</h3>
                    <p>Here is my keyboard, which I use to navigate programs, research art references, and sometimes add digital touches to my work.</p> 
                    `;
    });
    document.querySelector('#pencilPouch').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/pouchImg.jpeg" width="100%">
                    <h3>Pencil Pouch</h3>
                    <p>Here is my pencil pouch, where I keep essential tools and colorful markers and pens that help bring my drawings to life.</p> 
                    `;
    });
    document.querySelector('#tablet').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/tabletImg.jpeg" width="100%">
                    <h3>Tablet</h3>
                    <p>Here is my tablet. I use it for digital drawing, layering colors, and refining my work with precision that’s hard to get on paper.</p> 
                    `;
    });
    document.querySelector('#book').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/bookImg.jpeg" width="100%">
                    <h3>Sketch Book</h3>
                    <p>Here is my book. I like to flip through it for ideas, notes, or quick sketches when I need inspiration or want to study different styles.</p> 
                    `;
    });
    document.querySelector('#pencils').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/pencilsImg.jpeg" width="100%">
                    <h3>Pencils</h3>
                    <p>Here are my pencils. I use them all the time to sketch and create traditional drawings before adding any color or digital touches.</p> 
                    `;
    });
    document.querySelector('#lamp').addEventListener('click', function(){
        description.innerHTML = `                    <img src="images/lampImg.jpeg" width="100%">
                    <h3>Smiski Lamp</h3>
                    <p>Here is my lamp. It’s small but just the right size for my workspace, adding a little flare of cuteness and light to keep me focused while I draw.</p> 
                    `;
    });


    const myImages = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', ];
    const myinfos = [`Here is my sketchbook where I start off with random doodles. Sometimes related to my tablet art, sometimes not. I like filling it with ideas to get my creativity flowing before working digitally.`, `When I draw, I often have music or shows playing in the background. Sounds and colors from songs or movies help spark ideas for tones and palettes in my artwork.`, `I love browsing quick tutorials and tips on Pinterest—it’s one of the best places for creative inspiration and learning new techniques from other artists.`, `I often step outside in Davis to look at murals, community art, or just the sky. The weather and colors around me always influence my mood and artistic choices.`, `It’s always nice to have company while I draw—especially my cats. Their calm presence motivates me and keeps me focused on my art.`];

    let currentImg = 0; // counter for images
    const slide = document.querySelector('#myimage');
    const info = document.querySelector(`#inspoText p`);

    document.querySelector('#next').addEventListener('click', nextPhoto); //Event that executes when next button pressed

    function nextPhoto(){
        currentImg++;

        if(currentImg >myImages.length-1){
            currentImg = 0; //restarts the counter
        }

        slide.src = `images/${myImages[currentImg]}`//changes the scr of the current img 
        info.innerHTML = `${myinfos[currentImg]}`;

    }

    document.querySelector('#previous').addEventListener('click', prevPhoto); //Event that executes when previous button pressed

    function prevPhoto(){
        currentImg--;

        if(currentImg <0){
            currentImg = myImages.length-1; //restarts the counter
        }

        slide.src = `images/${myImages[currentImg]}`
        info.innerHTML = `${myinfos[currentImg]}`;
    }

})();