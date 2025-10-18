import { Box, Grid } from "@mui/material"
import { CardDisplay } from "./CardDisplay"

export const CardContainer=()=>{

    return (
        <Box display='flex' sx={{padding: '10px'}}> 
            <Grid > 
                <CardDisplay title="This is a title" date='5/10/2025' />
            </Grid>
        </Box>
    )
}