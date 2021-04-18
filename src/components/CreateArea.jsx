import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
    const [isExpanded, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

   function expandBox(){
       setExpand(true);
   }
    function submitNote(event) {
        setExpand(false);
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    onChange={handleChange}
                    onClick ={expandBox}
                    value={note.title}
                    placeholder={isExpanded ?"title":"take a note..."} 
                    autoComplete = "off"
                />
          { {isExpanded} &&  <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder={isExpanded?"Take a note...":""}
                    rows={isExpanded ?"3":"1"}
                />}
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
