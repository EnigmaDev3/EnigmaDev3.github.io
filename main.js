
// Эта функция будет вызываться при клике на кнопку или другое событие и будет переключать видимость блока с информацией и текст кнопки

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


// Создаем объект Typed для анимации текста в элементе с классом 'text'

    var typed = new Typed(".text", {
        strings: ["Anastasia"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    