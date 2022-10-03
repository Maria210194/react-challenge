import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {demoThumbnailUrl, demoBeerUrl, demoBeerName } from '../utils/constants';
import { beer, image_url } from '../utils/fetchFromJSON';


const BeerCard = ({ beer: { id: {beer_id}, category: {category}} }) => (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={beer_id ? `/beer/${beer_id}` : `/beer/2` }>
      <CardMedia image={image_url || demoThumbnailUrl} alt={beer?.name} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={beer_id ? `/beer/${beer_id}` : demoBeerUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {beer.name.slice(0, 60) || demoBeerName.slice(0, 60)}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default BeerCard;
