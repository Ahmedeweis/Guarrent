<template>

    <section class="security-section py-20 lg:py-28">
        <div class="max-w-[700px] mx-auto px-4 sm:px-6 text-center">

            <!-- Alert icon circle -->
            <div class="alert-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>

            <!-- Headline -->
            <h2 class="security-heading">
                Need Urgent Security? We're<br class="hidden sm:block" />
                Always On Patrol.
            </h2>

            <!-- Subtitle -->
            <p class="security-sub">
                24/7 emergency response team ready to deploy to your<br class="hidden sm:block" />
                location within minutes.
            </p>

            <!-- CTA button -->
            <a href="tel:1800732873" class="security-btn">
                Call 24/7: 1800-SECURE
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>

            <!-- Footnote -->
            <p class="security-footnote">
                available 24 hours, 7 days a week. average response time: 3–5 minutes.
            </p>

        </div>
    </section>
</template>

<script setup>
// Static CTA section — no reactive state needed
</script>

<style scoped>
/* ── Section: deep navy ── */
.security-section {
    background: #0d1b3e;
}

/* ── Alert icon circle ── */
.alert-icon-wrap {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1.5px solid rgba(96, 165, 250, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 28px;
}

/* ── Headline ── */
.security-heading {
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.18;
    letter-spacing: -0.01em;
    margin-bottom: 18px;
}

/* ── Subtitle ── */
.security-sub {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.7;
    margin-bottom: 32px;
}

/* ── CTA button ── */
.security-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #1C56DB;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    padding: 14px 32px;
    border-radius: 999px;
    text-decoration: none;
    box-shadow: 0 6px 28px rgba(28, 86, 219, 0.45);
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    margin-bottom: 20px;
}

.security-btn:hover {
    background: #1548c0;
    transform: translateY(-2px);
    box-shadow: 0 10px 36px rgba(28, 86, 219, 0.6);
}

/* ── Footnote ── */
.security-footnote {
    font-size: 12px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.28);
    letter-spacing: 0.01em;
}
</style>
