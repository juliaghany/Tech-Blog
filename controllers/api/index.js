// reference Module 14 Activity 17 controllers -> api -> index.js
const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;