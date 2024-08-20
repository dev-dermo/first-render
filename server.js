import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const students = [
  {
    id: 1, // uuid 
    name: 'John Doe',
    grades: [90, 80, 88, 98],
  },
  {
    id: 2,
    name: 'Jane Doe',
    grades: [90, 80, 88, 98],
  },
  {
    id: 3,
    name: 'John Smith',
    grades: [90, 80, 88, 98],
  },
  {
    id: 4,
    name: 'Jane Smith',
    grades: [90, 80, 88, 98],
  },
  {
    id: 5,
    name: 'Bob Alice',
    grades: [90, 80, 88, 98],
  },
];

// the 'static' folder is not public itself, but the content are 
app.use(express.static('public'));

// respond with file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.delete('/how-do-i-hit-this-route', (req, res) => {
  res.send('Did this work?');
});

// respond with JSON
app.get('/api/', (req, res) => {
  res.send('To use this api, visit /api/students/your-name');
});

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/students/:id', (req, res) => {
  res.json(students[req.params.id]);
});

app.listen(8080, () => console.log('Server now running at http://localhost:8080'));