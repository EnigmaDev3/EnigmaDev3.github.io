
function showMoreInfo() {
    const moreInfo = document.getElementById('more-info');
    const button = document.querySelector('.btn-box');

    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        button.textContent = 'hide';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'more about me';
    }
}



    var typed = new Typed(".text", {
        strings: ["Anastasia"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    