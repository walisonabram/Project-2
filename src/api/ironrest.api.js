import axios from 'axios';

const BASE_URL =  'https://ironrest.herokuapp.com/MyPersonalLibrary'

class IronRestAPI {
    constructor() {
      this.api = axios.create({
        baseURL: BASE_URL,
      })
    }
    getUsers() {
        return this.api.get(BASE_URL)
    }
    postUser() {
        return this.api.post(BASE_URL)
    }
}


const usersApi = new IronRestAPI();
export default usersApi;
 