const express = require('express');
const router = express.Router();

const {
    getCategory,
    getCategories,
    searchCategories
} = require('../controllers/categories');

router.route('/').get(getCategories);
router.route('/search').get(searchCategories);
router.route('/:id').get(getCategory);

module.exports = router;
