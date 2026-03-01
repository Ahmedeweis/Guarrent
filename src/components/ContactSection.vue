<template>
    <!-- ═══════════════════════════════════════════════════════
       CONTACT SECTION — "Request A Nightly Patrol"
       Left: info + guarantee | Right: contact form
       ═══════════════════════════════════════════════════════ -->
    <section id="contact" class="contact-section py-16 lg:py-24">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <div class="contact-grid">

                <!-- ═══════════════════════════════════════════
             LEFT: heading, contact rows, guarantee box
             ═══════════════════════════════════════════ -->
                <div class="contact-left">

                    <h2 class="contact-heading">Request A Nightly Patrol</h2>
                    <p class="contact-subheading">
                        fill out the form and our team will get back to you within
                        24 hours to discuss your security needs.
                    </p>

                    <!-- Contact info rows -->
                    <div class="contact-info-list">

                        <div class="contact-info-row">
                            <div class="contact-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a15.905 15.905 0 0 0 6.02 6.02l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <p class="info-label">Phone</p>
                                <p class="info-value">1800-SECURE</p>
                                <p class="info-muted">Available 24/7</p>
                            </div>
                        </div>

                        <div class="contact-info-row">
                            <div class="contact-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div>
                                <p class="info-label">Email</p>
                                <p class="info-value">patrol@guarrentsecurity.com.au</p>
                            </div>
                        </div>

                        <div class="contact-info-row">
                            <div class="contact-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <p class="info-label">Coverage</p>
                                <p class="info-value">All Sydney Suburbs</p>
                            </div>
                        </div>

                    </div>

                    <!-- Quick Response Guarantee box -->
                    <div class="guarantee-box">
                        <p class="guarantee-title">Quick Response Guarantee</p>
                        <p class="guarantee-desc">
                            we respond to all inquiries within 24 hours and can have patrols set
                            up for your property within 48 hours of confirmation.
                        </p>
                    </div>

                    <!-- Owner attribution -->
                    <p class="owner-attr">owner – <span class="owner-name">hamida jannat</span></p>

                </div>

                <!-- ═══════════════════════════════════════════
             RIGHT: Contact form
             ═══════════════════════════════════════════ -->
                <div class="contact-form-panel">
                    <form @submit.prevent="submitForm" class="contact-form" novalidate>

                        <!-- Name -->
                        <div class="field-group">
                            <label class="field-label">Name*</label>
                            <input v-model="form.name" type="text" class="field-input" placeholder="your full name"
                                required />
                        </div>

                        <!-- Business/Property Name -->
                        <div class="field-group">
                            <label class="field-label">Business/Property Name*</label>
                            <input v-model="form.business" type="text" class="field-input" placeholder="optional" />
                        </div>

                        <!-- Suburb -->
                        <div class="field-group">
                            <label class="field-label">Suburb*</label>
                            <input v-model="form.suburb" type="text" class="field-input" placeholder="e.g parramanta"
                                required />
                        </div>

                        <!-- Phone + Email side by side -->
                        <div class="field-row">
                            <div class="field-group">
                                <label class="field-label">Phone*</label>
                                <input v-model="form.phone" type="tel" class="field-input" placeholder="0400 800 7000"
                                    required />
                            </div>
                            <div class="field-group">
                                <label class="field-label">Email*</label>
                                <input v-model="form.email" type="email" class="field-input"
                                    placeholder="info@email.com" required />
                            </div>
                        </div>

                        <!-- Message -->
                        <div class="field-group">
                            <label class="field-label">Message*</label>
                            <textarea v-model="form.message" class="field-input field-textarea"
                                placeholder="tell us about your security needs...." required rows="4"></textarea>
                        </div>

                        <!-- Submit -->
                        <button type="submit" class="submit-btn">
                            Submit Request
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    business: '',
    suburb: '',
    phone: '',
    email: '',
    message: '',
})

function submitForm() {
    // Form submission logic here
    console.log('Form submitted:', { ...form })
}
</script>

<style scoped>
/* ── Section: deep navy ── */
.contact-section {
    background: #0a1428;
}

/* ── 2-column grid ── */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 60px;
    align-items: start;
}

@media (max-width: 900px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

/* ─── LEFT COLUMN ─── */
.contact-left {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-heading {
    font-size: clamp(22px, 2.8vw, 32px);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

.contact-subheading {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    max-width: 400px;
}

/* Contact info rows */
.contact-info-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.contact-info-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
}

.contact-icon-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #1C56DB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(28, 86, 219, 0.4);
}

.info-label {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2px;
}

.info-value {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.65);
}

.info-muted {
    font-size: 11.5px;
    color: rgba(255, 255, 255, 0.35);
    margin-top: 1px;
}

/* Guarantee box */
.guarantee-box {
    border: 1.5px solid rgba(28, 86, 219, 0.5);
    background: rgba(28, 86, 219, 0.07);
    border-radius: 14px;
    padding: 16px 18px;
}

.guarantee-title {
    font-size: 14px;
    font-weight: 600;
    color: #4d90fe;
    margin-bottom: 6px;
}

.guarantee-desc {
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.7;
}

/* Owner */
.owner-attr {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
}

.owner-name {
    color: #4d90fe;
}

/* ─── RIGHT COLUMN: FORM PANEL ─── */
.contact-form-panel {
    background: #0d1b3e;
    border-radius: 20px;
    padding: 32px 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Field group */
.field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.field-label {
    font-size: 12.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
    letter-spacing: 0.01em;
}

.field-input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    width: 100%;
}

.field-input::placeholder {
    color: rgba(255, 255, 255, 0.25);
}

.field-input:focus {
    border-color: rgba(28, 86, 219, 0.7);
    background: rgba(28, 86, 219, 0.06);
}

.field-textarea {
    resize: vertical;
    min-height: 100px;
}

/* Phone + Email side by side */
.field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

@media (max-width: 480px) {
    .field-row {
        grid-template-columns: 1fr;
    }
}

/* Submit button */
.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #1C56DB;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-top: 4px;
    box-shadow: 0 6px 24px rgba(28, 86, 219, 0.45);
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.submit-btn:hover {
    background: #1548c0;
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(28, 86, 219, 0.6);
}

.submit-btn:active {
    transform: translateY(0);
}
</style>
