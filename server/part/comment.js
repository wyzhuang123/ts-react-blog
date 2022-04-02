const db = require('../db');

let giveComment = (comment) => {
  return new Promise((reslove, reject) => {
    db.query(`INSERT INTO COMMENTS(c_id, ac_id, author, content, time)
      VALUES('${ comment.c_id }','${ comment.ac_id }','${ comment.author }','${ comment.content }','${ comment.time }')`, 
      function(error, result) {
        if(error) {
          reject(error);
        }
        reslove(result);
    })
  })
}

let articleComment = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM COMMENTS WHERE ac_id = '${id}'`,function(error, result) {
      if(error) {
        reject(error);
      }
      resolve(result);
    })
  })
}


let replyComment = () => {

}



exports.giveComment = giveComment;
exports.articleComment = articleComment;