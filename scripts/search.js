function storeSearchterm(term) {



    var article = [];

    article.push(term);

    localStorage.setItem("search_term", JSON.stringify(article));

}

export default storeSearchterm