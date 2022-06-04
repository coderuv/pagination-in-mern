const express = require('express');
const router = express.Router();




var user = require('../controller/User_C');



// router.get('/test', (req, res) => res.send('book route testing!'));

router.post('/defaultlimit',user.defaultlimit);
router.post('/onlimit',user.onlimit);
router.post('/totalcount',user.totalcount);
router.post('/goto',user.goto);
router.post('/update_email',user.update_email);
router.post('/pagination',user.pagination);

// router.post('/Search',auth.Search );
// router.get('/show',auth.Show);



module.exports = router;