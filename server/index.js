const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const dataFile = 'data.json'

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]), 'utf8');
}

app.post('/api/sendData', (req, res) => {
    const comingData = req.body;

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        jsonData.push(comingData);

        fs.writeFile(dataFile, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.status(201).json({
                message: 'Data saved successfully',
                data: comingData
            });
        });
    });
});

app.get('/api/getData', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        res.status(200).json(jsonData);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});