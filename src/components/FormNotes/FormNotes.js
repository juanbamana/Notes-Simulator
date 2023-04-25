import React,  {useState} from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";

import "./FormNotes.scss";
export const FormNotes = ({sendNotes}) => {



    
 const onChangeForm = (event) => {

    setFormState({
      ...formState,
        [event.target.name]: event.target.value
    })
}

const [formState, setFormState] = useState({
    name: "",
    coment: ""
})


  return (
    <div className="form-notes">
      <h2 className="form-notes__title">Enviar Comentario</h2>
      <form className="form-notes__form" onSubmit={event=> sendNotes(event, formState)} onChange={onChangeForm}>
        <FormControl>
          <FormGroup>
            <TextField
              className="form-notes__form-name"
              name="name"
              type="text"
              placeholder="Nombre de usuario"
              margin="normal"
              variant="standard"

            ></TextField>
          </FormGroup>

          <FormGroup>
            <TextField
              className="form-notes__form-textarea"
              name="coment"
              multiline
              rows="6"
              placeholder="Escribe tu Comentario..."
              margin="normal"
              variant="standard"
            ></TextField>
          </FormGroup>
        </FormControl>
        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </form>
    </div>
  );
};
