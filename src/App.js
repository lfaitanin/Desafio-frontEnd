import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const [planets, setplanets] = useState([]);
  const [indice, setIndice] = useState(1);

  const classes = {
    html: {
      backgroundColor: "#fff5f1"
    },
    card: {
      borderStyle: "inset",
      width: "27%",
      margin: "15% 30%",
      backgroundColor: "#fff5f1",
      height: "270px"
    },
    text: {
      textAlign: "center",
      marginTop: "15%",
      fontFamily: "Courier New"
    },
    button: {
      textAlign: "center",
      marginTop: "18%",
      fontFamily: "Courier New"
    },
    root: {
      backgroundColor: "#fff5f1"
    }
  };
  useEffect(() => {
    async function getplanets() {
      const response = await fetch(`https://swapi.co/api/planets/${indice}`);
      const data = await response.json();
      setplanets(data);
    }
    getplanets();
  }, [planets]);

  return (
    <div style={classes.card}>
      <div style={classes.text}>
        <div>
          <Grid>
            <h1 style={{  borderBottom: "1px solid"}}>{planets.name}</h1>
          </Grid>
        </div>

        <h3>
          Climate: {planets.climate}
          <br />
          Terrain: {planets.terrain}
          <br />
          Population: {planets.population}
        </h3>
      </div>
      <div style={classes.button}>
        <Button
          size="small"
          variant="text"
          color="primary"
          disabled={!indice}
          onClick={() => setIndice(prevCount => prevCount - 1)}
        >
          preview
        </Button>
        <Button
          size="small"
          variant="text"
          color="primary"
          onClick={() => setIndice(nextCount => nextCount + 1)}
        >
          next
        </Button>
      </div>
    </div>
  );
}
