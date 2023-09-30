document.addEventListener("DOMContentLoaded",  ()=> {

    const footer = document.querySelector('#footer');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
    
       
        const distanceFromBottom = documentHeight - (scrollY + windowHeight);
    
       
        if (distanceFromBottom < 100) { 
            footer.style.bottom = '0';
        } else {
            footer.style.bottom = '-100px';
        }
    });
    
   
});

