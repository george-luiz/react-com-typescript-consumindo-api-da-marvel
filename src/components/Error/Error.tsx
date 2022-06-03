import {Grid, CircularProgress } from "@mui/material"; 

export function Error() {
    return (
        <Grid container height="85vh" justifyContent="center" alignItems="center" >
            <Grid item display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size={100} color="error" />
            </Grid>
        </Grid>
    );
}