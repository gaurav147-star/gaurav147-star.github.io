import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ThinkingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Particles
        id="thinking-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Lines connect to cursor
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                  color: "#00f0ff", // Neon Blue
                },
              },
            },
          },
          particles: {
            color: {
              value: "#bc13fe", // Neon Purple particles
            },
            links: {
              color: "#00f0ff", // Neon Blue links
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1, // Active thinking speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60, // Density of thoughts
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default ThinkingParticles;
