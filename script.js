let toggleBar = document.getElementById('bar');

toggleBar.addEventListener('click', function() {
    let nav = document.querySelector('.nav-links');
    nav.classList.toggle('visible');
    toggleBar.classList.toggle('change');
});

window.onscroll = function() {  
    const backToTopButton = document.getElementById("backToTop");  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
        backToTopButton.style.display = "flex"; 
    } else {  
        backToTopButton.style.display = "none"; 
    }  
}; 