// const router = require('express').Router();
// const { Comment, BLog, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// // CREATE new comment
// router.post('/blog/:id/comments', withAuth, async (req, res) => {
//     try {
//         const newComment = await Comment.create({
//             comment_description: req.body.comment_description,
//             user_id: req.session.user_id,
//             blog_id: req.params.id,
//         });

//         res.status(200).json(newComment);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// // UPDATE comment
// router.put('/comment/:id')


// // DELETE comment

// module.exports = router;