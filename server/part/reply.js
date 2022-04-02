const db = require('../db');


let findCommentReplies = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM REPLIES WHERE cc_id = '${id}'`, function(error, result) {
      if(error) {
        reject(error);
      }
      resolve(result);
    })
  })
}


exports.findCommentReplies = findCommentReplies;