<template>
    <!-- ═══════════════════════════════════════════════════════
       SEE HOW WE REPORT SECTION
       Left: 4 feature items | Right: mock Nightly Patrol Report card
       ═══════════════════════════════════════════════════════ -->
    <section class="report-section py-16 lg:py-24">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <!-- ── Centered heading ── -->
            <div class="text-center mb-14">
                <h2 class="report-heading">See How We Report Every Night</h2>
            </div>

            <!-- ── 2-column layout ── -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <!-- ═══════════════════════════════════════
             LEFT: Feature list
             ═══════════════════════════════════════ -->
                <div class="flex flex-col gap-4">

                    <div v-for="feat in features" :key="feat.title" class="feature-row">
                        <!-- Blue circle icon -->
                        <div class="feature-icon">
                            <component :is="feat.icon" class="w-5 h-5 text-white" />
                        </div>
                        <!-- Text -->
                        <div>
                            <h3 class="feature-title">{{ feat.title }}</h3>
                            <p class="feature-desc">{{ feat.desc }}</p>
                        </div>
                    </div>

                </div>

                <!-- ═══════════════════════════════════════
             RIGHT: Nightly Patrol Report card
             ═══════════════════════════════════════ -->
                <div class="report-card">

                    <!-- Card header -->
                    <div class="flex items-center justify-between mb-5">
                        <h3 class="report-card-title">Nightly Patrol Report</h3>
                        <span class="area-clear-badge">
                            <!-- Home icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline stroke-linecap="round" stroke-linejoin="round"
                                    points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Area Clear
                        </span>
                    </div>

                    <!-- Photo Evidence section -->
                    <p class="report-section-label">Photo Evidence</p>
                    <div class="flex gap-3 mb-5">
                        <div class="evidence-photo">
                            <img src="@/assets/imgs/patrol_report.png" alt="Patrol photo evidence"
                                class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <!-- Second photo: solid blue placeholder matching design -->
                        <div class="evidence-photo evidence-photo-blue"></div>
                    </div>

                    <!-- Visit Log -->
                    <p class="report-section-label mb-2">Visit Log</p>
                    <div class="visit-log">
                        <div class="visit-row">
                            <span class="visit-label">Arrival</span>
                            <span class="visit-time">22:15:32</span>
                        </div>
                        <div class="visit-divider"></div>
                        <div class="visit-row">
                            <span class="visit-label">Departure</span>
                            <span class="visit-time">22:24:18</span>
                        </div>
                    </div>

                    <!-- Officer Remarks -->
                    <p class="report-section-label mt-4 mb-2">Office Remarks</p>
                    <div class="remarks-box">
                        <p class="remarks-text">
                            all entry points checked and secured. no suspicious activity
                            detected. perimeter clear.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// Inline SVG icon factory
const mkIcon = (children) => defineComponent({
    render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
    }, children)
})

// Camera icon
const CameraIcon = mkIcon([
    h('path', { d: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' }),
    h('circle', { cx: '12', cy: '13', r: '4' }),
])

// Clock icon
const ClockIcon = mkIcon([
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('polyline', { points: '12 6 12 12 16 14' }),
])

// Clipboard icon
const ClipboardIcon = mkIcon([
    h('path', { d: 'M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2' }),
    h('rect', { x: '9', y: '2', width: '6', height: '4', rx: '1' }),
    h('line', { x1: '8', y1: '10', x2: '16', y2: '10' }),
    h('line', { x1: '8', y1: '14', x2: '16', y2: '14' }),
    h('line', { x1: '8', y1: '18', x2: '12', y2: '18' }),
])

// Shield icon
const ShieldIcon = mkIcon([
    h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
])

const features = [
    {
        icon: CameraIcon,
        title: 'Photo Evidence',
        desc: 'Every Patrol Includes Photos Of Locked Gates, Checked Doors, And Secure Perimeters.',
    },
    {
        icon: ClockIcon,
        title: 'Accurate Timestamps',
        desc: 'GPS-Verified Arrival And Departure Times For Every Visit.',
    },
    {
        icon: ClipboardIcon,
        title: 'Officer Remarks',
        desc: 'Detailed Notes On Property Conditions And Any Observations.',
    },
    {
        icon: ShieldIcon,
        title: 'Security Status',
        desc: 'Clear indicators showing if the area is secure or requires attention.',
    },
]
</script>

<style scoped>
/* ── Section bg: light blue gradient ── */
.report-section {
    background: linear-gradient(160deg, #d8e8f5 0%, #e4eef8 50%, #edf4fb 100%);
}

/* ── Heading ── */
.report-heading {
    font-size: clamp(24px, 3.5vw, 38px);
    font-weight: 700;
    color: #0f1f48;
    letter-spacing: -0.01em;
    line-height: 1.2;
}

/* ── Feature row (icon + text) ── */
.feature-row {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 14px;
    padding: 16px 18px;
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.feature-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1C56DB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(28, 86, 219, 0.35);
}

.feature-title {
    font-size: 15px;
    font-weight: 700;
    color: #0f1f48;
    margin-bottom: 4px;
}

.feature-desc {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.6;
}

/* ═══════════════════════════════════
   REPORT CARD
   ═══════════════════════════════════ */
.report-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(220, 230, 245, 0.9);
}

.report-card-title {
    font-size: 16px;
    font-weight: 700;
    color: #0f1f48;
}

/* "Area Clear" badge */
.area-clear-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 600;
    color: #1C56DB;
    border: 1.5px solid #1C56DB;
    border-radius: 999px;
    padding: 4px 12px;
}

/* Section labels inside card */
.report-section-label {
    font-size: 13px;
    font-weight: 600;
    color: #1C56DB;
    margin-bottom: 8px;
}

/* Photo evidence thumbnails */
.evidence-photo {
    flex: 1;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    background: #e2e8f0;
}

.evidence-photo-blue {
    background: #2563eb;
}

/* Visit log */
.visit-log {
    background: #f8fafc;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e8eef5;
}

.visit-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
}

.visit-label {
    font-size: 13px;
    color: #374151;
}

.visit-time {
    font-size: 13px;
    font-weight: 600;
    color: #0f1f48;
    font-variant-numeric: tabular-nums;
}

.visit-divider {
    height: 1px;
    background: #e8eef5;
    margin: 0 14px;
}

/* Officer remarks box */
.remarks-box {
    background: #f8fafc;
    border-radius: 10px;
    padding: 12px 14px;
    border: 1px solid #e8eef5;
}

.remarks-text {
    font-size: 12.5px;
    font-style: italic;
    color: #6b7280;
    line-height: 1.6;
}
</style>
