// Fetch and display the news articles
fetch('/api/news')
    .then(response => response.json())
    .then(news => {
        const newsList = document.getElementById('news-list');
        news.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="${item.url}" target="_blank">${item.title}</a> (${new URL(item.url).hostname})
            `;
            newsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching news:', error));

// Automatically update current year of footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

