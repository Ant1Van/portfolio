const translations = {
    en: {
        // Header
        "subtitle": "Full-stack Developer",
        "cta-button": "View Projects",

        // About
        "about-title": "About Me",
        "about-text": "I develop full-featured applications using C#, React, and modern web technologies.",
        "skill-tags": ["C#", "JavaScript", "React", "HTML/CSS"],

        // Portfolio
        "portfolio-title": "My Projects",

        // Project 1 - ExLauncher
        "project1-badge": "Active Project",
        "project1-title": "ExLauncher - Universal Game Modpack Launcher by Exposit",
        "project1-subtitle": "Desktop application for automating installation and management of mod collections",
        "project1-description": "Development of a full-featured launcher for automatic installation of mod collections from YouTuber Exposit. The application simplifies the mod setup process for regular users by providing an intuitive interface.",
        "project1-features-title": "Implemented Features:",
        "project1-features": [
            "<strong>Archive handling:</strong> Support for 7z volumes with built-in protocols",
            "<strong>Mod Organizer 2 integration:</strong> Profile management and game launch",
            "<strong>Automatic INI file generation</strong> for MO2",
            "<strong>Multi-language:</strong> Full RU/EN interface support",
            "<strong>Agreement system:</strong> User agreement acceptance",
            "<strong>Settings storage:</strong> Local storage in INI files",
            "<strong>Installer:</strong> Distribution via setup.exe"
        ],
        "project1-arch-title": "Architectural Features:",
        "project1-arch": [
            "<strong>Hybrid architecture:</strong> C# backend + React frontend via WebView2",
            "<strong>Resource protection:</strong> Frontend fully embedded in EXE file",
            "<strong>Offline operation:</strong> No internet connection required",
            "<strong>Modularity:</strong> Prepared for future updates"
        ],
        "project1-future-title": "Development Plans (in progress):",
        "project1-future": [
            "Online modpack installation",
            "Launcher and modpack auto-updates",
            "ASP.NET update system (updater.exe)",
            "Additional games support"
        ],
        "project1-status": "Project status:",
        "project1-complete": "70% complete",
        "project1-screenshots": "Project Screenshots",
        "project1-notice": "⚠️ Code is closed as commercial development",

        // Project 2 - Photo Album
        "project2-title": "Interactive Photo Album",
        "project2-description": "Web application with musical accompaniment for special moments",

        // Project 3 - Database
        "project3-title": "Online Store Database Management System",
        "project3-subtitle": "Course Project: Hybrid solution for online store data management with desktop and web interfaces",
        "project3-description": "Development of a full-featured online store database management system with two access interfaces: C# desktop application for administrators and PHP web interface for clients and employees.",
        "project3-features-title": "Implemented Features:",
        "project3-features": [
            "<strong>Data management:</strong> CRUD operations for all system entities",
            "<strong>Access control:</strong> Role system (admin/employee/client)",
            "<strong>Reporting:</strong> PDF report generation for orders and services",
            "<strong>Search and filtering:</strong> Advanced search across multiple parameters",
            "<strong>Operation history:</strong> User action logging",
            "<strong>Data export:</strong> Excel export for analytics",
            "<strong>Notifications:</strong> Email notifications about order status"
        ],
        "project3-arch-title": "Architectural Features:",
        "project3-arch": [
            "<strong>Three-tier architecture:</strong> Data → Business Logic → Presentation",
            "<strong>Design patterns:</strong> Repository, Factory Method, Singleton",
            "<strong>Security:</strong> Prepared Statements, XSS protection, data validation",
            "<strong>Scalability:</strong> Modular structure for easy expansion"
        ],
        "project3-complete": "100% complete",
        "project3-grade": "✨ Course Project Grade: Excellent",

        // Project 4 - Portfolio
        "project4-title": "Responsive Portfolio Website",
        "project4-subtitle": "Modern single-page website with animations and interactive elements",
        "project4-description": "Development of a personal portfolio website with focus on user experience, performance, and modern web standards. Special attention paid to responsiveness and smooth animations.",
        "project4-features-title": "Implemented Features:",
        "project4-features": [
            "<strong>Responsive design:</strong> Proper display on all devices",
            "<strong>Interactive gallery:</strong> Modal windows for project viewing",
            "<strong>Smooth animations:</strong> Scroll and interaction animations",
            "<strong>SEO optimization:</strong> Semantic markup and meta tags",
            "<strong>Contact forms:</strong> Email service integration",
            "<strong>Image optimization:</strong> Proper formats and sizes",
            "<strong>CI/CD:</strong> Automatic deployment via Netlify"
        ],
        "project4-tech-title": "Technical Features:",
        "project4-tech": [
            "<strong>Mobile First:</strong> Design primarily for mobile devices",
            "<strong>BEM methodology:</strong> Structured and maintainable CSS",
            "<strong>JavaScript Modules:</strong> Modular code structure",
            "<strong>Optimization:</strong> Lighthouse score > 90 across all metrics"
        ],
        "project4-metrics": "Performance Metrics:",
        "project4-update": "🔄 Last update: October 2025",
        "metrics-performance": "Performance",
        "metrics-accessibility": "Accessibility",
        "metrics-practices": "Best Practices",
        "metrics-seo": "SEO",
        "project4-last-update": "Last update: October 2025",

        // Contacts
        "contacts-title": "Contacts",
        "view-demo": "Live Demo",
        "view-code": "View Code"
    },
    ru: {
        // Header
        "subtitle": "Full-stack разработчик",
        "cta-button": "Смотреть работы",

        // About
        "about-title": "Обо мне",
        "about-text": "Разрабатываю полнофункциональные приложения на C#, React и современных веб-технологиях.",
        "skill-tags": ["C#", "JavaScript", "React", "HTML/CSS"],

        // Portfolio
        "portfolio-title": "Мои проекты",

        // Project 1 - ExLauncher
        "project1-badge": "Активный проект",
        "project1-title": "ExLauncher - Универсальный лаунчер для игровых сборок от Exposit",
        "project1-subtitle": "Десктоп приложение для автоматизации установки и управления мод-сборками",
        "project1-description": "Разработка полнофункционального лаунчера для автоматической установки сборок модов от ютубера Exposit. Приложение упрощает процесс настройки модов для обычных пользователей, предоставляя интуитивно понятный интерфейс.",
        "project1-features-title": "Реализованный функционал:",
        "project1-features": [
            "<strong>Работа с архивами:</strong> Поддержка 7z томов со встроенными протоколами",
            "<strong>Интеграция с Mod Organizer 2:</strong> Управление профилями и запуск игры",
            "<strong>Автоматическая генерация INI-файлов</strong> для MO2",
            "<strong>Мультиязычность:</strong> Полная поддержка RU/EN интерфейса",
            "<strong>Система соглашений:</strong> Принятие пользовательского соглашения",
            "<strong>Сохранение настроек:</strong> Локальное хранение в INI-файлах",
            "<strong>Установщик:</strong> Распространение через setup.exe"
        ],
        "project1-arch-title": "Архитектурные особенности:",
        "project1-arch": [
            "<strong>Гибридная архитектура:</strong> C# бэкенд + React фронтенд через WebView2",
            "<strong>Защита ресурсов:</strong> Фронтенд полностью встроен в EXE-файл",
            "<strong>Локальная работа:</strong> Не требует интернет-соединения",
            "<strong>Модульность:</strong> Подготовка к будущим обновлениям"
        ],
        "project1-future-title": "Планы по развитию (в разработке):",
        "project1-future": [
            "Онлайн-установка сборок",
            "Автообновление лаунчера и сборок",
            "Система автообновления на ASP.NET (updater.exe)",
            "Поддержка дополнительных игр"
        ],
        "project1-status": "Статус проекта:",
        "project1-complete": "70% завершён",
        "project1-screenshots": "Скриншоты проекта",
        "project1-notice": "⚠️ Код закрыт как коммерческая разработка",

        // Project 2 - Photo Album
        "project2-title": "Интерактивный фотоальбом",
        "project2-description": "Веб-приложение с музыкальным сопровождением для особых моментов",

        // Project 3 - Database
        "project3-title": "Система управления базой данных интернет-магазина",
        "project3-subtitle": "Курсовой проект: Гибридное решение для управления данными интернет-магазина с десктоп и веб-интерфейсами",
        "project3-description": "Разработка полнофункциональной системы управления базой данных интернет-магазина с двумя интерфейсами доступа: десктоп-приложение на C# для администраторов и веб-интерфейс на PHP для клиентов и сотрудников.",
        "project3-features-title": "Реализованный функционал:",
        "project3-features": [
            "<strong>Управление данными:</strong> CRUD-операции для всех сущностей системы",
            "<strong>Разграничение доступа:</strong> Система ролей (админ/сотрудник/клиент)",
            "<strong>Отчетность:</strong> Генерация PDF-отчетов по заказам и услугам",
            "<strong>Поиск и фильтрация:</strong> Продвинутый поиск по множеству параметров",
            "<strong>История операций:</strong> Логирование действий пользователей",
            "<strong>Экспорт данных:</strong> Выгрузка в Excel для аналитики",
            "<strong>Уведомления:</strong> Email-оповещения о статусе заказов"
        ],
        "project3-arch-title": "Архитектурные особенности:",
        "project3-arch": [
            "<strong>Трехслойная архитектура:</strong> Данные → Бизнес-логика → Представление",
            "<strong>Паттерны проектирования:</strong> Repository, Factory Method, Singleton",
            "<strong>Безопасность:</strong> Prepared Statements, XSS защита, валидация данных",
            "<strong>Масштабируемость:</strong> Модульная структура для легкого расширения"
        ],
        "project3-complete": "100% завершён",
        "project3-grade": "✨ Оценка за курсовой проект: Отлично",

        // Project 4 - Portfolio
        "project4-title": "Адаптивный сайт-портфолио",
        "project4-subtitle": "Современный одностраничный сайт с анимациями и интерактивными элементами",
        "project4-description": "Разработка личного сайта-портфолио с акцентом на пользовательский опыт, производительность и современные веб-стандарты. Особое внимание уделено адаптивности и плавным анимациям.",
        "project4-features-title": "Реализованный функционал:",
        "project4-features": [
            "<strong>Адаптивный дизайн:</strong> Корректное отображение на всех устройствах",
            "<strong>Интерактивная галерея:</strong> Модальные окна для просмотра проектов",
            "<strong>Плавные анимации:</strong> Анимации при скролле и взаимодействии",
            "<strong>Оптимизация SEO:</strong> Семантическая разметка и мета-теги",
            "<strong>Формы связи:</strong> Интеграция с почтовыми сервисами",
            "<strong>Оптимизация изображений:</strong> Правильные форматы и размеры",
            "<strong>CI/CD:</strong> Автоматический деплой через Netlify"
        ],
        "project4-tech-title": "Технические особенности:",
        "project4-tech": [
            "<strong>Mobile First:</strong> Дизайн сначала для мобильных устройств",
            "<strong>BEM методология:</strong> Структурированный и поддерживаемый CSS",
            "<strong>JavaScript Modules:</strong> Модульная структура кода",
            "<strong>Оптимизация:</strong> Lighthouse score > 90 по всем метрикам"
        ],
        "project4-metrics": "Показатели производительности:",
        "project4-update": "🔄 Последнее обновление: Октябрь 2025",
        "metrics-performance": "Производительность",
        "metrics-accessibility": "Доступность",
        "metrics-practices": "Лучшие практики",
        "metrics-seo": "SEO",
        "project4-last-update": "Последнее обновление: Октябрь 2025",

        // Contacts
        "contacts-title": "Контакты",
        "view-demo": "Демо версия",
        "view-code": "Исходный код"
    }
};