// referenced Module 14 Activity 23
// makes sure user is authorized to perform certain tasks (editing, deleting, commenting, etc.)

const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;