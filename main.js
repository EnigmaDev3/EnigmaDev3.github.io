
// Эта функция будет вызываться при клике на кнопку или другое событие и будет переключать видимость блока с информацией и текст кнопки

function showMoreInfo() {
    const moreInfo = document.getElementById('more-info');  // Получаем элемент с информацией по его идентификатору 'more-info'
    const button = document.querySelector('.btn-box');  // Получаем элемент кнопки с классом 'btn-box'
 // Если блок скрыт (display: none), то делаем его видимым и меняем текст кнопки на 'hide'
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        button.textContent = 'hide';
// Если блок видим, то скрываем его (display: none) и меняем текст кнопки на 'more about me'
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'more about me';
    }
}


// Создаем объект Typed для анимации текста в элементе с классом 'text'

    var typed = new Typed(".text", {
        strings: ["Anastasia"],
        typeSpeed: 100,  // Скорость печати текста
        backSpeed: 100,  // Скорость удаления текста (если есть)
        backDelay: 1000, // Задержка перед началом удаления текста
        loop: true // Зацикливаем анимацию
    });
    