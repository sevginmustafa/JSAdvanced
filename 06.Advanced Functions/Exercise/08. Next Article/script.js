function getArticleGenerator(articles) {
    const array = articles;
    let counter = 0;

    return function () {
        if (counter < articles.length) {
            const el = document.createElement('article');
            el.textContent = articles[counter++];
            document.getElementById('content').appendChild(el);
        }
    }
}