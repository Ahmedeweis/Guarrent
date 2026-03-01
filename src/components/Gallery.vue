<template>
    <!-- ═══════════════════════════════════════════════════════
       GALLERY SECTION
       3-panel slider: burglar / officer+victim / smashed car
       ═══════════════════════════════════════════════════════ -->
    <section class="gallery-section py-10 overflow-hidden">
        <div class="gallery-track-outer">

            <!-- ── Track with 3 visible panels ── -->
            <div class="gallery-track" :style="trackStyle">
                <div v-for="(slide, i) in extendedSlides" :key="i" class="gallery-slide"
                    :class="{ 'slide-center': getCenterIndex(i) }">
                    <div class="gallery-img-wrap">
                        <img :src="slide.src" :alt="slide.alt" class="gallery-img" loading="lazy" />
                        <!-- Dark navy duotone overlay -->
                        <div class="gallery-overlay"></div>
                    </div>
                </div>
            </div>

            <!-- ── Navigation arrows ── -->
            <button class="gallery-nav gallery-nav-left" aria-label="Previous" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <button class="gallery-nav gallery-nav-right" aria-label="Next" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import galleryBreakIn from '@/assets/imgs/gallery_break_in.png'
import galleryOfficer from '@/assets/imgs/gallery_officer.png'
import gallerySmashed from '@/assets/imgs/gallery_smashed.png'

const slides = [
    { src: galleryBreakIn, alt: 'Burglar breaking into a home at night' },
    { src: galleryOfficer, alt: 'Police officer comforting crime victim' },
    { src: gallerySmashed, alt: 'Shattered car window after break-in' },
]

// Duplicate slides for infinite-feel loop
const extendedSlides = computed(() => [...slides, ...slides, ...slides])

// current index — start at middle set so we can go both ways
const current = ref(slides.length) // starts at first slide of middle set

// Track translation: each slide is 33.333% wide, 3 slides visible
// Center slide is at position `current`; offset so center panel is middle
const trackStyle = computed(() => ({
    transform: `translateX(calc(-${current.value * (100 / 3)}% + ${100 / 3}%))`,
    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
}))

function getCenterIndex(i) {
    return i === current.value
}

function next() {
    if (current.value >= extendedSlides.value.length - 2) {
        current.value = slides.length
    } else {
        current.value++
    }
}

function prev() {
    if (current.value <= 1) {
        current.value = slides.length * 2 - 1
    } else {
        current.value--
    }
}
</script>

<style scoped>
/* ── Section background ── */
.gallery-section {
    background: #e8eef5;
}

/* ── Outer container: clips overflow ── */
.gallery-track-outer {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    overflow: hidden;
}

/* ── Flex track that holds all duplicated slides ── */
.gallery-track {
    display: flex;
    align-items: stretch;
    gap: 12px;
    /* width based on number of extended slides */
    will-change: transform;
}

/* ── Each slide takes exactly 1/3 of the outer width (minus gaps) ── */
.gallery-slide {
    flex: 0 0 calc(33.333% - 8px);
    min-width: calc(33.333% - 8px);
    height: 320px;
    transition: height 0.4s ease, opacity 0.4s ease;
    opacity: 0.82;
}

/* Center / active slide is taller and fully opaque */
.gallery-slide.slide-center {
    height: 360px;
    opacity: 1;
    align-self: center;
}

/* ── Image wrapper for overflow + border-radius ── */
.gallery-img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
}

/* ── Actual image ── */
.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

/* ── Dark navy duotone overlay matching the reference ── */
.gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg,
            rgba(5, 20, 60, 0.62) 0%,
            rgba(15, 40, 100, 0.45) 50%,
            rgba(5, 20, 60, 0.60) 100%);
    mix-blend-mode: multiply;
    border-radius: 16px;
}

/* ── Navigation arrow buttons ── */
.gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(6px);
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
}

.gallery-nav:hover {
    background: rgba(28, 86, 219, 0.55);
    transform: translateY(-50%) scale(1.08);
}

.gallery-nav-left {
    left: 32px;
}

.gallery-nav-right {
    right: 32px;
}

/* ── Responsive tweaks ── */
@media (max-width: 768px) {
    .gallery-slide {
        flex: 0 0 calc(80% - 8px);
        min-width: calc(80% - 8px);
        height: 260px;
    }

    .gallery-slide.slide-center {
        height: 280px;
    }
}
</style>
