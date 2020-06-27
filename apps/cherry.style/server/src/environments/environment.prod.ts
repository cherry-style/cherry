/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { config } from 'dotenv';

config();

export const environment = {
  production: false,
  mongodbURI: process.env.MONGODB_URI!,
};
