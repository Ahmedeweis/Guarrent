<template>
    <!--
    Reference: horizontal scrolling row of outlined pill chips
    "Low Cost | Fast Response | Visible Patrols | 24/7 Patrols …"
    White bg, infinite marquee feel
  -->
    <div class="w-full bg-white border-t border-b border-gray-100 overflow-hidden py-0">
        <div class="relative">
            <!-- Gradient fade edges -->
            <div
                class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none">
            </div>
            <div
                class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none">
            </div>

            <!-- Scrolling track (doubles the list for seamless loop) -->
            <div class="ticker-track flex items-center gap-3 py-3">
                <template v-for="n in 2" :key="n">
                    <div v-for="(label, i) in chips" :key="`${n}-${i}`"
                        class="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-gray-600 text-[12.5px] font-medium whitespace-nowrap hover:border-blue-400 hover:text-blue-600 transition-colors duration-200 cursor-default">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#1C56DB] opacity-70"></span>
                        {{ label }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const chips = [
    'Low Cost',
    'Fast Response',
    'Visible Patrols',
    '24/7 Patrols',
    'Family Safe',
    'Low Cost',
    'Strong Deterrence',
    'Expert Guards',
    'Real-Time Updates',
]
</script>

<style scoped>
.ticker-track {
    /* Infinite marquee animation */
    animation: ticker 30s linear infinite;
    width: max-content;
}

.ticker-track:hover {
    animation-play-state: paused;
}

@keyframes ticker {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>
