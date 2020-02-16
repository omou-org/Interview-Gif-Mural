import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 200
  }
});

const SimpleCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.link}
          title={props.word}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.word}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SimpleCard;
