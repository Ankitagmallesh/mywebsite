document.addEventListener('DOMContentLoaded', function(){
    // Fill the copyright year
    var yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var siteNav = document.getElementById('siteNav');
    if(navToggle && siteNav){
        navToggle.addEventListener('click', function(){
            siteNav.classList.toggle('show');
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
        anchor.addEventListener('click', function(e){
            var target = document.querySelector(this.getAttribute('href'));
            if(target){
                e.preventDefault();
                target.scrollIntoView({behavior:'smooth', block:'start'});
                // close mobile nav after click
                if(siteNav && siteNav.classList.contains('show')) siteNav.classList.remove('show');
            }
        });
    });
});
