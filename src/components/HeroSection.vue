<template>
    <!--
    HERO: Light-blue gradient background, giant "GUARRENT" text sits behind everything,
    hand+phone in center, house card on left, guard photo on right,
    floating badges, and a bottom "Pre-Subscribe Now" pill CTA.
  -->
    <section class="hero-section relative min-h-screen flex flex-col overflow-hidden pt-[68px]">

        <!-- ═══════════════════════════════════════════
         BACKGROUND: giant typographic watermark
    ════════════════════════════════════════════ -->
        <div class="hero-bg-text select-none pointer-events-none" aria-hidden="true">
            GUARRENT
        </div>

        <!-- ═══════════════════════════════════════════
         MAIN CONTENT ROW
    ════════════════════════════════════════════ -->
        <div class="relative z-10 flex-1 flex items-center">
            <div class="w-full max-w-[1200px] mx-auto px-6 lg:px-10">
                <div class="grid grid-cols-3 gap-4 lg:gap-8 items-end min-h-[calc(100vh-68px-80px)]">

                    <!-- ── COL 1: House security card ── -->
                    <div class="col-span-1 flex flex-col justify-center pb-16">
                        <div class="house-card bg-white rounded-2xl p-5 shadow-xl max-w-[240px]">
                            <!-- 3D house illustration (CSS) -->
                            <div class="house-illustration mb-4">
                                <!-- Building -->
                                <div class="building-wrap">
                                    <!-- Roof -->
                                    <div class="roof"></div>
                                    <!-- Main body -->
                                    <div class="house-body">
                                        <!-- Windows -->
                                        <div class="windows">
                                            <div class="win"></div>
                                            <div class="win"></div>
                                        </div>
                                        <!-- Door -->
                                        <div class="door"></div>
                                    </div>
                                    <!-- Shield badge -->
                                    <div class="shield-badge">
                                        <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <!-- Text -->
                            <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Alert</p>
                            <p class="text-sm font-bold text-gray-800 leading-snug">
                                140+ Sydney Homes<br />
                                Broken Into Every Night.<br />
                                <span class="text-[#1C56DB]">Will Yours Be Next?</span>
                            </p>
                        </div>
                    </div>

                    <!-- ── COL 2: Center — hand + phone ── -->
                    <div class="col-span-1 flex flex-col items-center justify-end relative">
                        <!-- Floating badge: 2k+ Users -->
                        <div
                            class="absolute top-12 right-0 xl:-right-8 z-20 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                            <!-- Avatar group -->
                            <div class="flex -space-x-1.5">
                                <div v-for="(c, i) in avatarColors" :key="i"
                                    class="w-5 h-5 rounded-full border-2 border-white" :style="`background:${c}`">
                                </div>
                            </div>
                            <div class="leading-tight">
                                <span class="text-[#1C56DB] font-black">2k+</span><br />
                                <span class="text-[10px] text-gray-500">Users Are In Waiting List</span>
                            </div>
                        </div>

                        <!-- "Affordable Protection" badge -->
                        <div
                            class="absolute bottom-28 left-0 xl:-left-4 z-20 bg-white/80 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 flex items-center gap-2 text-xs whitespace-nowrap">
                            <div
                                class="w-7 h-7 rounded-full bg-[#1C56DB] flex items-center justify-center flex-shrink-0">
                                <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                            </div>
                            <span class="font-semibold text-gray-700">Affordable Protection<br /><span
                                    class="text-[10px] font-normal text-gray-400">For Families</span></span>
                        </div>

                        <!-- Phone mockup (using generated image + CSS fallback) -->
                        <div class="phone-wrapper relative">
                            <img src="@/assets/imgs/hero_phone.png" alt="Guarrent Security App"
                                class="phone-img drop-shadow-2xl" loading="eager" @error="phoneError = true" />
                            <!-- CSS phone fallback if image fails -->
                            <div v-if="phoneError" class="css-phone">
                                <div class="css-phone-screen">
                                    <div class="css-phone-notch"></div>
                                    <div class="css-phone-time">9:41</div>
                                    <div class="css-phone-date">Monday September 16</div>
                                    <!-- Mock notification -->
                                    <div class="css-notification">
                                        <div class="css-notif-dot"></div>
                                        <div class="css-notif-text">
                                            <p>Your Security Officer Is En Route.</p>
                                            <p class="css-notif-sub">ETA: 8 Minutes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ── COL 3: Guard photo ── -->
                    <div class="col-span-1 flex justify-center items-end pb-4">
                        <div class="guard-wrap relative">
                            <img src="@/assets/imgs/hero_guard.png" alt="Guarrent Security Guard"
                                class="guard-img drop-shadow-2xl" loading="eager" @error="guardError = true" />
                            <!-- CSS guard silhouette fallback -->
                            <div v-if="guardError" class="css-guard">
                                <div class="css-guard-head"></div>
                                <div class="css-guard-body">
                                    <div class="css-guard-badge">G</div>
                                </div>
                            </div>
                            <!-- Guard name badge -->
                            <div
                                class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1C56DB] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                                GUARRENT
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════
         BOTTOM: CTA + Wave
    ════════════════════════════════════════════ -->
        <div class="relative z-10 flex justify-center pb-10">
            <a href="#contact"
                class="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200">
                Pre-Subscribe Now
                <span class="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </a>
        </div>

        <!-- Wave bottom edge -->
        <div class="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const phoneError = ref(false)
