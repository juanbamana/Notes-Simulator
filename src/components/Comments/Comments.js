import React from "react";
import { Card, CardContent } from "@mui/material";
import moment from "moment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Comments.scss";

export const Comments = ({ index, mycomment, deleteComments }) => {
  const { name, time, comment } = mycomment;
  return (
    <Card className="comment">
      <CardContent>
        <div className="comment__header">
          <h5>{name}</h5>
          <DeleteOutlineIcon onClick={() => deleteComments(index)} />
        </div>
        <p>{comment}</p>
        <div className="comment__time">{moment(time).format("DD/MM/YYYY HH:mm")}</div>
      </CardContent>
    </Card>
  );
};
