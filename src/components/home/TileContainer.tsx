import { EditIcon, TimeIcon } from "@chakra-ui/icons";
import { Grid } from "@chakra-ui/react";
import React from "react";
import Tile from "./Tile";

function TileContainer() {
  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr" gap="80px">
      <Tile title="타이머" icon={<TimeIcon fontWeight="bold" />} />
      <Tile title="모의고사" icon={<EditIcon />} />
      <Tile title="오답노트" icon={<TimeIcon />} />
    </Grid>
  );
}

export default TileContainer;
