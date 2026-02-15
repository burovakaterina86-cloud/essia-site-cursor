/**
 * data.js
 * Ультра-минимализм: 1 строка боли, 1 строка решения, цена, кнопка.
 */

const flagshipProjects = [
    {
        id: "f1",
        title: "Диспетчер заявок",
        descriptionFront: "Ни одна заявка больше не теряется.",
        icon: "fa-list-check",
        // Оборот карточки
        painLine: "✔ Хаос в личке и потеря заявок",
        resultLine: "✔ Все обращения в одной таблице",
        price: "14 900 ₽",
        ctaText: "Обсудить →",
        link: "https://t.me/MyNotesAI_Bot"
    },
    {
        id: "f2",
        title: "AI-ассистент под ключ",
        descriptionFront: "Отвечает, консультирует и ведёт к покупке.",
        icon: "fa-robot",
        painLine: "✔ Клиенты ждут ответа и уходят",
        resultLine: "✔ Бот консультирует и прогревает 24/7",
        price: "от 14 900 ₽",
        ctaText: "Внедрить →",
        link: "https://t.me/MyNotesAI_Bot"
    },
    {
        id: "f3",
        title: "Контент с ИИ",
        descriptionFront: "Посты и тексты в вашем стиле.",
        icon: "fa-pen-nib",
        painLine: "✔ Нет времени на регулярный контент",
        resultLine: "✔ Готовые посты в вашем стиле",
        price: "14 900 ₽",
        ctaText: "Запустить →",
        link: "https://t.me/MyNotesAI_Bot"
    },
    {
        id: "f4",
        title: "Бот записи 24/7",
        descriptionFront: "Записывает и напоминает без переписки.",
        icon: "fa-clock",
        painLine: "✔ Теряются клиенты и время на переписку",
        resultLine: "✔ Запись 24/7 + автонапоминания",
        price: "14 900 ₽",
        ctaText: "Обсудить →",
        link: "https://t.me/MyNotesAI_Bot"
    },
    {
        id: "f5",
        title: "Автоматизация Make",
        descriptionFront: "Рутина уходит в сценарии.",
        icon: "fa-bolt",
        painLine: "✔ Ручная рутина и ошибки",
        resultLine: "✔ Процессы работают автоматически",
        price: "от 14 900 ₽",
        ctaText: "Запустить →",
        link: "https://t.me/MyNotesAI_Bot"
    },
    {
        id: "f6",
        title: "Умный бот (RAG)",
        descriptionFront: "Отвечает строго по вашей базе знаний 24/7.",
        icon: "fa-database",
        painLine: "✔ Команда устала отвечать на одно и то же",
        resultLine: "✔ Бот отвечает по вашей базе 24/7",
        price: "от 14 900 ₽",
        ctaText: "Настроить →",
        link: "https://t.me/MyNotesAI_Bot" 
    }
];

// Компактный список остальных проектов
const otherProjects = [
    { title: "Бот-бухгалтер", link: "https://t.me/studio_essa_ai/9" },
    { title: "Голос → структура", link: "https://t.me/studio_essa_ai/11" },
    { title: "ИИ-стратег по контенту", link: "https://t.me/studio_essa_ai/20" },
    { title: "Мониторинг конкурентов", link: "https://t.me/studio_essa_ai/22" },
    { title: "Автопостинг Pinterest", link: "https://t.me/studio_essa_ai/10" },
    { title: "Ассистент календаря", link: "https://t.me/studio_essa_ai/17" },
    { title: "Автоблокнот колориста", link: "https://t.me/studio_essa_ai/12" },
    { title: "Бот-турагент", link: "https://t.me/studio_essa_ai/21" },
    { title: "ИИ-нутрициолог", link: "https://t.me/studio_essa_ai/16" },
    { title: "EcoParent (ИИ-психолог)", link: "https://t.me/studio_essa_ai/27" }
];

if (typeof window !== 'undefined') {
  window.flagshipProjects = flagshipProjects;
  window.otherProjects = otherProjects;
}