import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SwapiCard } from "./SwapiCard";
import { DataContext } from "../App";

export const SwapiList = () => {
  const data = useContext(DataContext);
  const dataApi = JSON.parse(localStorage.getItem('data'))

  return (
    <Container
      sx={{
        display:'flex',
        justifyContent: 'space-around',
        flexWrap:'wrap',
      }}
    >
      {
        dataApi.map((swapi, idx) => (
          <SwapiCard 
            key={`idx-${swapi.name}`} 
            {...swapi}
          />
        ))
      }
    </Container>
  );
};
