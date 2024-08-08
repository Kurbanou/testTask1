console.log('Вакансия Junior Frontend Developer (стажер) в ИП Тевилин Евгений Борисович, Санкт-Петербург. Используется нативная верстка на HTML/CSS/JS. (figma link: https://www.figma.com/design/AcATbIFxcJUIXtSk1JlP79/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=4201-22576&t=l34WxNq6Ai6SOfCa-0)Autor - Kurbanou F. kurbanou.faridun@gmail.com')


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#menuItems .item');
    const menuLinks = document.querySelectorAll('#sidebar nav ul li');
    const footerButtons = document.querySelector('footer .buttons');
    const timeSynchronization = document.querySelector('.timeSynchronization');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Удалить класс 'active' у всех элементов li
            menuLinks.forEach(link => link.classList.remove('active'));

            // Добавить класс 'active' к текущему элементу li
            this.classList.add('active');

            // Получить targetId
            const targetId = this.getAttribute('data-target');

            // Показать соответствующий элемент .item и скрыть остальные
            items.forEach(item => {
                if (item.id === targetId) {
                    item.classList.add('open');
                } else {
                    item.classList.remove('open');
                }
            });

            // Управление видимостью footerButtons и timeSynchronization
            if (targetId === 'item6') {
                footerButtons.classList.remove('hidden');
            } else {
                footerButtons.classList.add('hidden');
            }

            if (targetId === 'item5') {
                timeSynchronization.classList.remove('hidden');
            } else {
                timeSynchronization.classList.add('hidden');
            }
        });
    });
});