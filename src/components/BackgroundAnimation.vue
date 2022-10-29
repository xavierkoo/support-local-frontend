<template>
    <div class="back">
        <Particles
            id="tsparticles"
            class="particles"
            :particles-init="particlesInit"
            :particles-loaded="particlesLoaded"
            :options="{
                fullscreen: {
                    enable: true,
                    ZIndex: -1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 1,
                            size: 20,
                        },
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#d36959',
                    },

                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        random: true,
                        value: 60,
                    },
                },
                detectRetina: true,
            }"
        />
    </div>
</template>

<script setup>
import { loadFull } from "tsparticles";
import { ZIndex } from "tsparticles-engine";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>
