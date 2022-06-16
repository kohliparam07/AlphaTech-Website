window.addEventListener('load', () => {
    var button1 = document.getElementById('btnShow1');
    var button2 = document.getElementById('btnShow2');
    var button3 = document.getElementById('btnShow3');
    var section1 = document.getElementById('blogText1');
    var section2 = document.getElementById('blogText2');
    var section3 = document.getElementById('blogText3');
    var close1 = document.getElementById('closeBlog1');
    var close2 = document.getElementById('closeBlog2');
    var close3 = document.getElementById('closeBlog3');

    button1.addEventListener('click', () => {
        section1.style.display = "block";
    })
    button2.addEventListener('click', () => {
        section2.style.display = "block";
    })
    button3.addEventListener('click', () => {
        section3.style.display = "block";
    })
    close1.addEventListener('click', () => {
        section1.style.display = "none";
    })
    close2.addEventListener('click', () => {
        section2.style.display = "none";
    })
    close3.addEventListener('click', () => {
        section3.style.display = "none";
    })
})