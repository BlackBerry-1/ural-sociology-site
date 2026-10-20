// Этот скрипт загружает новости из файла data/news.json
// и вставляет их в блок <div id="news-container"></div>

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("news-container");
  if (!container) return; // Если на странице нет такого блока, ничего не делаем

  fetch('data/news.json')
    .then(response => {
      if (!response.ok) throw new Error('Ошибка загрузки новостей');
      return response.json();
    })
    .then(news => {
      // Берем только 3 последние новости для главной страницы
      const latestNews = news.slice(0, 3);
      
      latestNews.forEach(item => {
        const article = document.createElement("article");
        article.className = "news-card";
        article.innerHTML = `
          <time datetime="${item.date}">${item.dateText}</time>
          <h3><a href="${item.link}">${item.title}</a></h3>
          <p>${item.text}</p>
          <a href="${item.link}" class="link-more">Читать далее →</a>
        `;
        container.appendChild(article);
      });
    })
    .catch(error => {
      console.error(error);
      container.innerHTML = "<p>Не удалось загрузить новости.</p>";
    });
});