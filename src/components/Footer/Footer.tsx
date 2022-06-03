import { BoxFooter, LinkFooter } from "./style";

export function Footer() {
    return (
        <BoxFooter>
            <LinkFooter display="flex" alignItems="center" height="30px" href="https://www.marvel.com" variant="body2">
                Data provided by Marvel. © 2022 MARVEL
            </LinkFooter>
        </BoxFooter>
    );
}