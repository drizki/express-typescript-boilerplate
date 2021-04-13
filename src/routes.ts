const express = require('express');
const router = express.Router();

import helloController from './controllers/hello.c';

router.get('/', helloController.get);

export default router