import { tokenName } from "./constant";

const setToken = (key:string, token:string, )=>{
    localStorage.setItem(key, token)
}

const getToken = (key:string)=>{
    const data = localStorage.getItem(key)
    return data;
}

const removeToken = ()=>{
    localStorage.removeItem(tokenName)
}

export const tokenHelper = {setToken, getToken, removeToken}