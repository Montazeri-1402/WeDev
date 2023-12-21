const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

app.get('/data', async (req, res) => {
  try {

    const data = await prisma.yourTableName.findMany();

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/data', async (req, res) => {
    try {
      const { newDataField1, newDataField2 } = req.body;
  
      const newData = await prisma.yourTableName.create({
        data: {
          fieldName1: newDataField1,
          fieldName2: newDataField2,
        },
      });
  
      res.json({ success: true, data: newData });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Failed to create new data' });
    }
  });
  
  app.put('/data/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { updatedField1, updatedField2 } = req.body;
  
      const updatedData = await prisma.yourTableName.update({
        where: { id: parseInt(id, 10) },
        data: {
          fieldName1: updatedField1,
          fieldName2: updatedField2,
        },
      });
  
      res.json({ success: true, data: updatedData });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Failed to update data' });
    }
  });  