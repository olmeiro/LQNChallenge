import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tooltip from '@mui/material/Tooltip';

import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Modal,
} from "@mui/material";
import { Box } from "@mui/material";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #3DB2FF",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const cardImg = {
  height: 200,
  width: 200,
  marginTop: 2,
};

export const SwapiCard = (props) => {

  

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  } = props;

  const [peliculas, setPeliculas] = useState()
  const [planetas, setPlanetas] = useState()
  // const [first, setfirst] = useState()
  console.log(typeof props.height);

  const navigate = useNavigate();


  const nameImg = name.replaceAll(' ', '').trim();
  const imagePath = `/assets/${nameImg}.jpeg`;

  const location = useLocation();

  useEffect(() => {
    const pathUrl = location.pathname;
    const partUrl = pathUrl.slice(2).replaceAll('%20','');
    
    if (partUrl === nameImg) {
      setOpen(true);
    }
  }, [location, nameImg]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          boxShadow: 1, // theme.shadows[1]
          color: "primary.main", // theme.palette.primary.main
          m: 1, // margin: theme.spacing(1)
          p: {
            xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
          },
        }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              width="300"
              height="300"
              image={imagePath}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                name: {name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                gender: {gender}
              </Typography>
              <Typography variant="body2" color="text.primary">
                birth: {birth_year}
              </Typography>
              <Typography variant="body2" color="text.primary">
                eye_color: {eye_color}
              </Typography>
              <Typography variant="body2" color="text.primary">
                skin_color: {skin_color}
              </Typography>
            </CardContent>
            <Stack direction="row" spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tooltip title="height" >
                <Chip
                  label={height}
                  deleteIcon={<DeleteIcon />}
                  variant="outlined"
                  color="warning" 
                />
              </Tooltip>
            
              <Chip
                label={hair_color}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                color="primary" 
              />
              <Chip
                label={mass}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                color="warning" 
              />
            </Stack>
          </CardActionArea>
          <Button
            onClick={handleOpen}
            component={Link}
            to={`/:${name}`}
            size="medium"
            color="info"
            fullWidth
            variant="contained"
            sx={{
              marginTop: 1
            }}
          >
            See more
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Card>
                <Typography
                  variant="h3"
                  color="text.primary"
                  sx={{ textAlign: "center" }}
                >
                  {name}
                </Typography>
                <CardActionArea
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <CardMedia
                    sx={cardImg}
                    component="img"
                    image={imagePath}
                    alt={name}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      Movies
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={name}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                        sx={{bgcolor: 'blue'}}
                      />
                    </Stack>
                    <Typography variant="h6" color="text.primary">
                      Director:
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={name}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                      />
                    </Stack>
                  </CardContent>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h6" color="text.primary">
                      Planets:
                    </Typography>
                    {/* {name
                      .split(" ")
                      .map(
                        (char, index) =>
                          index <= 3 && (
                            <Chip
                              label={char}
                              deleteIcon={<DeleteIcon />}
                              variant="outlined"
                              key={`char-${index}`}
                            />
                          )
                      )} */}
                  </Stack>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Box>
          </Modal>
        </Card>
      </Box>
    </Grid>
  );
};
