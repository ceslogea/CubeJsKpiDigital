import axios from "axios";
import jwt from 'jwt-decode';
import {apisHosts} from './hosts';

const instance = axios.create({
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
})

class AuthService {

    login(username, password) {
        return instance
            .post(apisHosts.searaDashboard.baseurl + apisHosts.searaDashboard.routes.login, {
                username,
                password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
    
    userCanConfigureGraphToSelf(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) return false;
        return jwt(user).role.indexOf("CONFIGURE_GRAPH") > -1;
    }

    userCanConfigureGraphBroadcast(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) return false;
        return jwt(user).role.indexOf("CONFIGURE_GRAPH") > -1;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();