const guardError = ref(false)

const avatarColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
</script>

<style scoped>
/* ── Hero background gradient ── */
.hero-section {
    background: linear-gradient(160deg,
            #b8d0e8 0%,
            #c2d9ef 25%,
            #cde2f5 50%,
            #d8ecfb 75%,
            #e6f3fc 100%);
}

/* ── Giant background typographic text ── */
.hero-bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -46%);
    font-size: clamp(80px, 16vw, 220px);
    font-weight: 900;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    z-index: 1;
    line-height: 1;
    user-select: none;
}

/* ── Phone wrapper ── */
.phone-wrapper {
    position: relative;
    z-index: 10;
    margin-bottom: 0;
}

.phone-img {
    width: clamp(180px, 26vw, 340px);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 30px 60px rgba(28, 86, 219, 0.25));
}

/* ── Guard ── */
.guard-wrap {
    position: relative;
}

.guard-img {
    width: clamp(160px, 22vw, 300px);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
}

/* ── House card illustration ── */
.house-illustration {
    display: flex;
    justify-content: center;
    padding: 8px 0;
}

.building-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.roof {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 36px solid #1C56DB;
    margin-bottom: -2px;
}

.house-body {
    width: 80px;
    height: 56px;
    background: linear-gradient(135deg, #2563EB, #1C56DB);
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0;
}

.windows {
    display: flex;
    gap: 8px;
}

.win {
    width: 14px;
    height: 14px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
}

.door {
    width: 18px;
    height: 22px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 3px 3px 0 0;
    margin-top: 2px;
}

.shield-badge {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 24px;
    height: 24px;
    background: #10B981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* ── CSS fallbacks ── */
.css-phone {
    width: 200px;
    height: 400px;
    background: linear-gradient(160deg, #1e293b, #0f172a);
    border-radius: 32px;
    border: 3px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 20px;
    box-shadow: 0 30px 80px rgba(28, 86, 219, 0.3), 0 10px 30px rgba(0, 0, 0, 0.4);
}

.css-phone-screen {
    width: 100%;
    padding: 0 12px;
    text-align: center;
}

.css-phone-notch {
    width: 60px;
    height: 22px;
    background: #0f172a;
    border-radius: 0 0 16px 16px;
    margin: 0 auto 12px;
}

.css-phone-time {
    font-size: 42px;
    font-weight: 900;
    color: white;
    line-height: 1;
}

.css-phone-date {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 16px;
}

.css-notification {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: left;
}

.css-notif-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3B82F6;
    flex-shrink: 0;
}

.css-notif-text {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.85);
}

.css-notif-sub {
    color: rgba(255, 255, 255, 0.5);
}

.css-guard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.css-guard-head {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f0d5ba, #e8c9a8);
    border-radius: 50%;
}

.css-guard-body {
    width: 90px;
    height: 120px;
    background: linear-gradient(160deg, #f8fafc, #e2e8f0);
    border-radius: 16px 16px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.css-guard-badge {
    font-size: 16px;
    font-weight: 900;
    color: #1C56DB;
    background: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
