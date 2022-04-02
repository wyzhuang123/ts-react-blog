const db = require('../db');
let ArticleList = () => {
  return new Promise((resolve, reject) => {
      db.query('SELECT * FROM articles', function(error, result) {
        if(error) {
          reject(error);
        }
        resolve(result);
      })
  })
}

let AddArticle = (article) => {
  return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO articles(id, title, content, time, type) 
        VALUES('${article.id}', '${article.title}', '${article.content}', '${article.time}', '${article.type}') `, 
        function(error, result) {
          if(error) {
            reject(error);
          }
          resolve(result);
      })
  })
}

let getArticleById = (id) => {
  return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM articles WHERE id= '${id}'`, 
        function(error, result) {
          if(error) {
            reject(error);
          }
          resolve(result);
      })
  })
}



exports.ArticleList = ArticleList;
exports.AddArticle = AddArticle;
exports.getArticleById = getArticleById;