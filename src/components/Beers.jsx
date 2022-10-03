import React, { useEffect, useMemo, useState } from 'react'
import { Stack, Box, imageListClasses } from "@mui/material";

import { BeerCard } from './';

const Beers = ({beers}, direction) => {
  const data = require('../utils/beers.json');
  const beersArray = data.beers;
  const category = beersArray[0].category;
  console.log("CATEGORY",category);
  console.log("ARRAY BIRRE", beersArray);

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {beersArray.map((beer, idx) => (
        <Box key={idx}>
          <h1></h1>  
        </Box>
      ))
      }
    </Stack>
  )
}

export default Beers;
