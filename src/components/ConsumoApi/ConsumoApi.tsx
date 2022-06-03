import { useEffect, useState } from 'react';
import { Md5 } from 'ts-md5'

const baseURL = "http://gateway.marvel.com/v1/public/characters?";

const publicKey = "6cca272e2f08858c7e338a0b98640c62";
const privateKey = "b5fa5ab023a4ae7f8dd3e7d02858b53747ebdba1";

const ts = Number(new Date()); // conversão para número

const hash = Md5.hashStr(`${ts}${privateKey}${publicKey}`);
/* const hash = new Md5(`${ts}${privateKey}${publicKey}`); */
/* let url = `${baseURL}ts=${ts}&apikey=${publicKey}&hash=${hash}`; */ /* &id=${idParams} */

/* type Repositoriy = {
    name: string;
    description: string;
} */

export function ConsumoApi<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);/* <Repositoriy[]> */

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data.data.results[0]);
        })
    }, []);

    return { data }
}