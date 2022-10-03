import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import {Beers, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [beers, setBeers] = useState([]);  

  
const getData=()=>{
  fetch('./data.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log("GETDATA: ",response)
      return response.json();
    })

}
useEffect(()=>{
  getData()
},[])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span style={{ color: "#272343" }} >beers</span>
        </Typography>

        <Beers beers={beers} selectedCategory={selectedCategory} />
      </Box>
    </Stack>
  );
};

export default Feed;