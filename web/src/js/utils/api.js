import axios from 'axios'
import { API_BASE_URL } from './constants'

//Nous créons une instance axios afin de la ré-utiliser plus tard
//Pour ne pas à avoir à re renseigner l'url de base de notre api
//Ici, nous restons en local -> http://localhost:3000/api/v1/

const instance = axios.create({
    baseURL: API_BASE_URL
})

export default instance