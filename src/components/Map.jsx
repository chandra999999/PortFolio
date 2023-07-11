import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,

} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 180 }}>

      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
