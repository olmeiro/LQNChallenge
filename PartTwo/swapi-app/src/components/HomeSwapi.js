import React  from "react";
import Container from "@mui/material/Container";

import { SwapiList } from "./SwapiList";

export const HomeSwapi = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "inherit",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <h1>Swapi Home</h1>
      <SwapiList />
    </Container>
  );
};
