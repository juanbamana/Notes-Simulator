import React from "react";
import { Grid } from "@mui/material";
import {Comments} from "../Comments/Comments";
import "./ListComments.scss";

export const ListComments = ({ allComments, deleteComments }) => {
  if (!allComments || allComments.length === 0) {
    return (
      <div className="list-comments-empty">
        <h2>No tienes comentarios...</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={2} className="list-comments">
      {allComments.map((mycomment, index) => (
        <Grid item xs={4} key={index}>
            <Comments mycomment={mycomment} index={index} deleteComments={deleteComments}/>
        </Grid>
      ))}
    </Grid>
  );
};
