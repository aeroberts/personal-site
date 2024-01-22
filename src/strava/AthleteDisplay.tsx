import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import { Athlete } from "./Athlete";
import "./Strava.css";

function AthleteDisplay({ athlete }: { athlete: Athlete }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Profile Picture"
        height="140"
        image={athlete.profile}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {athlete.firstname} {athlete.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {athlete.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default AthleteDisplay;
