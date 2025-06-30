export function saveArticle(article) { // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      resolve({
        _id: "65f7371e7bce9e7d331b11a0", 
        url: article.url, 
        title: article.title,
        imageUrl: article.urlToImage,
        description: article.description,
        publishedAt: article.publishedAt,
        source: article.source
      });
    }, 600);
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      resolve({ message: "Article deleted successfully" });
    }, 400);
  });
} 