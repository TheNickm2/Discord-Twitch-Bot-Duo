import * as dotenv from 'dotenv';
const configResult = dotenv.config();
if (configResult.error) {
    throw configResult.error;
}
