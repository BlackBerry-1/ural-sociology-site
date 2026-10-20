/* ============================================================
   Общая шапка и подвал для всех страниц сайта.
   Правится в одном месте — меняется на всём сайте.
   ============================================================ */

(function () {
  // Список пунктов главного меню.
  // Чтобы добавить/убрать пункт — правьте только этот массив.
  const menuItems = [
    { href: 'index.html',       label: 'Главная' },
    { href: 'about.html',       label: 'Об отделении' },
    { href: 'news.html',        label: 'Новости' },
    { href: 'science.html',     label: 'Наука' },
    { href: 'events.html',      label: 'Мероприятия' },
    { href: 'archive.html',     label: 'Архив' },
    { href: 'contacts.html',    label: 'Контакты' },
  ];

  // Контактные данные (замените на реальные, когда появятся).
  const contacts = {
    email: 'info@example.ru',
    year:  '2025',
  };

  // Определяем имя текущего файла, чтобы подсветить активный пункт меню.
  // Пример: для /uros-site/news.html вернёт "news.html".
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Собираем HTML меню.
  const menuHtml = menuItems.map(item => {
    const activeClass = item.href === currentPage ? ' class="active"' : '';
    return `          <li><a href="${item.href}"${activeClass}>${item.label}</a></li>`;
  }).join('\n');

  // -------- ШАПКА --------
  const headerHtml = `
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <span class="logo-mark">РОС</span>
      <span class="logo-text">
        <strong>Уральское отделение</strong>
        <small>Российского общества социологов</small>
      </span>
    </a>
    <button class="nav-toggle" aria-label="Открыть меню" aria-expanded="false">☰</button>
    <nav class="main-nav" aria-label="Главное меню">
      <ul>
${menuHtml}
      </ul>
    </nav>
  </div>`;

  // -------- ПОДВАЛ --------
  const footerHtml = `
  <div class="container footer-inner">
    <div>
      <h4>Уральское отделение РОС</h4>
      <p>Демонстрационная версия сайта. Информация будет уточнена.</p>
    </div>
    <div>
      <h4>Разделы</h4>
      <ul class="footer-links">
        <li><a href="about.html">Об отделении</a></li>
        <li><a href="news.html">Новости</a></li>
        <li><a href="events.html">Мероприятия</a></li>
        <li><a href="contacts.html">Контакты</a></li>
      </ul>
    </div>
    <div>
      <h4>Связь</h4>
      <p>Эл. почта: <a href="mailto:${contacts.email}">${contacts.email}</a></p>
      <p>© ${contacts.year} Уральское отделение РОС</p>
    </div>
  </div>`;

  // Вставляем содержимое в контейнеры на странице.
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;

  // Включаем мобильное меню.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();