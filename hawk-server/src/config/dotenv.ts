import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  API_URL: process.env.API_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  USERNAME: process.env.USERNAME || '',
  PASSWORD: process.env.PASSWORD || '',
  PORT: process.env.PORT || 3000
};