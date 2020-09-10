import Axios from 'axios';

export const baseurl="http://localhost:8080/api/user/access_request"

export function evaluateBadge(data){
    return Axios.get(`${baseurl}/badge_evaluation`,data);
}

export function evaluateRole(data){
    return Axios.get(`${baseurl}/role_evaluation`,data);
}

export function evaluateProfile(data){
    return Axios.get(`${baseurl}/profile_evaluation`,data);
}

export function evaluateEnvironment(data){
    return Axios.get(`${baseurl}/environment_evalution`,data);
}