var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/* GET conversations listing. */
router.get('/', async function (req, res, next) {
    const { id } = req.body;


    res.send(await prisma.conversation.findMany({
        where: {
            OR: [
                {
                    senderId: id
                },
                {
                    reciverId: id
                }
            ]
        },
        orderBy : {
            time : "desc"
        }
    }));
});

/* ADD conversations. */
router.post('/', async function (req, res, next) {
    const { senderUsername, reciverUsername } = req.body;

    const getSenderId = await prisma.user.findFirst({
        select: {
            id: true
        },
        where: {
            username: senderUsername
        }
    });

    const getReciverId = await prisma.user.findFirst({
        select: {
            id: true
        },
        where: {
            username: reciverUsername
        }
    });

    console.log(getReciverId, getSenderId);

    res.send(await prisma.conversation.create({
        data: {
            senderId: getSenderId.id,
            reciverId: getReciverId.id,
        }
    }));
});

module.exports = router;
