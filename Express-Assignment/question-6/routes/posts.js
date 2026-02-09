const express = require('express');
const router = express.Router();

const posts = [
  {
    id: 1,
    title: 'Hello Express',
    body: 'This is the first post in the demo blog.'
  }
];

let nextId = 2;

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Simple Blog',
    posts
  });
});

router.get('/new', (req, res) => {
  res.render('new', {
    title: 'New Post',
    error: null,
    form: { title: '', body: '' }
  });
});

router.post('/', (req, res) => {
  const title = (req.body.title || '').trim();
  const body = (req.body.body || '').trim();

  if (!title || !body) {
    return res.status(400).render('new', {
      title: 'New Post',
      error: 'Title and body are required.',
      form: { title, body }
    });
  }

  const post = { id: nextId++, title, body };
  posts.unshift(post);

  res.redirect(`/posts/${post.id}`);
});

router.get('/:id', (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return res.status(404).render('post', {
      title: 'Post Not Found',
      post: null
    });
  }

  res.render('post', {
    title: post.title,
    post
  });
});

module.exports = router;
