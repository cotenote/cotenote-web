import { EditIcon, TimeIcon, CheckIcon } from "@chakra-ui/icons";
import { Grid } from "@chakra-ui/react";
import React from "react";

import Tile from "./Tile";

function TileContainer() {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr 1fr"
      gap={["60px", "70px", "75px", "80px"]}
    >
      <Tile title="타이머" icon={<TimeIcon />} href="/timer" />
      <Tile title="모의면접" icon={<EditIcon />} href="/speech" />
      <Tile title="오답노트" icon={<CheckIcon />} />
    </Grid>
  );
}

export default TileContainer;
