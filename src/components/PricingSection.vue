<template>
    <!-- ═══════════════════════════════════════════════════════
       PRICING SECTION
       3 cards: Basic $199 | Standard $349 (Popular) | Premium $499
       ═══════════════════════════════════════════════════════ -->
    <section id="pricing" class="pricing-section py-16 lg:py-24">
        <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

            <!-- ── Heading ── -->
            <div class="text-center mb-12">
                <h2 class="pricing-heading">Choose Your Security Plan</h2>
            </div>

            <!-- ── Cards grid ── -->
            <div class="pricing-grid">

                <div v-for="plan in plans" :key="plan.name" class="pricing-card"
                    :class="{ 'pricing-card--popular': plan.popular }">
                    <!-- "Most Popular" badge — only on center card -->
                    <div v-if="plan.popular" class="popular-badge">
                        <!-- Flame icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.17 6.04-1.67 1.82-1.69 2.4-4.2 1.63-6.5l-.13-.35c-.07-.29-.2-.57-.84-1.2z" />
                        </svg>
                        Most Popular
                    </div>

                    <!-- Plan name -->
                    <h3 class="plan-name" :class="plan.popular ? 'plan-name--lg' : ''">
                        {{ plan.name }}
                    </h3>

                    <!-- Price -->
                    <div class="plan-price-row">
                        <span class="plan-currency">$</span>
                        <span class="plan-amount">{{ plan.price }}</span>
                        <span class="plan-freq">/month</span>
                    </div>

                    <!-- Minimum term -->
                    <p class="plan-term">minimum 6 months</p>

                    <!-- Features list -->
                    <ul class="plan-features">
                        <li v-for="feat in plan.features" :key="feat" class="plan-feat-row">
                            <!-- Checkmark circle -->
                            <span class="feat-check">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                            <span class="feat-text">{{ feat }}</span>
                        </li>
                    </ul>

                    <!-- CTA button -->
                    <a href="#contact" class="plan-btn" :class="plan.popular ? 'plan-btn--solid' : 'plan-btn--outline'">
                        Choose Plan
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const plans = [
    {
        name: 'Basic Plan',
        price: '199',
        popular: false,
        features: [
            '1 patrol visit every night',
            'photo report',
            'email notifications',
            'basic support',
        ],
    },
    {
        name: 'Standard Plan',
        price: '349',
        popular: true,
        features: [
            '2–3 patrol visits nightly',
            'lock & perimeter check',
            'rapid response',
            'sms & email alerts',
            'priority support',
        ],
    },
    {
        name: 'Premium Plan',
        price: '499',
        popular: false,
        features: [
            '4–6 nightly patrols',
            'cctv monitoring',
            'full reporting dashboard',
            '24/7 dedicated support',
        ],
    },
]
</script>

<style scoped>
/* ── Section background ── */
.pricing-section {
    background: linear-gradient(155deg, #d6e5f4 0%, #e2edf8 40%, #edf4fb 100%);
}

/* ── Heading ── */
.pricing-heading {
    font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 700;
    color: #0f1f48;
    letter-spacing: -0.01em;
}

/* ── Cards grid: equal 3 columns ── */
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: center;
    /* center card elevated via padding/shadow */
}

@media (max-width: 900px) {
    .pricing-grid {
        grid-template-columns: 1fr;
        max-width: 440px;
        margin: 0 auto;
    }
}

/* ── Base card ── */
.pricing-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 36px 28px 32px;
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.pricing-card:hover {
    box-shadow: 0 8px 40px rgba(28, 86, 219, 0.14);
    transform: translateY(-4px);
}

/* Popular (center) card: taller feel via extra padding + stronger shadow */
.pricing-card--popular {
    padding: 48px 28px 40px;
    box-shadow: 0 10px 50px rgba(28, 86, 219, 0.18);
    z-index: 2;
}

.pricing-card--popular:hover {
    box-shadow: 0 16px 60px rgba(28, 86, 219, 0.28);
}

/* ── "Most Popular" badge ── */
.popular-badge {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(28, 86, 219, 0.08);
    border: 1px solid rgba(28, 86, 219, 0.2);
    color: #1C56DB;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 14px;
    border-radius: 999px;
    white-space: nowrap;
}

/* ── Plan name ── */
.plan-name {
    font-size: 22px;
    font-weight: 700;
    color: #0f1f48;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 10px;
}

.plan-name--lg {
    font-size: 26px;
}

/* ── Price row ── */
.plan-price-row {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 2px;
    margin-bottom: 4px;
}

.plan-currency {
    font-size: 24px;
    font-weight: 700;
    color: #1C56DB;
    line-height: 1;
}

.plan-amount {
    font-size: clamp(48px, 6vw, 60px);
    font-weight: 800;
    color: #1C56DB;
    line-height: 1;
    letter-spacing: -0.02em;
}

.plan-freq {
    font-size: 14px;
    font-weight: 500;
    color: #1C56DB;
    margin-left: 2px;
}

/* ── Minimum term ── */
.plan-term {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 20px;
}

/* ── Feature list ── */
.plan-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.plan-feat-row {
    display: flex;
    align-items: center;
    gap: 10px;
}

.feat-check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #1C56DB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.feat-text {
    font-size: 13.5px;
    color: #374151;
}

/* ── CTA buttons ── */
.plan-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 24px;
    border-radius: 999px;
    text-decoration: none;
    transition: all 0.2s ease;
    align-self: stretch;
    text-align: center;
}

/* Solid blue — used on popular card */
.plan-btn--solid {
    background: #1C56DB;
    color: #ffffff;
    box-shadow: 0 6px 20px rgba(28, 86, 219, 0.4);
}

.plan-btn--solid:hover {
    background: #1548c0;
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(28, 86, 219, 0.5);
}

/* Outline blue — used on basic and premium cards */
.plan-btn--outline {
    background: transparent;
    color: #1C56DB;
    border: 2px solid #1C56DB;
}

.plan-btn--outline:hover {
    background: #1C56DB;
    color: #ffffff;
    transform: translateY(-1px);
}
</style>
