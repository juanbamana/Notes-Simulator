import React from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";

import "./FormNotes.scss";
export const FormNotes = (props) => {
  return (
    <div className="form-notes">
      <h2 className="form-notes__title">Enviar Comentario</h2>
      <form className="form-notes__form">
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
