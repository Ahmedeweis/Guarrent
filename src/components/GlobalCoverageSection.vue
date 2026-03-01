<template>
    <!-- ═══════════════════════════════════════════════════════
       PATROL ZONES SECTION
       Circular radar-style map with suburb pills around ring
       ═══════════════════════════════════════════════════════ -->
    <section class="patrol-section py-16 lg:py-24">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <!-- ── Centered heading ── -->
            <div class="text-center mb-12">
                <h2 class="patrol-heading">Our Patrol Zones In Sydney</h2>
            </div>

            <!-- ── Circular radar visualization ── -->
            <div class="radar-wrap">
                <div class="radar-circle">

                    <!-- Blueprint grid inside the circle -->
                    <div class="radar-grid"></div>

                    <!-- Inner concentric ring -->
                    <div class="radar-inner-ring"></div>

                    <!-- Suburb pills positioned around the outer ring -->
                    <div v-for="zone in zones" :key="zone.name" class="zone-pill" :style="zone.style">
                        <!-- Location pin icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="zone-pin" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span class="zone-name">{{ zone.name }}</span>
                    </div>

                    <!-- Center "Sydney CBD" badge -->
                    <div class="sydney-cbd">
                        <span>Sydney</span>
                        <span>CBD</span>
                    </div>

                </div>
            </div>

            <!-- ── CTA button ── -->
            <div class="text-center mt-12">
                <a href="#contact" class="patrol-cta">
                    Request Coverage For Your Suburb
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>

        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

// Suburb names and their angular positions (degrees, clockwise from 12 o'clock)
const suburbAngles = [
    { name: 'Sutherland', angle: 0 },
    { name: 'Liverpool', angle: 30 },
    { name: 'Randwick', angle: 62 },
    { name: 'Bankstown', angle: 95 },
    { name: 'Strathfield', angle: 127 },
    { name: 'Burwood', angle: 152 },
    { name: 'Blacktown', angle: 180 },
    { name: 'Campbelltown', angle: 210 },
    { name: 'Parramatta', angle: 242 },
    { name: 'Hurstville', angle: 270 },
    { name: 'Ryde', angle: 303 },
    { name: 'Penrith', angle: 332 },
]

// Radar circle size (px) and the radius at which pills are centered
const CIRCLE = 500   // matches CSS .radar-circle size
const R = 210   // radius from center to pill center

const zones = computed(() => suburbAngles.map(({ name, angle }) => {
    const rad = (angle - 90) * Math.PI / 180
    // center of circle
    const cx = CIRCLE / 2
    const cy = CIRCLE / 2
    // pill center in px
    const x = cx + R * Math.cos(rad)
    const y = cy + R * Math.sin(rad)

    return {
        name,
        style: {
            left: `${x}px`,
            top: `${y}px`,
            // pill is anchored at its center via translate(-50%,-50%)
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        },
    }
}))
</script>

<style scoped>
/* ── Section: deep navy blue ── */
.patrol-section {
    background: #080e24;
    /* Subtle diagonal blueprint lines */
    background-image:
        linear-gradient(rgba(40, 100, 255, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(40, 100, 255, 0.06) 1px, transparent 1px),
        linear-gradient(135deg, rgba(40, 120, 255, 0.03) 1px, transparent 1px),
        linear-gradient(-135deg, rgba(40, 120, 255, 0.03) 1px, transparent 1px);
    background-size: 48px 48px, 48px 48px, 96px 96px, 96px 96px;
}

/* ── Heading ── */
.patrol-heading {
    font-size: clamp(22px, 3.2vw, 36px);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.01em;
    line-height: 1.2;
}

/* ── Outer wrapper — centers the circle ── */
.radar-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* ── Main radar circle ── */
.radar-circle {
    position: relative;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 1.5px solid rgba(50, 130, 255, 0.45);
    box-shadow:
        0 0 0 1px rgba(50, 130, 255, 0.15),
        inset 0 0 80px rgba(20, 60, 180, 0.25),
        0 0 60px rgba(28, 86, 219, 0.2);
    flex-shrink: 0;
}

/* Blueprint grid inside the circle */
.radar-grid {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    overflow: hidden;
    background-image:
        linear-gradient(rgba(50, 120, 255, 0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(50, 120, 255, 0.18) 1px, transparent 1px);
    background-size: 32px 32px;
}

/* Inner concentric ring */
.radar-inner-ring {
    position: absolute;
    inset: 40px;
    border-radius: 50%;
    border: 1px solid rgba(50, 130, 255, 0.3);
    pointer-events: none;
}

/* ── "Sydney CBD" center badge ── */
.sydney-cbd {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1C56DB;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow:
        0 0 0 8px rgba(28, 86, 219, 0.2),
        0 0 30px rgba(28, 86, 219, 0.6);
    z-index: 10;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    text-align: center;
}

/* ── Suburb pill badges ── */
.zone-pill {
    position: absolute;
    z-index: 5;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px 4px 6px;
    background: rgba(10, 25, 65, 0.75);
    border: 1px solid rgba(60, 130, 255, 0.4);
    border-radius: 999px;
    white-space: nowrap;
    backdrop-filter: blur(4px);
    /* anchor-point is pill center */
    transform-origin: center center;
}

.zone-pin {
    width: 11px;
    height: 11px;
    color: #4d90fe;
    flex-shrink: 0;
}

.zone-name {
    font-size: 10.5px;
    font-weight: 500;
    color: #a8c4f0;
    letter-spacing: 0.01em;
}

/* ── CTA button ── */
.patrol-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #1C56DB;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 999px;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 6px 24px rgba(28, 86, 219, 0.4);
}

.patrol-cta:hover {
    background: #1548c0;
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(28, 86, 219, 0.55);
}

/* ── Responsive: scale the radar on small screens ── */
@media (max-width: 600px) {
    .radar-circle {
        width: 340px;
        height: 340px;
    }

    /* Recalculate pill positions at smaller size via CSS scale */
    .radar-wrap {
        transform: scale(0.68);
        transform-origin: center top;
        margin-bottom: -80px;
    }
}
</style>
