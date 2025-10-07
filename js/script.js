// Плавная прокрутка к разделу портфолио
function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Модальное окно для ExLauncher
function showExLauncherDemo() {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">&times;</button>
            <h3>ExLauncher - Демонстрация проекта</h3>
            <div class="demo-gallery">
                <img src="img/exlauncher/main.jpg" alt="Главный экран лаунчера" onclick="openImageModal(this.src)">
                <img src="img/exlauncher/games.jpg" alt="Выбор игры" onclick="openImageModal(this.src)">
                <img src="img/exlauncher/game_details.jpg" alt="Детали игры" onclick="openImageModal(this.src)">
                <img src="img/exlauncher/settings.jpg" alt="Настройки" onclick="openImageModal(this.src)">
            </div>
            <div class="demo-description">
                <p><strong>ExLauncher</strong> - профессиональное решение для управления игровыми мод-сборками</p>
                <p><strong>Технологии:</strong> C# Backend, React Frontend, WebView2, 7z интеграция</p>
                <p><strong>Статус:</strong> 70% завершён, активная разработка</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Функция для открытия полноразмерного изображения
function openImageModal(imageSrc) {
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" onclick="closeImageModal()">&times;</button>
            <img src="${imageSrc}" alt="Увеличенное изображение">
        </div>
    `;
    document.body.appendChild(imageModal);
    
    // Закрытие по клику вне изображения
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function imageEscapeHandler(e) {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', imageEscapeHandler);
        }
    });
}

// Функция закрытия модального окна с изображением
function closeImageModal() {
    const imageModal = document.querySelector('.image-modal');
    if (imageModal) {
        imageModal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            imageModal.remove();
        }, 300);
    }
}

// Функция закрытия основного модального окна
function closeModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Добавляем анимацию закрытия
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Анимируем карточки проектов
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});