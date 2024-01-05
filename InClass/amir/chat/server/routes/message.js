var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/* GET conversations listing. */
router.get('/', async function (req, res, next) {
    const { conversationId } = req.body;

    res.send(await prisma.chat.findMany(
        {
            where: {
                conversation: conversationId
            }
        }
    ));
});

/* ADD conversations. */
router.post('/', async function (req, res, next) {
    let { conversationId, senderId, msg } = req.body;


    res.send(await prisma.chat.create({
        data: {
            ownerId: senderId,
            conversation: conversationId,
            message: msg,
        }
    }));
});

module.exports = router;
