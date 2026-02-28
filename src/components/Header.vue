<template>
    <header class="w-full absolute top-0 left-0 z-50 py-6 px-6 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="max-w-[1440px] mx-auto flex items-center justify-between">

            <a href="#" class="flex items-center gap-2 group" aria-label="Nuvica Home">
                <div class="relative w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="#0F2A43" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5FF98F" stroke-width="4"
                            stroke-linecap="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                </div>
                <span class="text-[26px] font-bold text-[#0F2A43] tracking-tight leading-none">Nuvica</span>
            </a>

            <nav class="hidden lg:flex items-center gap-10">
                <a href="#"
                    class="text-white font-semibold text-[15px] relative py-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white">Home</a>
                <a href="#"
                    class="text-[#0F2A43]/70 font-medium text-[15px] hover:text-[#0F2A43] transition-colors">About</a>
                <div
                    class="group cursor-pointer flex items-center gap-1 text-[#0F2A43]/70 font-medium text-[15px] hover:text-[#0F2A43] transition-colors">
                    <span>Departments</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        class="mt-0.5 opacity-60">
                        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <a href="#"
                    class="text-[#0F2A43]/70 font-medium text-[15px] hover:text-[#0F2A43] transition-colors">Doctors</a>
                <a href="#"
                    class="text-[#0F2A43]/70 font-medium text-[15px] hover:text-[#0F2A43] transition-colors">Career</a>
            </nav>

            <div class="hidden lg:block">
                <a href="#"
                    class="flex items-center bg-white rounded-full p-1.5 pl-7 gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <span class="text-[15px] font-bold text-[#0F2A43]">Contact Us</span>
                    <div
                        class="bg-[#5FF98F] w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F2A43" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </a>
            </div>

        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
    { label: 'Home', href: '#', active: true, hasDropdown: false },
    { label: 'About', href: '#', active: false, hasDropdown: false },
    { label: 'Departments', href: '#', active: false, hasDropdown: true },
    { label: 'Doctors', href: '#', active: false, hasDropdown: false },
    { label: 'Career', href: '#', active: false, hasDropdown: false },
];

const handleScroll = () => { scrolled.value = window.scrollY > 20; };

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
