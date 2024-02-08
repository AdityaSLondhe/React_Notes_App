import React,{useEffect, useState} from 'react'
import CreateNote from './CreateNote'
import './Notes.css'
import {v4 as uuid4} from 'uuid'
import Note from './Note'

const Notes = () => {
 const [inputText, setInputText] = useState("")
 const [notes, setNotes] = useState([])
 const [editToggle, setEditToggle] = useState(null)
 
 const editHandler = (id,text)=>{
    setEditToggle(id);
    setInputText(text);
 }

 const deleteHandler = (id)=>{
    const newNotes = notes.filter(note=>note.id!==id)
    setNotes(newNotes)
 }

 const saveHandler=()=>{
    if(editToggle){
        setNotes(notes.map(note=>{
            note.id===editToggle ? {...note,text:inputText} : note
        }))
    }else{
        setNotes((preNotes)=>[...preNotes,{
            id: uuid4(),
            text : inputText
        }])
    }
    setInputText("")
    setEditToggle(null)
 }
// fetch data from local storage
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Notes"))
        if(data){
            setNotes(data)
        }
    },[])

// store data in local storage
    useEffect(() => {
        if (notes.length > 0) {
            window.localStorage.setItem("Notes", JSON.stringify(notes));
        } else {
            window.localStorage.removeItem("Notes"); // Clear the localStorage if there are no notes
        }
    }, [notes]);


  return (
    <div className='notes'>
        { 
            notes.map(note=>(
                editToggle===note.id?
                <CreateNote  
                    inputText={inputText} 
                    setInputText={setInputText}
                    saveHandler={saveHandler}   
                />:
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                />
            ))
        }
        {
            editToggle===null? 
            <CreateNote  
                inputText={inputText} 
                setInputText={setInputText}
                saveHandler={saveHandler}   
            /> : <></>
        }
        
    </div>
  )
}

export default Notes