<template>
    <!-- ═══════════════════════════════════════════════════════
       HIRING CTA SECTION — "Join Our Team"
       ═══════════════════════════════════════════════════════ -->
    <section class="hiring-cta-section py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
            <div class="hiring-cta-grid">
                <!-- Left: Image -->
                <div class="hiring-cta-image-wrap">
                    <img src="@/assets/imgs/about_guard.webp" alt="Security Guard" class="hiring-cta-image" loading="lazy" />
                </div>
                <!-- Right: Content -->
                <div class="hiring-cta-content">
                    <span class="hiring-badge">WE'RE HIRING</span>
                    <h2 class="hiring-heading">Join Our Team<br />Security Officers</h2>
                    <p class="hiring-desc">
                        Are you looking for a rewarding career in security? Join Guarrent is hiring professional security officers to protect Sydney's neighborhoods.
                    </p>
                    <ul class="hiring-benefits">
                        <li class="hiring-benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="hiring-benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            Competitive Pay
                        </li>
                        <li class="hiring-benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="hiring-benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            Flexible Hours
                        </li>
                        <li class="hiring-benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="hiring-benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            Training Provided
                        </li>
                    </ul>
                    <button class="hiring-apply-btn">Apply Now</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
// No reactive state needed for this static section
</script>
<style scoped>
.hiring-cta-section {
    background: #e8eef5;
}
.hiring-cta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
@media (max-width: 900px) {
    .hiring-cta-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
}
.hiring-cta-image-wrap {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.1);
}
.hiring-cta-image {
    width: 100%;
    height: auto;
    display: block;
}
.hiring-cta-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
}
@media (max-width: 900px) {
    .hiring-cta-content {
        align-items: center;
    }
}
.hiring-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(28, 86, 219, 0.1);
    color: #1C56DB;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(28, 86, 219, 0.2);
}
.hiring-heading {
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #0f1f48;
    line-height: 1.2;
}
.hiring-desc {
    font-size: 1rem;
    color: #374151;
    line-height: 1.7;
}
.hiring-benefits {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 0;
}
@media (max-width: 900px) {
    .hiring-benefits {
        align-items: center;
    }
}
.hiring-benefit {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    color: #0f1f48;
}
.hiring-benefit-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #1C56DB;
}
.hiring-apply-btn {
    margin-top: 0.5rem;
    padding: 0.875rem 2rem;
    background: #1C56DB;
    color: white;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 4px 16px rgba(28, 86, 219, 0.4);
}
.hiring-apply-btn:hover {
    background: #1548c0;
    transform: scale(1.02);
}
</style>
