import { jwtDecode } from "jwt-decode";

export const   decodeToken = (token:string)=>{
    if (!token) return null;
    
	const decoded = jwtDecode(token);
	return decoded;
}
