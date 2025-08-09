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
        >
          <Geographies geography="/mexico.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                  className="hover:fill-custom-orange transition-colors"
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#ff943d" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={-10}
                className="text-xs font-medium text-stone-700 dark:text-stone-200"
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

