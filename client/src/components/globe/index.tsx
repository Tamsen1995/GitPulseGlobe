import React, { useEffect, useRef } from "react";
import mapboxgl, { Projection } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGJ1aTE5OTUiLCJhIjoiY2x1Z3llbGhtMmtrajJtbGRzd3ZjbXhpeiJ9.PydtIujr8rhy0cBttOI-IQ";

const Globe: React.FC = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v10", // Changed to dark-v10 for a night theme
        center: [0, 0],
        zoom: 1,
        pitch: 60, // pitch in degrees
        bearing: -60, // bearing in degrees
        projection: "globe" as unknown as Projection, // Fixed the type error by casting the value to Projection type
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");

      map.on("load", () => {
        const mapStyle = map.getStyle();
        if (mapStyle) {
          mapStyle.light = {
            anchor: "viewport",
            color: "#ffffff",
            intensity: 0.1,
          };
          map.setStyle(mapStyle);
        }
      });

      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Globe;
