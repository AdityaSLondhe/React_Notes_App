import React from 'react'
import { ButtonContent, Button, Icon } from 'semantic-ui-react'

const Note = ({id,text,editHandler,deleteHandler}) => {
  return (
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className='note-footer' style={{justifyContent : "flex-end"}}>
            <Button animated basic color='black' onClick={()=>deleteHandler(id)} className='note_save' >
                <ButtonContent visible>Delete</ButtonContent>
                <ButtonContent hidden>
                    <Icon name='trash alternate' />
                </ButtonContent>
            </Button>
            &nbsp;
            <Button animated='fade' basic color='black' onClick={()=>editHandler(id,text)} className='note_save'>
                <ButtonContent visible>Edit</ButtonContent>
                <ButtonContent hidden>
                    <Icon name='edit' />
                </ButtonContent>
            </Button>
        </div>
    </div>
  )
}

export default Note