// Показ поп-ап сразу при загрузке страницы
window.addEventListener('DOMContentLoaded', openPopup);

function openPopup() {
    document.getElementById('popupOverlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    document.body.style.overflow = ''; // Разблокируем прокрутку
}

// Закрытие по нажатию Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
