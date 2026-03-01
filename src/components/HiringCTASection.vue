<template>
    <!-- ═══════════════════════════════════════════════════════
       TESTIMONIALS SECTION — "What Sydney Residents Say"
       Left: label + heading | Center: portrait card + nav arrows | Right: 90s story + quote
       ═══════════════════════════════════════════════════════ -->
    <section class="testimonial-section py-16 lg:py-24">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <div class="testimonial-grid">

                <!-- ═══════════════════════════════════
             LEFT: IMPACT label + heading
             ═══════════════════════════════════ -->
                <div class="testimonial-left">
                    <span class="impact-badge">IMPACT</span>
                    <h2 class="testimonial-heading">
                        What Sydney<br />
                        Residents Say
                    </h2>
                </div>

                <!-- ═══════════════════════════════════
             CENTER: Portrait card + nav arrows
             ═══════════════════════════════════ -->
                <div class="card-area">

                    <!-- Left arrow -->
                    <button class="nav-arrow" aria-label="Previous testimonial" @click="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <!-- Portrait card -->
                    <div class="portrait-card">
                        <!-- Top half: photo -->
                        <div class="portrait-photo-wrap">
                            <img :src="current.photo" :alt="current.name" class="portrait-photo" loading="lazy" />
                        </div>

                        <!-- Bottom half: decorative shield gradient bg -->
                        <div class="portrait-shield-bg">
                            <!-- Glass shield shape (CSS only) -->
                            <div class="shield-shape"></div>
                        </div>

                        <!-- Bottom info bar -->
                        <div class="portrait-footer">
                            <!-- Guarrent shield icon -->
                            <div class="portrait-shield-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                            </div>
                            <!-- Name + role -->
                            <div class="portrait-name-block">
                                <span class="portrait-name">{{ current.name }}</span>
                                <span class="portrait-role">{{ current.role }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right arrow -->
                    <button class="nav-arrow" aria-label="Next testimonial" @click="next">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                </div>

                <!-- ═══════════════════════════════════
             RIGHT: 90s watch story + quote
             ═══════════════════════════════════ -->
                <div class="testimonial-right">

                    <!-- Watch story tag -->
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

                    <!-- Testimonial quote -->
                    <p class="testimonial-quote" v-html="current.quote"></p>

                </div>

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
        role: 'a singler mother',
        quote: '"as a single mother, i felt <strong>helpless</strong> after two break-ins. now, every night i get a <strong>message</strong> when my officer is on the way. the difference... is everything."',
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
/* ── Section: white bg ── */
.testimonial-section {
    background: #ffffff;
}

/* ── 3-column grid: left narrow | center wide | right narrow ── */
.testimonial-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 40px;
    align-items: center;
}

@media (max-width: 900px) {
    .testimonial-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

/* ─── LEFT ─── */
.testimonial-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
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

/* ─── CENTER: card + arrows ─── */
.card-area {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
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
}

.nav-arrow:hover {
    background: #1548c0;
    transform: scale(1.08);
}

/* Portrait card */
.portrait-card {
    width: 240px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.1);
    position: relative;
    flex-shrink: 0;
}

/* Top: photo */
.portrait-photo-wrap {
    height: 280px;
    overflow: hidden;
    background: #dde8f4;
}

.portrait-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.4s ease;
}

.portrait-card:hover .portrait-photo {
    transform: scale(1.03);
}

/* Bottom: shield gradient bg */
.portrait-shield-bg {
    height: 160px;
    background: linear-gradient(160deg, #bbd0f0 0%, #c8d8f8 30%, #d8e4ff 60%, #e8ddff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

/* CSS shield shape */
.shield-shape {
    width: 110px;
    height: 130px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(200, 220, 255, 0.3) 100%);
    clip-path: polygon(50% 0%, 100% 16%, 100% 62%, 50% 100%, 0% 62%, 0% 16%);
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
}

/* Footer bar */
.portrait-footer {
    position: absolute;
    bottom: 14px;
    right: 14px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.portrait-shield-badge {
    width: 28px;
    height: 28px;
    background: #1C56DB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.portrait-name-block {
    display: flex;
    flex-direction: column;
}

.portrait-name {
    font-size: 12px;
    font-weight: 700;
    color: #0f1f48;
    line-height: 1.2;
}

.portrait-role {
    font-size: 10px;
    color: #6b7280;
}

/* ─── RIGHT ─── */
.testimonial-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
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
    font-size: 14px;
    color: #374151;
    line-height: 1.75;
    font-style: italic;
    max-width: 300px;
    margin-top: 8px;
}
</style>
