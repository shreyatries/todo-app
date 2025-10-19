import { grey } from "@mui/material/colors"
import { Box, Typography } from "@mui/material"
import { AddTodo } from "../TodoFunctions/TodoFunctions"
import { ViewModal } from "./ViewModal"

export const CardContainer=()=>{
return (
        <Box  sx={{backgroundColor: '#FFE2d8', width: "100vw", minHeight: '100vh' , boxSizing: 'border-box', flexWrap: "wrap", justifyContent:'center'}} >
        <Typography variant="h1" sx={{display: 'flex', padding: 5, justifyContent: 'center', color: grey[400]}}> Your Todo List</Typography>
        <AddTodo />
        </Box>  
    )
}