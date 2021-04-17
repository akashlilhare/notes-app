import React from "react";

function CreateArea() {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handelChange (event) { 
        const{name, value} = event.target;

        setNote (prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
     }

     function submitNote(event){
         event.preventDefault();
     }
    return (
        <div>
            <form>
                <input value={note.title} onChange={handelChange} name="title" placeholder="Title" />
                <textarea name="content" value={note.content} onChange={handelChange} placeholder="Take a note..." rows="3" />
                <button onClick = {submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
