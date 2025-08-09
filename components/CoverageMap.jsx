"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const activeStates = [
  "Campeche",
  "Yucatán",
  "Nuevo León",
  "Tlaxcala",
  "Querétaro",
  "Jalisco",
  "Ciudad de México",
  "Puebla",
];

export default function CoverageMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleClick = (geo, event) => {
    const name = geo.properties.name;
    if (activeStates.includes(name)) {
      const svg = event.currentTarget.ownerSVGElement;
      const rect = svg.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      setSelectedState(name);
    } else {
      setSelectedState(null);
    }
  };

  return (
    <section className="mx-auto max-w-14xl px-4 py-4">
      <h3 className="text-center text-2xl md:text-3xl font-bold text-custom-orange dark:text-custom-orange-light mb-2">
        Estados con proyectos activos
      </h3>
      <p className="text-center text-stone-600 dark:text-stone-400 mb-2">
        Ubicaciones donde actualmente trabajamos.
      </p>
      <div className="relative flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1000, center: [-102, 24] }}
          width={800}
          height={600}
          aria-label="Mapa de México con proyectos activos"
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography="/mexico.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const isActive = activeStates.includes(geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={(e) => handleClick(geo, e)}
                    tabIndex={-1}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    className={`${
                      isActive
                        ? "fill-custom-orange dark:fill-custom-orange-light"
                        : "fill-white dark:fill-white"
                    } stroke-stone-400 dark:stroke-stone-500`}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {selectedState && (
          <div
            className="absolute bg-white text-black dark:bg-stone-800 dark:text-white px-3 py-1 rounded shadow-md"
            style={{ top: tooltipPos.y, left: tooltipPos.x, transform: "translate(-50%, -110%)" }}
          >
            {selectedState}
          </div>
        )}
      </div>
    </section>
  );
}

