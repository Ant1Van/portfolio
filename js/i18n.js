document.addEventListener('DOMContentLoaded', function() {
    // Получаем язык из localStorage или используем русский по умолчанию
    const currentLang = localStorage.getItem('language') || 'ru';
    
    // Функция для обновления текста на странице
    function updateContent(lang) {
        // Сохраняем выбранный язык
        localStorage.setItem('language', lang);
        
        // Обновляем классы кнопок
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Обновляем заголовок страницы
        document.title = lang === 'en' ? 
            "Ivan Antipov - Full-stack Developer" : 
            "Антипов Иван - Full-stack разработчик";

        // Обновляем все элементы с атрибутом data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang][key]) {
                if (element.tagName === 'UL') {
                    // Для списков
                    element.innerHTML = translations[lang][key].map(item => `<li>${item}</li>`).join('');
                } else {
                    // Для обычного текста
                    element.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Добавляем обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            updateContent(lang);
        });
    });

    // Инициализируем страницу с текущим языком
    updateContent(currentLang);
});