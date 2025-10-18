import { Button, Input, Box, Typography } from "@mui/material"

export const AddTodo=()=>{
    return(
        <Box display='flex' justifyContent='center' p={2} m={3}>
            <Input placeholder="Add your todo here"/>
            <Button size='large' >
                <Typography sx={{fontWeight: '600', color: 'teal'}}>Add a Todo</Typography></Button>
        </Box>
    )
}