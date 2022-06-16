window.addEventListener('load', (event) => {

    var navbar = document.getElementById('navigationBar');
    let isScrolled = false;
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            // navbar.classList.remove('topScrolled');
            navbar.style.background = 'rgba(0,0,0,0.6)';
            if (!isScrolled) {
                navbar.style.transform = 'translateY(-80px)';
            }
            setTimeout(() => {
                navbar.style.transform = 'translateY(0)';
                isScrolled = true;
            }, 200);
        }
        else {
            // navbar.classList.add('topScrolled');
            navbar.style.background = 'transparent';
            isScrolled = false;
        }
    }


    var mobileButton = document.getElementById('navMobileOpenButton');
    var mobileMenu = document.getElementById('wrapper');
    var links = document.getElementById('navMobile');
    var closeMobileBtn = document.getElementById('closeMobileNav');
    mobileButton.addEventListener('click', () => {
        mobileMenu.style.height = '100vh';
        links.style.display = 'block';
        closeMobileBtn.style.display = 'block';
    })
    closeMobileBtn.addEventListener('click', () => {
        mobileMenu.style.height = '0vh';
        links.style.display = 'none';
        closeMobileBtn.style.display = 'none';
    })
    mobileMenu.addEventListener('click', ()=>{
        mobileMenu.style.height = '0vh';
        links.style.display = 'none';
        closeMobileBtn.style.display = 'none';
    })

});