<template>
    <!--
    HERO: Light-blue gradient background, giant "GUARRENT" text sits behind everything,
    3 images: left (fact_building), middle (hero_phone), right (about_guard),
    and a bottom "Pre-Subscribe Now" pill CTA.
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
                    <!-- ── COL 1: Left image + card ── -->
                    <div class="col-span-1 flex flex-col justify-center pb-16">
                        <div class="house-card bg-white p-5 shadow-xl max-w-[240px] relative pt-20" style="border-top-right-radius: 80px; border-radius: 0 80px 0px 0px;">
                            <img
                                src="@/assets/imgs/fact_building.png"
                                alt="Building"
                                class="left-img w-full h-auto object-contain mb-4 absolute -top-16 left-1/2 -translate-x-1/2 max-w-[220px]"
                            />
                            <div class="mt-16">
                                <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Alert</p>
                                <p class="text-sm font-bold text-gray-800 leading-snug">
                                    140+ Sydney Homes<br />
                                    Broken Into Every Night.<br />
                                    <span class="text-[#1C56DB]">Will Yours Be Next?</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- ── COL 2: Center — phone ── -->
                    <div class="col-span-1 flex flex-col items-center justify-end relative">
                        <img
                            src="@/assets/imgs/hero_phone.png"
                            alt="Guarrent Security App"
                            class="phone-img drop-shadow-2xl"
                        />
                    </div>
                    <!-- ── COL 3: Right image ── -->
                    <div class="col-span-1 flex justify-center items-end pb-4">
                        <img
                            src="@/assets/imgs/gared.png"
                            alt="Guarrent Security Guard"
                            class="right-img drop-shadow-xl max-w-[280px] w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- ═══════════════════════════════════════════
         BOTTOM: CTA + Wave
    ════════════════════════════════════════════ -->
        <div class="relative z-10 flex justify-center pb-10">
            <a href="#contact" style="background-color: white;"
                class="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold text-[15px] px-7 py-3.5 rounded-full">
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
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(80px, 16vw, 220px);
    font-weight: 900;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.75);
    white-space: nowrap;
    z-index: 1;
    line-height: 1;
    user-select: none;
}
/* ── Images ── */
.left-img {
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
}
.phone-img {
    width: clamp(180px, 26vw, 340px);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 30px 60px rgba(28, 86, 219, 0.25));
}
.right-img {
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}
</style>
