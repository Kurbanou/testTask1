console.log('Вакансия Junior Frontend Developer (стажер) в ИП Тевилин Евгений Борисович, Санкт-Петербург. Используется нативная верстка на HTML/CSS/JS. (figma link: https://www.figma.com/design/AcATbIFxcJUIXtSk1JlP79/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=4201-22576&t=l34WxNq6Ai6SOfCa-0)Autor - Kurbanou F. kurbanou.faridun@gmail.com')


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#menuItems .item');
    const menuLinks = document.querySelectorAll('#sidebar nav ul li');
    const footerButtons = document.querySelector('footer .buttons');
    const timeSynchronization = document.querySelector('.timeSynchronization');
    const breadCrumbs = document.getElementById('breadCrumbs');

    // Функция для обновления хлебных крошек
    function updateBreadCrumbs(text) {
        // Если хлебные крошки не пусты, добавляем "/"
        if (breadCrumbs.innerText) {
            breadCrumbs.innerText = `${breadCrumbs.innerText.split(' / ')[0]} / ${text}`;
        } else {
            breadCrumbs.innerText = text;
        }
    }

    // Обработка клика по основным элементам навигации
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Игнорируем клики на элементе с id="hideMenu"
            if (link.closest('#hideMenu')) {
                return;
            }

            // Удалить класс 'active' у всех элементов li в навигации
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

            // Установка текста хлебных крошек
            breadCrumbs.innerText = this.innerText;
        });
    });

    // Обработка клика по элементам подменю
    document.querySelectorAll('.subnav li').forEach(subnavItem => {
        subnavItem.addEventListener('click', function() {
            const targetSubItemId = this.getAttribute('data-target');
            
            // Найти текущий subnav и удалить класс 'active' у всех элементов li
            const currentSubnav = this.closest('.subnav');
            currentSubnav.querySelectorAll('li').forEach(li => li.classList.remove('active'));

            // Добавить класс 'active' к текущему элементу li
            this.classList.add('active');

            // Скрыть все subitem
            document.querySelectorAll('.subitem').forEach(subitem => {
                subitem.classList.remove('open');
            });

            // Показать выбранный subitem
            const selectedSubitem = document.getElementById(targetSubItemId);
            if (selectedSubitem) {
                selectedSubitem.classList.add('open');
            }

            // Обновление хлебных крошек
            updateBreadCrumbs(this.innerText);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const createLocationButton = document.getElementById('createLocation');
    const popup = document.getElementById('popup');
    const cancelBtn = document.querySelector('.cancel-btn');

    createLocationButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
