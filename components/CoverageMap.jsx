"use client";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const locations = [
  { name: "Monterrey, NL", coordinates: [-100.3161, 25.6866] },
  { name: "Campeche, Camp.", coordinates: [-90.5349, 19.8301] },
  { name: "Mérida, Yuc.", coordinates: [-89.5926, 20.9674] },
];

export default function CoverageMap() {
  return (
    <section className="mx-auto max-w-14xl px-4 py-16">
      <h3 className="text-center text-2xl md:text-3xl font-bold text-custom-orange dark:text-custom-orange-light mb-4">
        Nuestra cobertura presencial en México
      </h3>
      <p className="text-center text-stone-600 dark:text-stone-400 mb-8">
        Presencia de servicio en México.
      </p>
      <div className="flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1000, center: [-102, 24] }}
          width={800}
          height={600}
          aria-label="Mapa de México con cobertura nacional"
        >
          <Geographies geography="/mexico.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <g key={geo.rsmKey}>
                  {/* Base map for light and dark modes */}
                  <Geography
                    geography={geo}
                    className="fill-stone-200 dark:fill-stone-700 stroke-stone-400 dark:stroke-stone-500 hover:fill-custom-orange/60 transition-colors"
                  />
                  {/* Coverage overlay */}
                  <Geography
                    geography={geo}
                    className="fill-custom-orange dark:fill-custom-orange-light opacity-20 pointer-events-none"
                  />
                </g>
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <g aria-label={name} tabIndex={0}>
                <circle
                  r={8}
                  className="animate-ping fill-custom-orange/70 dark:fill-custom-orange-light/70"
                />
                <circle
                  r={5}
                  className="fill-custom-orange dark:fill-custom-orange-light stroke-white dark:stroke-stone-900 stroke-2"
                />
              </g>
              <text
                textAnchor="middle"
                y={-10}
                className="text-xs font-medium text-stone-900 dark:text-stone-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]"
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </section>
  );
}

