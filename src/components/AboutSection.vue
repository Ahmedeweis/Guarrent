<template>
    <!-- ═══════════════════════════════════════════════════════
       ABOUT SECTION
       Layout: Left text column + Right guard photo
       ═══════════════════════════════════════════════════════ -->
    <section id="about" class="about-section py-20 lg:py-28 bg-white overflow-hidden">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <!-- ══════════════════════════════════════════
             LEFT: Text Content
             ══════════════════════════════════════════ -->
                <div class="flex flex-col">

                    <!-- "WHO WE ARE" pill badge -->
                    <div class="mb-5">
                        <span class="who-badge">WHO WE ARE</span>
                    </div>

                    <!-- Main headline -->
                    <h2 class="about-heading mb-5">
                        Security That Acts Before<br class="hidden sm:block" />
                        It's Too Late
                    </h2>

                    <!-- Description paragraph -->
                    <p class="about-desc mb-10">
                        Guarrent security is a licensed sydney-based security
                        agency specializing in night-time preventive patrols. Our
                        trained officers monitor residential areas, shops, offices,
                        parking lots and construction sites keeping thieves, vandals
                        and intruders away.
                    </p>

                    <!-- Feature icon pills row -->
                    <div class="flex flex-wrap gap-6 sm:gap-10">

                        <!-- 1. Licensed & Insured -->
                        <div class="feature-pill">
                            <div class="feature-icon-wrap">
                                <!-- Shield icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <span class="feature-label">Licensed &amp; Insured</span>
                        </div>

                        <!-- 2. Night Specialists -->
                        <div class="feature-pill">
                            <div class="feature-icon-wrap">
                                <!-- Moon icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            </div>
                            <span class="feature-label">Night Specialists</span>
                        </div>

                        <!-- 3. Sydney Wide -->
                        <div class="feature-pill">
                            <div class="feature-icon-wrap">
                                <!-- Location pin icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span class="feature-label">Sydney Wide</span>
                        </div>

                    </div>

                </div>

                <!-- ══════════════════════════════════════════
             RIGHT: Guard Photo
             ══════════════════════════════════════════ -->
                <div class="flex justify-center lg:justify-end">
                    <div class="guard-photo-wrap relative">

                        <!-- "Since 2016" ribbon banner — top-left -->
                        <div class="since-ribbon">
                            <span class="since-line1">Since</span>
                            <span class="since-year">2016</span>
                            <!-- Triangle tip of ribbon -->
                            <div class="ribbon-tip"></div>
                        </div>

                        <!-- Guard photo -->
                        <img src="@/assets/imgs/about_guard.png" alt="Guarrent Security Officer" class="guard-photo"
                            loading="lazy" @error="guardError = true" />

                        <!-- CSS fallback if image fails -->
                        <div v-if="guardError" class="guard-fallback">
                            <svg class="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const guardError = ref(false)
</script>

<style scoped>
/* ── Section ── */
.about-section {
    background: #ffffff;
}

/* ── "WHO WE ARE" badge ── */
.who-badge {
    display: inline-block;
    border: 1.5px solid #d1d5db;
    color: #374151;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    padding: 5px 14px;
    border-radius: 999px;
}

/* ── Heading ── */
.about-heading {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 800;
    color: #0f1f48;
    line-height: 1.15;
    letter-spacing: -0.01em;
}

/* ── Description ── */
.about-desc {
    font-size: 15px;
    line-height: 1.75;
    color: #6b7280;
    max-width: 480px;
}

/* ── Feature pill (icon + label stacked) ── */
.feature-pill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.feature-icon-wrap {
    width: 52px;
    height: 52px;
    background: #1C56DB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 6px 20px rgba(28, 86, 219, 0.35);
}

.feature-label {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    text-align: center;
    white-space: nowrap;
}

/* ── Right photo card ── */
.guard-photo-wrap {
    position: relative;
    width: clamp(300px, 42vw, 480px);
    height: clamp(380px, 55vw, 600px);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    background: #e2e8f0;
}

.guard-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
}

.guard-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #dbe8f8, #c8d9ed);
}

/* ── "Since 2016" ribbon ── */
.since-ribbon {
    position: absolute;
    top: 0;
    left: 28px;
    z-index: 20;
    background: #1C56DB;
    width: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 6px 8px;
    /* No border-radius on top — sticks to top edge */
    border-radius: 0 0 0 0;
    gap: 0;
}

.since-line1 {
    font-size: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.03em;
    line-height: 1;
    margin-bottom: 1px;
}

.since-year {
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
}

/* Downward triangle tip of the ribbon */
.ribbon-tip {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 26px solid #1C56DB;
    border-right: 26px solid #1C56DB;
    border-bottom: 12px solid transparent;
}
</style>
