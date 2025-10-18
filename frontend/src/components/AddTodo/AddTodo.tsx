import { Button, Input, Box, Typography, Grid } from "@mui/material"
import { useState } from "react"
import { CardDisplay } from "../CardContainer/CardDisplay";

export interface TodoProps{
    title: string,
    date: string
}

export const AddTodo=()=>{
    const[input, setInput]= useState('');
    const[todo, setTodo]= useState<TodoProps[]>([]);
    
    const handleAddTodo=()=>{
        if(input === '') return;
        setTodo([...todo, {title: input, date: new Date().toLocaleDateString()}])
        setInput('')
    }

    //need to check why it is still logging the value twice
    console.log('todolist', todo);
    return(
        <Box >
            <Box display='flex' justifyContent='center' p={2} m={3}>
            <Input placeholder="Add your todo here" value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button size='large' onClick={()=>handleAddTodo()} >
            <Typography sx={{fontWeight: '600', color: 'teal'}}>Add a Todo</Typography></Button>
            </Box>
            <Box display='flex' justifyContent='center' flexWrap={"wrap"}>        
                <Grid container spacing={5} justifyContent='center'>
                    {todo.map((list, idx)=>(<CardDisplay title={list.title} date={list.date} key={idx}/>))}
                </Grid>
            </Box>  
        </Box>
    )
}