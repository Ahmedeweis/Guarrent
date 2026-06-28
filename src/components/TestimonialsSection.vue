<template>
    <!-- ═══════════════════════════════════════════════════════
       TESTIMONIALS SECTION — "What Sydney Residents Say"
       ═══════════════════════════════════════════════════════ -->
    <section class="testimonial-section py-16 lg:py-24">
        <div class="testimonial-grid">
            <!-- Top Left: IMPACT label + heading -->
            <div class="testimonial-left">
                <span class="impact-badge">IMPACT</span>
                <h2 class="testimonial-heading">
                    What Sydney<br />
                    Residents Say
                </h2>
            </div>
            <!-- Center: Card + Arrows -->
            <div class="card-arrows-area">
                <!-- Left Arrow -->
                <button class="nav-arrow" aria-label="Previous testimonial" @click="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <!-- Portrait Card -->
                <div class="portrait-card">
                    <!-- Background shield sphere -->
                    <div class="portrait-bg-shield">
                        <img src="@/assets/imgs/shield_sphere.png" alt="Shield background" class="portrait-bg-img" loading="lazy" />
                    </div>
                    <!-- Top-left photo -->
                    <div class="portrait-photo-wrap">
                        <img :src="current.photo" :alt="current.name" class="portrait-photo" loading="lazy" />
                    </div>
                    <!-- Shield icon (alone on left) -->
                    <div class="portrait-shield-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white"
                            viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                    </div>
                    <!-- Name + role box (on right, without icon) -->
                    <div class="portrait-name-box">
                        <span class="portrait-name">{{ current.name }}</span>
                        <span class="portrait-role">{{ current.role }}</span>
                    </div>
                </div>
                <!-- Right Arrow -->
                <button class="nav-arrow" aria-label="Next testimonial" @click="next">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
            <!-- Right: Top Right (Watch) + Bottom Right (Quote) -->
            <div class="testimonial-right">
                <!-- Top Right: Watch story -->
                <div class="watch-top-right">
                    <div class="watch-story-row">
                        <span class="watch-90s">90S</span>
                        <div class="watch-label">
                            <span>Watch The 90</span>
                            <span>Sec Story</span>
                        </div>
                    </div>
                    <a href="#" class="watch-link">
                        WATCH STORY
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
                <!-- Bottom Right: Testimonial quote -->
                <p class="testimonial-quote" v-html="current.quote"></p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import testimonialMary from '@/assets/imgs/testimonial_mary.png'
