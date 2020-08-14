import React, { ReactElement } from "react";
import ParticlesJs, { ParticlesProps } from "react-particles-js";

type Props = ParticlesProps & {};

function NightSky({ ...customParticlesProps }: Props): ReactElement {
  return (
    <ParticlesJs
      {...customParticlesProps}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          lineLinked: {
            enable: true,
            opacity: 0.02,
          },
          move: {
            direction: "bottom",
            speed: 0.1,
          },
          size: {
            value: 1,
          },
          shape: {
            type: "star",
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.05,
            },
          },
        },
        retina_detect: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              size: 2,
            },
          },
        },
      }}
    />
  );
}

export { NightSky };
