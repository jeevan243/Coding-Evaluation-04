async function apiCall(url) {
    //add api call logic here
    try {
        var responce = await fetch(url);
        var data = await responce.json();
        return data;

        console.log(data)
    }
    catch (er) {
        console.log('er:', er)
    }
}
function appendArticles(articles, main) {

    articles.map(({ title, image, content }) => {

        let div = document.createElement("div");

        let des = document.createElement("h3");
        des.textContent = content;

        div.addEventListener(("click"), () => {
            getNews(content);
        })

        let name = document.createElement("h3");
        name.textContent = title;

        let img = document.createElement("img");
        img.src = image;

        div.append(name, img);

        main.append(div);

    })
    //add append logic here
}

var array = JSON.parse(localStorage.getItem("newsData")) || [];
function getNews(content) {
    array = [];
    array.push(content);

    localStorage.setItem("newsData", JSON.stringify(array))

    window.location.href = "news.html"

}

export { apiCall, appendArticles }