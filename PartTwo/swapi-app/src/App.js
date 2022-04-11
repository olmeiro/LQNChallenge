import React, { createContext, useEffect, useState } from "react";

import { AppRouter } from "./routers/AppRouter";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Container } from "@mui/material";

export const DataContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [dataApi, setData] = useState([]);

  useEffect(() => {
   fetch(`https://swapi.dev/api/people`)
    .then(response => response.json())
    .then(data => {
      setData(data.results);
      localStorage.setItem('data', JSON.stringify(data.results))
    })
    setLoading(false);
  }, []);

  return (
    <DataContext.Provider value={dataApi}>
      <Container sx={{bgcolor: 'black'}}>
        <AppRouter />
        <Box sx={{ height: 40, display:'flex', justifyContent:'center' }}>
          <Fade in={loading} unmountOnExit>
            <CircularProgress />
          </Fade>
        </Box>
      </Container>
    </DataContext.Provider>
  );
}

export default App;
