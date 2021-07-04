new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 1.5});
        tl.fromTo(title,1.5, {y: '50', opacity:0}, {y:0, opacity: 1});
        
        if(destination.index === 1) {
            const hats = document.querySelectorAll('.hat');
            const description = document.querySelector('.description');

         

           tl.fromTo(description, 2, {y: "50", opacity:0}, {y:0, opacity:1})

           
           
            .fromTo(hats[0], 1, {x: '900%', y:'-55%'}, {x: '-40%'})  
        
            .fromTo(hats[1], 1, {x: '900%', y:'-18%'}, {x: '-40%'})  
          
            .fromTo(hats[2], 1, {x: '900%', y: '20%'}, {x: '-40%'});
        
            
        }
   
    }
});

/////////////////////



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
