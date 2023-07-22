import express from 'express';
import cors from 'cors';
import ApiService from './apiService';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

const apiService = new ApiService();
apiService.fetchData();

app.get('/products', (req, res) => {
  try {
    const data = apiService.getData();
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  } catch (error) {
    res.status(500);
    res.end(JSON.stringify({ error: 'Failed to fetch data' }));
  }
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`);
});
