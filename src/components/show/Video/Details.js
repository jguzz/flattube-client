import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid"
//Represents a card for each video in the results container.

function Details(props) {
  let newDate = new Date(props.video.uploadDate);
  let date = String(newDate);
  console.log(props.video.id);
  return (
    <>
	<Grid container>
	<Grid item xs={6}>

      <Typography style={{ color: "white" }} variant="h5">
        {props.video.title}
      </Typography>
      <Typography style={{ color: "white" }}>
        {props.video.channelTitle}
      </Typography>
      <Typography variant="h7" style={{ color: "#BBBBBB" }}>
        Views: {props.video.views}
      </Typography>
      <Typography style={{ color: "#BBBBBB" }}>Uploaded: {date}</Typography>
	</Grid>
      <br />
	  <Grid item xs={6}>

      <Paper square style={{width:"20em", marginRight:"auto", textAlign:"right", background: "#BBBBBB", marginLeft:"40%"}}>
        <Tabs  indicatorColor="disabled"  textColor="disabled">
          <Tab
            label="Like"
            onClick={(e) => props.handleLike(e, props.video.id)}
			/>
          <Tab label={props.displayLikes(props.video.id)} style={{width:"10em"}} disabled />
        </Tabs>
      </Paper>
			</Grid>
			</Grid>
    </>
  );
}

export default Details;
