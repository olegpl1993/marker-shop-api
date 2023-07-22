import express from 'express';
import cors from 'cors';
import ApiService from './apiService';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

const apiService = new ApiService();
apiService.fetchData();

app.get('/products', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    const data = apiService.getData();
    if (data) {
      res.end(JSON.stringify(data));
    } else {
      await apiService.fetchData();
      const updatedData = apiService.getData();
      res.end(JSON.stringify(updatedData));
    }
  } catch (error) {
    res.status(500);
    res.end(JSON.stringify({ error: 'Failed to fetch data' }));
  }
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`);
});
