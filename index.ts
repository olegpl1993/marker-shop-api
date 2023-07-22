import express from 'express';
import cors from 'cors';
import ApiService from './src/apiService';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

const apiService = new ApiService();
apiService.fetchData();

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Page</title>
        </head>
        <body>
          <h1>Test page marker-shop-api</h1>
        </body>
      </html>
    `);
});

app.get('/products', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    const data = apiService.getData();
    if (data) {
      res.send(JSON.stringify(data));
    } else {
      await apiService.fetchData();
      const updatedData = apiService.getData();
      res.send(JSON.stringify(updatedData));
    }
  } catch (error) {
    res.status(500);
    res.send(JSON.stringify({ error: 'Failed to fetch data' }));
  }
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`);
});
