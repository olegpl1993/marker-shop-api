import { Product } from './types';
import axios, { AxiosResponse } from 'axios';

class ApiService {
  private data: Product[] | null = null;
  private url = 'https://msdrop.com.ua/export/4Oyz/json';

  async fetchData(): Promise<void> {
    const response: AxiosResponse<Product[]> = await axios.get(this.url);
    this.data = response.data;
  }

  getData(): Product[] | null {
    return this.data;
  }
}

export default ApiService;
