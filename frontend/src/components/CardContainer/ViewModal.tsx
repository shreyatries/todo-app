import { Modal, Typography, Box, Input, Button } from "@mui/material"
import { useState, useEffect } from "react";

export interface ModalProps{
    title: string, 
    date: string,
    isOpen: boolean,
    onClose: () => void,
    onSave: (newTitle: string) => void
}

export const ViewModal=({title, date, isOpen, onClose, onSave}: ModalProps)=>{
    const[edited, setEdited]= useState(title)
    useEffect(()=> setEdited(title), [title])
    
    const handleSave=()=> {
        if(edited === '') return;
        onSave(edited)
        onClose()
    }

    return(
        <>
            <Modal open={isOpen} onClose={onClose} >
                <Box sx={{position: 'absolute', display: 'flex', flexDirection: 'column' , flexWrap: 'nowrap' , backgroundColor: 'turquoise', height: 400, width: 500, padding: '20px', borderRadius: 8, top: '20%', left: '30%', overflowY: 'auto', scrollbarWidth: 'none', }}>
                    <Input fullWidth placeholder="edit todo here" value={edited} onChange={(e)=> setEdited(e.target.value)} />
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">{date}</Typography>
                    <Box sx={{padding: '20px', display: 'flex' , justifyContent: 'flex-end', gap: 3}}>
                        <Button variant='outlined' onClick={onClose} color='error'>Close</Button>
                        <Button variant='contained' onClick={handleSave} color='primary'> Save </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}