import { Box, Container, Typography, Grid, LinearProgress, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { useEffect, useState } from "react";
import { ParametroApi } from "../../ults/ParametrosApi";
import { BoxPersonagem, BoxInformacoesPersonagem } from "./style";
import { personagensProps } from "../Home/interface/interface";
import { Error } from "../Error/Error";

const Api = ParametroApi();

interface idParametro {
  idParametro: number | undefined | null,
}

export function Personagem(props: idParametro) {
  const [dados, setDados] = useState<personagensProps>();
  const [id, setID] = useState(0);
  const [descricao, setDescricao] = useState("");

  function getID(parametro: any) {
    let retornoNumeros = parametro.replace
      (/\D/g, "");
    const teste = retornoNumeros.slice(1);

    return teste;
  }

  console.log(`http://gateway.marvel.com/v1/public/characters/${props.idParametro}?ts=${Api.ts}&apikey=${Api.publicKey}&hash=${Api.hash}`)

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/characters/${props.idParametro}?ts=${Api.ts}&apikey=${Api.publicKey}&hash=${Api.hash}`).then(res => res.json())
      .then(res => {
        setDados(res.data.results[0]);

        const idStories: number = getID(res.data.results[0].stories.items[0].resourceURI);
        setID(idStories);
        buscaPorDescricao(idStories);
      });
  }, []);


  function buscaPorDescricao(id: number) {
    fetch(`http://gateway.marvel.com/v1/public/stories/${id}?ts=${Api.ts}&apikey=${Api.publicKey}&hash=${Api.hash}`)
      .then(res => res.json())
      .then(res => setDescricao(res.data.results[0].description))
  }

  async function Hundle(parametro: number) {
    setDescricao("");
    await setID(parametro);
     buscaPorDescricao(parametro);
  }

  console.log(id)

  return (
    <>
      {!dados ?
        <Error /> :
        <Box >
          <Grid container flex={1} spacing={2} direction={{ xs: "row", md: "row", sm: "row" }} display='flex' justifyContent='center'>
            <Grid item xs={11} sm={6.5} md={7.4}>
              <BoxPersonagem>
                <Typography mt="20px" mb="5px">
                  Personagem Marvel
                </Typography>
                <Typography variant="h5" component="h5" >
                  {dados?.name}
                </Typography>
                <Typography mb="15px">
                  {dados?.description}
                </Typography>
                <img width="100%" src={`${dados?.thumbnail.path}.${dados?.thumbnail.extension}`} alt="Hulk" />
                <Typography variant="h5" component="h5" mt={2} textAlign="center">Histórias</Typography>
                <Table aria-label="custom pagination table">
                  <TableHead >
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Titulo</TableCell>
                      <TableCell>Tipo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dados?.stories.items.map((element, index) => (
                      <>
                        <TableRow key={index}>
                          <TableCell className="td" >{getID(element.resourceURI)}
                          </TableCell>
                          <TableCell className="td" onClick={() => {
                            Hundle(getID(element.resourceURI))
                            setDescricao("");
                            }}>
                            {element.name}
                          </TableCell>
                          <TableCell className="td" >
                            {element.type}
                          </TableCell>
                        </TableRow>
                        {
                          id === getID(element.resourceURI) ?
                            <TableRow className="corTableaError">
                              <TableCell className="corLetraError" colSpan={3}>
                                {
                                  !descricao
                                    ?
                                      "Não há descrição"
                                    :
                                    descricao
                                }
                              </TableCell>
                            </TableRow> :
                            ""
                        }
                      </>
                    ))}
                  </TableBody>
                </Table>
              </BoxPersonagem>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <BoxInformacoesPersonagem pb="25px" height="100%">
                <Container>
                  <Typography key='lista-ul' py="25px">
                    Lista de Aparições
                  </Typography>
                  {dados?.comics.items.map((element, index) => (
                    <li key={index}>{element.name}</li>
                  ))}
                </Container>
              </BoxInformacoesPersonagem>
            </Grid>
          </Grid>
        </Box>
      }
    </>
  );
}