const testimonials = [
    {
        photo: testimonialMary,
        name: 'Mary Juibar',
        role: 'a single mother',
        quote: '"as a single mother, i felt <strong>helpless</strong> after two break-ins. now, every night i get a <strong>message</strong> when my officer is on the way.<strong> the difference... is everything</strong>."',
    },
    {
        photo: testimonialMary,
        name: 'Sarah Mitchell',
        role: 'home owner, Randwick',
        quote: '"we\'ve had Guarrent patrol our street for 6 months. not a single incident since. our whole neighbourhood feels <strong>safer</strong> now."',
    },
    {
        photo: testimonialMary,
        name: 'James Okafor',
        role: 'business owner, Bankstown',
        quote: '"after three break-ins at my shop, i called Guarrent. the <strong>nightly reports</strong> give me complete peace of mind. i finally sleep well."',
    },
]
const currentIndex = ref(0)
const current = computed(() => testimonials[currentIndex.value])
function next() {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
}
function prev() {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>
<style scoped>
/* ── Prevent horizontal scroll ── */
.testimonial-section {
    background: #ffffff;
    overflow-x: hidden;
    width: 100%;
}
/* ── Grid: left, center, right ── */
.testimonial-grid {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 40px;
    align-items: stretch;
    padding: 0 40px;
    max-width: 1600px;
    margin: 0 auto;
}
@media (max-width: 1200px) {
    .testimonial-grid {
        padding: 0 24px;
    }
}
@media (max-width: 1024px) {
    .testimonial-grid {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 0 16px;
    }
}
/* ─── LEFT: IMPACT label + heading (top left) ─── */
.testimonial-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 20px;
}
@media (max-width: 1024px) {
    .testimonial-left {
        align-items: center;
        padding-top: 0;
    }
}
.impact-badge {
    display: inline-block;
    border: 1.5px solid #9ca3af;
    color: #6b7280;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 4px 12px;
    border-radius: 999px;
}
.testimonial-heading {
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 800;
    color: #0f1f48;
    line-height: 1.2;
    letter-spacing: -0.01em;
}
/* ─── Center Area: Card + Arrows ─── */
.card-arrows-area {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
}
@media (max-width: 1024px) {
    .card-arrows-area {
        flex-direction: column;
        gap: 32px;
    }
}
/* Navigation arrows */
.nav-arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1C56DB;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 16px rgba(28, 86, 219, 0.4);
    transition: background 0.2s, transform 0.2s;
    z-index: 10;
}
.nav-arrow:hover {
    background: #1548c0;
    transform: scale(1.08);
}
/* Portrait card */
.portrait-card {
    width: 500px;
    min-height: 500px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background: linear-gradient(135deg, #d4e2f0 0%, #c8d9ec 40%, #bdd1e8 100%);
}
@media (max-width: 600px) {
    .portrait-card {
        width: 100%;
        min-height: auto;
        aspect-ratio: 1;
    }
}
/* Background shield sphere */
.portrait-bg-shield {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}
.portrait-bg-img {
height: 100%;
}
/* Top-left photo */
.portrait-photo-wrap {
    position: absolute;
    top: 13px;
    left: 11px;
    width: 280px;
    height: 350px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
    z-index: 2;
}
.portrait-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
}
/* Shield badge (alone on left) */
.portrait-shield-badge {
    position: absolute;
    bottom: 32px;
    left: 32px;
    width: 36px;
    height: 36px;
    background: #1C56DB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    z-index: 2;
}
/* Name + role box (on right, without icon) */
.portrait-name-box {
    position: absolute;
    bottom: 32px;
    right: 32px;
    background: #D6E0F4;
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    z-index: 2;
}
.portrait-name {
    font-size: 14px;
    font-weight: 700;
    color: #0f1f48;
    line-height: 1.2;
}
.portrait-role {
    font-size: 12px;
    color: #6b7280;
}
/* ─── RIGHT: Top Right (Watch) + Bottom Right (Quote) ─── */
.testimonial-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-width: 280px;
    padding-top: 20px;
}
@media (max-width: 1024px) {
    .testimonial-right {
        align-items: center;
        text-align: center;
        justify-content: center;
        padding-top: 0;
        gap: 24px;
    }
}
.watch-top-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
}
@media (max-width: 1024px) {
    .watch-top-right {
        align-items: center;
    }
}
/* "90S" + "Watch The 90 Sec Story" */
.watch-story-row {
    display: flex;
    align-items: center;
    gap: 10px;
}
.watch-90s {
    font-size: 52px;
    font-weight: 800;
    color: #1C56DB;
    line-height: 1;
    letter-spacing: -0.02em;
}
.watch-label {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    line-height: 1.4;
}
.watch-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #0f1f48;
    text-decoration: underline;
    text-underline-offset: 3px;
    letter-spacing: 0.04em;
    transition: color 0.2s;
}
.watch-link:hover {
    color: #1C56DB;
}
.testimonial-quote {
    font-size: 15px;
    color: #869abb;
    line-height: 1.75;
    font-style: italic;
    max-width: 360px;
    margin-top: 0;
    text-align: right;
}
.testimonial-quote :deep(strong) {
    color: #061D33;
}
@media (max-width: 1024px) {
    .testimonial-quote {
        text-align: center;
    }
}
</style>
