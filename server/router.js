const express = require('express');

const router = express.Router();

// 用户业务
const user = require('./part/user.js');

const jwt = require('jsonwebtoken');

router.get('/allUser', async function(req, res) {
    try {
      let list = await user.userList();
      res.send(list);      
    } catch (error) {
      res.send(error);
    }
})

router.get('/userLogin', function(req, res) {
  try {
    let {data} = req.query;
    let User = JSON.parse(data);   
    user.userLogin(User.username, User.password).then((result) => {
      res.send(result[0]);
    })
  } catch (error) {
    res.send(error);
  }
})

router.post('/userRegister', function(req, res) {
  try {
    let {data} = req.query;
    let User = JSON.parse(data);
    let secretOrPrivateKey = "kk000125";
    let token = jwt.sign({name: User.username, password: User.password}, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 24 * 7    //一周过期
    });
    user.userRegister(User.username, User.password, User.email, 1, token).then((result) => {
      if(result) {
        res.send(result);
      } 
    });     
  } catch (error) {
    res.send(error);
  }
})



// 文章业务

const  article = require('./part/article');

const { nanoid } = require('nanoid');


router.post('/addArticle', async function(req, res) {
  try {
     let Article = JSON.parse(req.query.article);
     article.AddArticle({
       id: nanoid(15),
       title: Article.title,
       content: Article.content,
       time: Article.time,
       type: Article.type,      
     }).then((result) => {
       res.send('添加成功!');
     })
  } catch (error) {
      res.send(0);
  }
})


router.get('/allArticle', async function(req, res) {
  try {
    let result = await article.ArticleList();
    res.send(result);
  } catch (error) {
    
  }
})


router.get('/getArticleById/:id', async function(req, res) {
  let {id} = req.params;
  try {
    let result = await article.getArticleById(id);
    res.send(result[0]);
  } catch (error) {
    res.send('error');
  }
})


// 评论业务

const comment = require('./part/comment');

router.post('/giveComment', function(req, res) {
  try {
    // console.log(req.query.c_id);
    let Comment = req.query;
    console.log(Comment);

    comment.giveComment({
      c_id: 'c' + nanoid(15),
      ac_id: Comment.ac_id,
      author: Comment.author,
      content: Comment.content,
      time: Comment.time
    }).then((result) => {
      res.send('success！');
    })
  } catch (error) {
    console.error(error);
  }
})

router.get('/getArticleComment', function(req, res) {
  try {
    let ID = req.query.ac_id;
    console.log(ID);
    comment.articleComment(ID).then((result) => {
      console.log(result);
      res.send(result);
    })
  } catch (error) {
    console.error(error);
  }
})


// 回复业务

const reply = require('./part/reply');


router.get('/findCommentReplies', function(req, res) {
  try {
    let ID = req.query.cc_id;
    console.log(req.query);
    reply.findCommentReplies(ID).then((result) => {
      res.send(result);
    })
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;





