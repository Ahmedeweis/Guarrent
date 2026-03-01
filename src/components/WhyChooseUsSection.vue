<template>
    <!-- ═══════════════════════════════════════════════════════
       WHY CHOOSE US SECTION
       4-card grid: blue icons, white cards, centered heading
       ═══════════════════════════════════════════════════════ -->
    <section class="why-section py-16 lg:py-24">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

            <!-- ── Centered heading ── -->
            <div class="text-center mb-12">
                <h2 class="why-heading">
                    Why Sydney Trusts<br />
                    Guarrent Security
                </h2>
            </div>

            <!-- ── 4 white cards ── -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                <div v-for="card in cards" :key="card.title" class="why-card">
                    <!-- Blue circle icon -->
                    <div class="why-icon-circle">
                        <component :is="card.icon" class="w-5 h-5 text-white" />
                    </div>

                    <!-- Title -->
                    <h3 class="why-card-title">{{ card.title }}</h3>

                    <!-- Description -->
                    <p class="why-card-desc">{{ card.desc }}</p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// Tiny inline SVG icon factory
const svg = (paths) => defineComponent({
    render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
    }, paths.map(d => h('path', { d })))
})

// People / guards icon
const PeopleIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
        h('circle', { cx: '9', cy: '7', r: '4' }),
        h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
        h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }),
    ])
})

// GPS / target crosshair icon
const GpsIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('circle', { cx: '12', cy: '12', r: '3' }),
        h('line', { x1: '12', y1: '2', x2: '12', y2: '6' }),
        h('line', { x1: '12', y1: '18', x2: '12', y2: '22' }),
        h('line', { x1: '2', y1: '12', x2: '6', y2: '12' }),
        h('line', { x1: '18', y1: '12', x2: '22', y2: '12' }),
    ])
})

// Clock icon
const ClockIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('polyline', { points: '12 6 12 12 16 14' }),
    ])
})

// Clipboard / report icon
const ReportIcon = defineComponent({
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
        h('path', { d: 'M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2' }),
        h('rect', { x: '9', y: '2', width: '6', height: '4', rx: '1' }),
        h('path', { d: 'M8 10h8' }),
        h('path', { d: 'M8 14h6' }),
        h('path', { d: 'M8 18h4' }),
    ])
})

const cards = [
    {
        icon: PeopleIcon,
        title: '24/7 Trained Patrol Officers',
        desc: 'Professional licensed guards with real experience.',
    },
    {
        icon: GpsIcon,
        title: 'GPS–Tracked Patrol Vehicles',
        desc: 'Every patrol route is monitored in real time.',
    },
    {
        icon: ClockIcon,
        title: 'Rapid Response In 3–5 Minutes',
        desc: 'Immediate support for suspicious activity.',
    },
    {
        icon: ReportIcon,
        title: 'Real-Time Nightly Reports',
        desc: 'Photo proof, visit logs & timestamps sent daily.',
    },
]
</script>

<style scoped>
/* ── Section: light blue gradient bg ── */
.why-section {
    background: linear-gradient(160deg, #dce7f3 0%, #e6eff8 50%, #edf4fb 100%);
}

/* ── Heading ── */
.why-heading {
    font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 700;
    color: #0f1f48;
    line-height: 1.25;
    letter-spacing: -0.01em;
}

/* ── Card ── */
.why-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.why-card:hover {
    box-shadow: 0 8px 32px rgba(28, 86, 219, 0.12);
    transform: translateY(-3px);
}

/* ── Blue circle icon ── */
.why-icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1C56DB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(28, 86, 219, 0.35);
}

/* ── Card title ── */
.why-card-title {
    font-size: 15px;
    font-weight: 700;
    color: #0f1f48;
    line-height: 1.35;
}

/* ── Card description ── */
.why-card-desc {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.65;
}
</style>
