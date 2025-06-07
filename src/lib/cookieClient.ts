import { getCookie } from "cookies-next";

export function getCookieClinet(){
    const token = getCookie("session")
    return token;
}