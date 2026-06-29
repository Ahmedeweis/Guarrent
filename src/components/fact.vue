<template>
    <!-- ═══════════════════════════════════════════════════════
       FACT SECTION
       Dark navy card with circular illustration at top + stat text
       ═══════════════════════════════════════════════════════ -->
    <section class="fact-section">
        <div class=" px-4 sm:px-6 lg:px-10">
            <!-- Outer: white background so the circle sits on white -->
            <div class="fact-outer">
                <!-- ── Floating circle with 3D building (sits above dark card) ── -->
                <div class="fact-illustration">
                    <img src="@/assets/imgs/fact_building.webp" alt="Secured building illustration"
                        class="fact-building-img" loading="lazy" />
                </div>
                <!-- ── Dark navy card (has cutout shape at top) ── -->
                <div class="fact-card">
                    <!-- Curved scallop cutout at top-center achieved with pseudo-element in CSS -->
                    <!-- Text content -->
                    <div class="fact-content">
                        <h2 class="fact-headline">
                            Every Night In Sydney <br />
                            190+ Homes Broken Into .
                        </h2>
                        <p class="fact-sub">
                            Theft &amp; Burglary:&nbsp;
                            <span class="fact-stat">Up 53% In 2025.</span>
                        </p>
                        <p class="fact-cta-txt">Don't Wait Until It's Your Home.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
// Static section — no reactive state needed
</script>
<style scoped>
/* ── Wrapper section ── */
.fact-section {
    background: #e8eef5;
    /* matches site light blue bg */
    padding: 40px 0 80px;
}
/* ── Outer container: white bg so illustration circle looks clean ── */
.fact-outer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* ── Illustration circle (floating above card) ── */
.fact-illustration {
    position: relative;
    z-index: 10;
    width: 260px;
    height: 260px;
    /* border-radius: 50%; */
    /* background: radial-gradient(circle at 50% 60%, #dce8fa 0%, #f0f6ff 60%, #ffffff 100%); */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -130px;
    /* pulls the card up so it overlaps the bottom half */
    flex-shrink: 0;
    /* box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06); */
}
.fact-building-img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    object-position: bottom center;
}
/* ── Dark navy card ── */
.fact-card {
    position: relative;
    width: 100%;
    background: #0C1A31;
    border-radius: 32px;
    /* The scallop cutout at top using a radial-gradient mask */
    -webkit-mask-image:
        radial-gradient(circle 135px at 50% 0%, transparent 133px, black 135px);
    mask-image:
        radial-gradient(circle 135px at 50% 0%, transparent 133px, black 135px);
    padding: 170px 24px 70px;
    overflow: hidden;
}
/* Blueprint grid texture inside the card */
.fact-card::before {
    content: '';
    position: absolute;
    inset: 0;
    /* background-image:
        linear-gradient(rgba(50, 100, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(50, 100, 255, 0.05) 1px, transparent 1px); */
    background-size: 40px 40px;
    pointer-events: none;
}
/* ── Text content ── */
.fact-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}
.fact-headline {
    font-size: clamp(24px, 4vw, 42px);
    /* font-weight: 700; */
    color: #ffffff;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-bottom: 14px;
}
.fact-sub {
    font-size: clamp(15px, 1.8vw, 18px);
    font-weight: 500;
    color: #8ba5cc;
    margin-bottom: 10px;
}
.fact-stat {
    color: #E04334;
    font-weight: 700;
}
.fact-cta-txt {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.01em;
}
</style>