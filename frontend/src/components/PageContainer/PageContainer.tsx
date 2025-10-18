import { grey } from "@mui/material/colors"
import { CardContainer } from "../CardContainer/CardContainer"
import { Box, Typography } from "@mui/material"
import { AddTodo } from "../AddTodo/AddTodo"

export const PageContainer= () => {
    return (
    <Box sx={{backgroundColor: '#FFE2d8'}}>
      <Typography variant="h1" sx={{display: 'flex', padding: 5, justifyContent: 'center', color: grey[400]}}> Your Todo List</Typography>
      <AddTodo />
      <Box display='flex' sx={{
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 2,               
      width: "100vw",        
      boxSizing: "border-box",                
      overflowX: "hidden",
    }}>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      </Box>
    </Box>
    )
}