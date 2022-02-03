import dotenv from 'dotenv'

//Le fichier .env que nous utiliserons ici se trouve à la racine de notre mono repo
// const envPath = path.join(__dirname, './../../../');
// dotenv.config({ path: envPath + './.env' })

console.log(process.env.GITHUB_ID);

export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api/v1/'