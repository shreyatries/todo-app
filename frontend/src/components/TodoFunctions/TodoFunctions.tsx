import { Button, Input, Box, Typography, Grid } from "@mui/material"
import { useState } from "react"
import { CardDisplay } from "../CardContainer/CardDisplay";
import { ViewModal } from "../CardContainer/ViewModal";

export interface TodoProps{
    title: string,
    date: string,
}

export const AddTodo=()=>{
    const[input, setInput]= useState('');
    const[todo, setTodo]= useState<TodoProps[]>([]);
    const[edit, setEdit]= useState<number | null>(null)
    const[isModal, setIsModal]= useState(false)
    
    const handleAddTodo=()=>{
        if(input === '') return;
        setTodo([...todo, {title: input, date: new Date().toLocaleDateString()}])
        setInput('')
    }
    const handleDeleteTodo=(deleteIndex: number)=>{
        let updatedTodo= [...todo]
        updatedTodo.splice(deleteIndex, 1);
        setTodo(updatedTodo)
    }
    const handleEditTodo=(editIndex:number)=>{
        setEdit(editIndex)
        setIsModal(true)
    }
    const handleClose=()=>{
        setEdit(null)
        setIsModal(false)
    }
    const handleSave=(newTitle: string)=>{
        if(edit === null) return
        let updateTodo= [...todo]
        updateTodo[edit]= {...updateTodo[edit], title: newTitle}
        setTodo(updateTodo)
    }
    //determine which index to pass for edit
    const currentEdit= edit !== null ? todo[edit] : null

    return(
        <Box >
            <Box display='flex' justifyContent='center' p={2} m={3}>
            <Input placeholder="Add your todo here" value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button size='large' onClick={()=>handleAddTodo()} >
            <Typography sx={{fontWeight: '600', color: 'teal'}}>Add a Todo</Typography></Button>
            </Box>
            <Box display='flex' justifyContent='center' flexWrap={"wrap"}>        
                <Grid container spacing={5} justifyContent='center'>
                    {todo.map((list, idx)=>(<CardDisplay title={list.title} date={list.date} key={idx} onDelete={()=> handleDeleteTodo(idx)} onEdit={()=> handleEditTodo(idx)} />))}
                </Grid>
            </Box>
            {currentEdit && (
                <ViewModal 
                title={currentEdit.title}
                date={currentEdit.date}
                isOpen={isModal}
                onSave={handleSave}
                onClose={handleClose} />
            )}  
        </Box>
    )
}