import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-primary">
      <div className="nebula-bg" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false, // Stars usually don't have lines connecting them
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5, // Slow movement for stars
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120, // More stars
            },
            opacity: {
              value: { min: 0.1, max: 0.8 }, // Twinkling effect
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
