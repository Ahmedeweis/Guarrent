<template>
    <section class="features-section py-12 px-4 sm:px-6 lg:px-10">
        <div class="max-w-[1200px] mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 mb-4">
                <div class="licensed-card relative overflow-hidden rounded-2xl min-h-[360px] lg:min-h-[400px]">
                    <div class="absolute inset-0 licensed-bg"></div>
                    <div class="absolute top-8 left-8 z-10">
                        <h2 class="licensed-title">
                            FULLY LICENSED<br />
                            &amp; INSURED
                        </h2>
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center z-0">
                        <div class="shield-img-wrap">
                            <img src="@/assets/imgs/shield_sphere.png" alt="3D Security Shield" class="shield-img"
                                loading="lazy" />
                        </div>
                    </div>
                    <div class="absolute bottom-6 right-6 z-10">
                        <div class="nsw-badge">
                            <span class="nsw-label">NSW Security License</span>
                            <span class="nsw-number">#123456789</span>
                        </div>
                    </div>
                </div>
                <div class="alarm-card relative flex flex-col justify-between rounded-2xl p-6 min-h-[360px] lg:min-h-[400px]">
                    <div class="feature-icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-2 mt-auto bg-[#0D2443] p-4 rounded-2xl text-white text-left">
                        <h3 class="feature-card-title">
                            Alarm System<br />Integration
                        </h3>
<div class="flex justify-between ">
                            <p class="feature-card-desc">
                            patrol + alarm response combo.
                        </p>
                                                                  <div class="">
                        <button class="feature-arrow-btn" aria-label="Learn more about Alarm System Integration">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </button>
                    </div>
</div>
                    </div>
                </div>
            </div>
            <div
                class="rapid-card relative overflow-hidden rounded-2xl flex items-center min-h-[200px] lg:min-h-[220px] px-6 py-6">
                <div class="absolute top-6 left-6 z-10">
                    <div class="feature-icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                        </svg>
                    </div>
                </div>
                <div class="absolute inset-0 flex items-end justify-center z-0 pointer-events-none">
                    <img src="@/assets/imgs/hero_phone.png" alt="Security App on Phone" class="rapid-phone-img"
                        loading="lazy" />
                </div>
                <div class="absolute bottom-6 right-6 z-10 max-w-[320px]">
                    <h3 class="rapid-title">Rapid Incident Response</h3>
                    <div class="flex items-center justify-between gap-4 mt-3 ">
                        <p class="rapid-desc">emergency dispatch within minutes.</p>
                        <button class="feature-arrow-btn" aria-label="Learn more about Rapid Incident Response">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
.features-section {
}
.licensed-card {
    background: #dce7f3;
}
.licensed-bg {
    background: #C9D7E2;
    opacity: 0.8;
}
.licensed-title {
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2);
    font-style: normal;
}
.shield-img-wrap {
    position: relative;
    /* width: 80%; */
    /* max-width: 520px; */
    display: flex;
    align-items: center;
    justify-content: center;
}
.shield-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0 0 60px rgba(60, 100, 220, 0.5));
}
.nsw-badge {
    background: #E9EFF4;
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.nsw-label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    white-space: nowrap;
}
.nsw-number {
    font-size: 16px;
    font-weight: 700;
    color: #3F7EC8;
    white-space: nowrap;
}
.alarm-card {
    background:#0C1A31;
}
.rapid-card {
    background: #0d1b3e;
}
.rapid-phone-img {
    height: 260px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 -10px 40px rgba(28, 86, 219, 0.35));
}
.rapid-title {
    font-size: clamp(20px, 2.5vw, 28px);
    /* font-weight: 700; */
    color: #ffffff;
    line-height: 1.2;
}
.rapid-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.55);
    margin-top: 4px;
}
.feature-icon-circle {
    width: 40px;
    height: 40px;
    background: #1C56DB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    box-shadow: 0 0 0 8px #0D2443;
}
.feature-card-title {
    font-size: clamp(20px, 2.2vw, 26px);
    color: #ffffff;
    line-height: 1.25;
}
.feature-card-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.55);
}
.feature-arrow-btn {
    width: 36px;
    height: 36px;
    background: #1C56DB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: background 0.2s, transform 0.2s;
    flex-shrink: 0;
}
.feature-arrow-btn:hover {
    background: #1a4dcb;
    transform: scale(1.08);
}
</style>
