import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/user/registration";

class UserService {
    getUser() {
        axios.get(USER_REST_API_URL);
    }

    userRegistration() {
        axios.post(USER_REST_API_URL)
    }
}


export default new UserService();
