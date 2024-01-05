var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  res.send(await prisma.user.findMany());
});

/* POST users. */
router.post('/', async function(req, res, next) {
  const body = req.body;

  res.send(await prisma.user.create({
    data : body
  }));
});

module.exports = router;
