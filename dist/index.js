window.addEventListener('load', () => {
    var selectAllCards = document.querySelectorAll('.cardsDiv');
    var x = document.getElementById('imgOpen');
    var close = document.getElementById('closeBtn');
    var imageBox = document.getElementById('openText');
    var sliderImg = document.getElementById('imgPreview');
    var previous = document.getElementById('prevImg');
    var next = document.getElementById('nextImg');
    var imgNumber = document.getElementById('imageNumber');

    // var imgArray = [img1,img2,img3,img4,img5,img6,img7,img8];
    var imgArray = ["cases1.jpg", "cases2.jpg", "cases3.jpg", "cases4.jpg", "cases5.jpg", "cases6.jpg", "cases7.jpg", "cases8.jpg"];

    for (let i = 0; i < selectAllCards.length; i++) {
        selectAllCards[i].addEventListener('click', function () {
            // var image = selectAllCards[i].innerHTML;
            // x.style.display = 'block';
            x.style.width = '100vw';
            x.style.opacity = '1';
            x.style.visibility = 'visible';
            // x.style.height = '100vh';
            // imageBox.innerHTML=image;
            sliderImg.setAttribute('src', 'cases/' + imgArray[i]);
            imgNumber.innerText = `Image ${i+1} of 8`;
            j = i;
        })
        close.addEventListener('click', function () {
            // x.style.display = 'none';
            // x.style.width = '0vw';
            x.style.opacity = '0';
            x.style.visibility = 'hidden';
            // x.style.height = '0vh';
        })
    }

    previous.addEventListener('click', () => {
        if (j <= 0) {
            j = imgArray.length;
        }
        j--;
        sliderImg.setAttribute('src', 'cases/' + imgArray[j]);
        imgNumber.innerText = `Image ${j+1} of 8`;
    })
    next.addEventListener('click', () => {
        if (j >= imgArray.length - 1) {
            j = -1;
        }
        j++;
        sliderImg.setAttribute('src', 'cases/' + imgArray[j]);
        imgNumber.innerText = `Image ${j+1} of 8`;
    })
})