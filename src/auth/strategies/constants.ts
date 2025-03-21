import { config } from 'dotenv';
config();
export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};
