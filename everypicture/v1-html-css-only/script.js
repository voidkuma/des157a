(function(){
    "use strict";
    console.log('reading JS');

    

    document.querySelector('#computer').addEventListener('pointerenter', function(){

        console.log('over computer');
    });
    document.querySelector('#keyboard').addEventListener('pointerenter', function(){
        console.log('over keyboard');
    });
    document.querySelector('#pencilPouch').addEventListener('pointerenter', function(){
        console.log('over pencil pouch');
    });
    document.querySelector('#tablet').addEventListener('pointerenter', function(){
        console.log('over tablet');
    });
    document.querySelector('#book').addEventListener('pointerenter', function(){
        console.log('over book');
    });
    document.querySelector('#pencils').addEventListener('pointerenter', function(){
        console.log('over pencil');
    });
    document.querySelector('#lamp').addEventListener('pointerenter', function(){
        console.log('over lamp');
    });

})();