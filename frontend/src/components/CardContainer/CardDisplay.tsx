import Card from '@mui/material/Card';
import { Grid, Typography, Box, Link } from '@mui/material';
import { grey, pink } from '@mui/material/colors';

export interface CardProps{
    title: string,
    date: string
}

export const CardDisplay=({title, date}: CardProps)=>{
return(
    <Grid>
    <Card sx={{p: 2, borderRadius: 8, backgroundColor: pink[100],  border:2 ,borderColor: pink[600], boxShadow: 'none', height:200, width: 300,  display: "flex",
          flexDirection: "column", justifyContent: "space-between"}}>
            <Typography variant='h4' sx={{color: 'grey.100', fontStyle: 'italic', height: 180}}>{title}</Typography>    
        <Box display='flex' justifyContent="flex-end" gap={2} paddingRight={2}>
            <Typography variant='body2' sx={{color: grey[600], paddingRight: 10}}>{date}</Typography>
            <Link sx={{ textDecoration: "none", cursor: "pointer" }}>Edit</Link>
            <Link sx={{ textDecoration: "none", cursor: "pointer" }}>Delete</Link>
        </Box>
    </Card>
</Grid>
)
}