import { Card, Grid, Typography, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ParametroApi } from "../../ults/ParametrosApi";
import { personagensProps } from "./interface/interface";
import { Error } from "../Error/Error";
import { TextField } from "@material-ui/core";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

const LinkRedicionamento = styled(Link)`
   text-decoration: none;

   .Card {
        height: 330px
   }
`;

const Api = ParametroApi();

interface setIdaParametro {
    setIdaParametro: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

export function Home(props: setIdaParametro) {

    const [dados, setDados] = useState<personagensProps[]>();
    const [texto, setTexto] = useState<string>("");
    const [send, setSend] = useState<number>(0);
    const [pagina, setPagina] = useState<number>(1);

    useEffect(function () {
        if (texto === "") {
            fetch(`http://gateway.marvel.com/v1/public/characters?ts=${Api.ts}&apikey=${Api.publicKey}&hash=${Api.hash}&offset=${send}&limit=12`)
                .then(res => res.json())
                .then(data => setDados(data.data.results))
        } else {
            fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${texto}&ts=${Api.ts}&apikey=${Api.publicKey}&hash=${Api.hash}&offset=${send}&limit=12`)
                .then(res => res.json())
                .then(data => setDados(data.data.results))
        }
    }, [texto, send])

    return (
        <>
            {!dados ?
                <Error /> :
                <>
                    <Grid container justifyContent="center" mt={2}>
                        <Grid item md={5}>
                            <TextField
                                fullWidth
                                type="text"
                                id="outlined-name"
                                variant="outlined"
                                label="Procurar por personagem"
                                color="primary"
                                onChange={(e) => { setTexto(e.target.value) }}
                                value={texto}
                            />
                        </Grid>
                    </Grid>
                    <Grid container flex={1} justifyContent="center" spacing={2} my={1} >
                        {dados?.map((element, index) => (
                            <Grid key={index} item xs={11} sm={3.5} md={2.6}>
                                <LinkRedicionamento
                                    onClick={() => props.setIdaParametro(element.id)}
                                    to="/personagem">
                                    <Card className="Card">
                                        <img width="100%" height='80%' src={`${element.thumbnail.path}.${element.thumbnail.extension}`} alt="sdafasdf" />
                                        <Typography height='60px' variant="h5" component='h5' display='flex' justifyContent='center' alignItems='center'>
                                            {element.name}
                                        </Typography>
                                    </Card>
                                </LinkRedicionamento>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item display="flex" justifyContent="center" alignItems="center" md={2} >
                            <Button onClick={() => {
                                if (send <= 12) {
                                    setPagina(1);
                                    setSend(0);
                                    if(pagina != 1){
                                        self.scrollTo(0, 0); 
                                    }
                                } else {
                                    setPagina(pagina - 1);
                                    setSend(send - 12);
                                    self.scrollTo(0, 0);
                                }
                            }} endIcon={<ArrowBackIos />}
                            />
                            {pagina}
                            <Button onClick={() => { setPagina(pagina + 1); setSend(send + 12); self.scrollTo(0, 0) }} endIcon={<ArrowForwardIosIcon />}
                            />
                        </Grid>
                    </Grid>
                </>
            }
        </>
    );
}