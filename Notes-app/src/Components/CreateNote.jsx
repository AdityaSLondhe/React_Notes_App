import React from 'react'
import { ButtonContent, Button, Icon } from 'semantic-ui-react'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char =100;
    const charLimit = char - inputText.length;


  return (
    <div className='note'>
        <textarea cols={10} rows={5} placeholder='Type...' maxLength={100} 
        onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
        <div className='note_footer'>
            <span className='label'>{charLimit} left</span>

            {/* <button className='note_save' onClick={saveHandler}>Save</button> */}

            {/* Semantic Ui */}
            <Button animated='vertical' basic color='black' onClick={saveHandler} className='note_save'>
            <ButtonContent visible>Save</ButtonContent>
            <ButtonContent hidden>
                <Icon name='save' />
            </ButtonContent>
            </Button>
        </div>


    </div>
  )
}

export default CreateNote