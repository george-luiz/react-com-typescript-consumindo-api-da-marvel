import md5 from "md5";

export function ParametroApi() {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);
 
    return {
        publicKey,
        hash,
        ts,
    }
}

