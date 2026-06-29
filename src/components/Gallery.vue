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
                    </div>
                </div>
            </div>
            <!-- ── Navigation arrows ── -->
            <button class="gallery-nav gallery-nav-left" aria-label="Previous" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </button>
            <button class="gallery-nav gallery-nav-right" aria-label="Next" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import galleryBreakIn from '@/assets/imgs/gallery_break_in.webp'
import galleryOfficer from '@/assets/imgs/gallery_officer.webp'
import gallerySmashed from '@/assets/imgs/gallery_smashed.webp'
const slides = [
    { src: galleryBreakIn, alt: 'Burglar breaking into a home at night' },
    { src: galleryOfficer, alt: 'Police officer comforting crime victim' },
    { src: gallerySmashed, alt: 'Shattered car window after break-in' },
]
// Duplicate slides for infinite-feel loop
const extendedSlides = computed(() => [...slides, ...slides, ...slides])
// current index — start at middle set so we can go both ways
const current = ref(slides.length) // starts at first slide of middle set
// Track translation: responsive slide width
const trackStyle = computed(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
        return {
            transform: `translateX(-${current.value * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }
    } else {
        // Desktop: 50% slide width, offset by 25% to center
        return {
            transform: `translateX(calc(-${current.value * 50}% + 25%))`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }
    }
})
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
    width: 100%;
    overflow: hidden;
}
/* ── Flex track that holds all duplicated slides ── */
.gallery-track {
    display: flex;
    align-items: stretch;
    gap: 0px;
    /* width based on number of extended slides */
    will-change: transform;
}
/* ── Each slide: on desktop, 50% width, so we see full center slide with half on left and right
*/
.gallery-slide {
    flex: 0 0 50%;
    min-width: 50%;
    height: 340px;
    transition: none;
    opacity: 1;
    padding: 0 10px;
    box-sizing: border-box;
}
/* Center / active slide */
.gallery-slide.slide-center {
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
/* ── Navigation arrow buttons ── */
.gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
}
.gallery-nav svg {
    color: #1C56DB;
}
.gallery-nav:hover {
    background: #f0f4ff;
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
        flex: 0 0 100%;
        min-width: 100%;
        height: 270px;
        padding: 0;
    }
    /* On mobile: no gap and track translation for 100% slide width */
    .gallery-track {
        gap: 0px;
    }
}
</style>
