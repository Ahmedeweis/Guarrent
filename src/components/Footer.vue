<template>
    <!-- ═══════════════════════════════════════════════════════
       FOOTER
       Top: 4-col (logo+desc+social | About | Services | Contact)
       Bottom bar: copyright + emergency hotline
       ═══════════════════════════════════════════════════════ -->
    <footer class="footer">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <!-- ── Top 4-column grid ── -->
            <div class="footer-top">

                <!-- Col 1: Brand -->
                <div class="footer-brand">

                    <!-- Logo -->
                    <div class="footer-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                        <span>GUARRENT</span>
                    </div>

                    <!-- Brand description -->
                    <p class="footer-desc">
                        Sydney's most trusted nightly patrol security
                        service, protecting homes and businesses
                        across sydney since 2016.
                    </p>

                    <!-- Social icons -->
                    <div class="social-row">
                        <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" class="social-icon">
                            <component :is="s.icon" class="w-4 h-4 text-white" />
                        </a>
                    </div>

                </div>

                <!-- Col 2: About -->
                <div class="footer-col">
                    <h4 class="footer-col-title">About</h4>
                    <nav class="footer-links">
                        <a href="#about" class="footer-link">Who We Are</a>
                        <a href="#team" class="footer-link">Our Team</a>
                        <a href="#careers" class="footer-link">Careers</a>
                        <a href="#testimonials" class="footer-link">Testimonials</a>
                    </nav>
                </div>

                <!-- Col 3: Services -->
                <div class="footer-col">
                    <h4 class="footer-col-title">Services</h4>
                    <nav class="footer-links">
                        <a href="#services" class="footer-link">Nightly Petrol</a>
                        <a href="#services" class="footer-link">CCTV Monitoring</a>
                        <a href="#services" class="footer-link">Alarm Response</a>
                        <a href="#services" class="footer-link">Emergency Dispatch</a>
                    </nav>
                </div>

                <!-- Col 4: Contact -->
                <div class="footer-col">
                    <h4 class="footer-col-title">Contact</h4>
                    <nav class="footer-links">
                        <a href="#contact" class="footer-link">Coverage Areas</a>
                        <a href="#contact" class="footer-link">Get A Quota</a>
                        <a href="#privacy" class="footer-link">Privacy Policy</a>
                        <a href="#terms" class="footer-link">Terms And Conditions</a>
                    </nav>
                </div>

            </div>

            <!-- ── Divider ── -->
            <div class="footer-divider"></div>

            <!-- ── Bottom bar ── -->
            <div class="footer-bottom">
                <div>
                    <p class="footer-copy">© 2025 Guarrent Security. All Rights Reserved.</p>
                    <p class="footer-license">NSW Security License #123456789</p>
                </div>
                <p class="footer-hotline">
                    <span class="hotline-label">Emergency Hotline:</span>
                    1800-SECURE (24/7)
                </p>
            </div>

        </div>
    </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// Tiny SVG icon factory
const icon = (paths) => defineComponent({
    render: () => h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'currentColor',
        viewBox: '0 0 24 24',
    }, paths)
})

// Facebook
const FacebookIcon = icon([h('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })])

// Twitter / X
const TwitterIcon = icon([h('path', { d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' })])

// Instagram
const InstagramIcon = icon([
    h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }),
    h('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
    h('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' }),
])

// LinkedIn
const LinkedInIcon = icon([
    h('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
    h('rect', { x: '2', y: '9', width: '4', height: '12' }),
    h('circle', { cx: '4', cy: '4', r: '2' }),
])

const socials = [
    { label: 'Facebook', href: '#', icon: FacebookIcon },
    { label: 'Twitter', href: '#', icon: TwitterIcon },
    { label: 'Instagram', href: '#', icon: InstagramIcon },
    { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
]
</script>

<style scoped>
/* ── Footer bg ── */
.footer {
    background: #0a1428;
    padding-top: 56px;
    padding-bottom: 0;
}

/* ── Top 4-col grid ── */
.footer-top {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 48px;
}

@media (max-width: 900px) {
    .footer-top {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
}

@media (max-width: 560px) {
    .footer-top {
        grid-template-columns: 1fr;
    }
}

/* ── Brand col ── */
.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.04em;
}

.footer-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.7;
    max-width: 280px;
}

/* Social icons */
.social-row {
    display: flex;
    gap: 10px;
    margin-top: 4px;
}

.social-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #1C56DB;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.2s;
    text-decoration: none;
}

.social-icon:hover {
    background: #1548c0;
    transform: translateY(-2px);
}

/* ── Nav columns ── */
.footer-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-col-title {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 2px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-link {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    text-decoration: none;
    transition: color 0.2s;
}

.footer-link:hover {
    color: rgba(255, 255, 255, 0.85);
}

/* ── Divider ── */
.footer-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
}

/* ── Bottom bar ── */
.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0 20px;
    flex-wrap: wrap;
    gap: 10px;
}

.footer-copy {
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.45);
}

.footer-license {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    margin-top: 2px;
}

.footer-hotline {
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
}

.hotline-label {
    color: #4d90fe;
    margin-right: 4px;
}
</style>
