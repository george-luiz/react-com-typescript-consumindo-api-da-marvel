import { Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import logoMarvel from "../assets/img/logo-marvel.png"
import { BoxHeader } from "./style";

const LinkRedicionamento = styled(Link)`
   text-decoration: none;
   color: white;
`;

export function Header() {
    return (
        <BoxHeader position="static" >
            <Grid height="55px" container alignItems="center" justifyContent="center">
                <Grid item xs={10.9} sm={10.5} md={10.4} display="flex"    alignItems="center" justifyContent="space-between">
                    <img height="40px" src={logoMarvel} alt="Logo da Marvel" />
                    <LinkRedicionamento to="/">Personagens</LinkRedicionamento>
                </Grid>
            </Grid>
        </BoxHeader>
    );
}