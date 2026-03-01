import { createI18n } from 'vue-i18n'

// Static English messages — no external JSON files required
const en = {
    nav: {
        home: 'Home', projects: 'Projects', faq: 'FAQ',
        blog: 'Blog', process: 'Methodology', login: 'Login', signup: 'Contact'
    },
    hero: {
        brand: 'GUARRENT', tagline: 'Affordable Home Security', cta: 'Pre-Subscribe Now',
        description: 'Professional security guards protecting your family and home.',
        floating_card: { members: 'Users', rating: 'Rating', quote: 'Affordable Protection' }
    },
    about: {
        subtitle: 'ABOUT US', main_title: 'Protecting What Matters Most',
        description: 'We provide professional security services built around your needs.',
        experience_years: '10+', experience_text: 'Years Experience', cta: 'Learn More',
        about_points: {
            1: 'Strategic Planning', 2: 'Operational Excellence', 3: 'Digital Transformation',
            4: 'Capacity Building', 5: 'Financial Sustainability', 6: 'Impact Measurement'
        }
    },
    mission: { title: 'Mission', description: 'To provide affordable, reliable security solutions.' },
    vision: { title: 'Vision', description: 'A world where every home and family feels safe.' },
    strategy: { title: 'Strategy', description: 'Smart deployment, real-time monitoring, and rapid response.' },
    tech: { title: 'Technology', description: 'Cutting-edge tools for modern security management.' },
    admin: { title: 'Administration', description: 'Seamless coordination between guards and clients.' },
    choose_us: {
        title: '3 Reasons To Choose Us',
        card_1: { title: 'Expert Guards', desc: 'Highly trained and licensed security professionals.', cta: 'Read More' },
        card_2: { title: 'Affordable Pricing', desc: 'Premium protection at prices that fit any budget.', cta: 'Read More' },
        card_3: { title: 'Real-Time Updates', desc: 'Live tracking and instant incident notifications.', cta: 'Read More' },
    },
    products: {
        jadara: { title: 'Guard Management', desc: 'Deploy and manage guards effortlessly.', link: 'Visit Platform' },
        webian: { title: 'Client Portal', desc: 'Your security dashboard in the palm of your hand.', link: 'Visit Platform' },
        jazeel: { title: 'Incident Reporting', desc: 'Instant alerts and detailed incident logs.', link: 'Visit Platform' },
    },
    portfolio: { title: 'Trusted By Clients', subtitle: 'Our Partners', tagline: 'Leading brands trust Guarrent.' },
    why_us: {
        title: 'Why Guarrent?',
        p1_title: 'Development Partnerships', p1_desc: 'Broad partnership horizons and access.',
        p2_title: 'Funding and Support', p2_desc: 'Greater ability to attract support and community.',
        p3_title: 'Sustainable Impact', p3_desc: 'Achieving real, measurable community impact.',
    },
    pricing: {
        title: 'Pricing Plans', subtitle: 'Simple, Transparent Pricing',
        tagline: 'Choose the plan that fits your security needs',
        toggle_monthly: 'Monthly', toggle_annual: 'Annual', save_badge: 'Save 20%',
        plan_1_name: 'Starter', plan_1_price_monthly: '$99', plan_1_price_annual: '$79',
        plan_1_period: '/month', plan_1_desc: 'For small households',
        plan_1_f1: '1 Guard Profile', plan_1_f2: 'GPS Tracking', plan_1_f3: 'Incident Reports',
        plan_1_f4: 'Email Support', plan_1_f5: 'Basic Analytics', plan_1_cta: 'Get Started',
        plan_2_name: 'Professional', plan_2_price_monthly: '$249', plan_2_price_annual: '$199',
        plan_2_period: '/month', plan_2_desc: 'For growing families & estates',
        plan_2_badge: 'Most Popular',
        plan_2_f1: 'Up to 5 Guards', plan_2_f2: 'Real-time GPS', plan_2_f3: 'Advanced Reports',
        plan_2_f4: 'Priority Support', plan_2_f5: 'Full Analytics', plan_2_f6: 'Client Portal',
        plan_2_cta: 'Start Free Trial',
        plan_3_name: 'Enterprise', plan_3_price_monthly: '$499', plan_3_price_annual: '$399',
        plan_3_period: '/month', plan_3_desc: 'For large properties & businesses',
        plan_3_f1: 'Unlimited Guards', plan_3_f2: 'Live GPS', plan_3_f3: 'Custom Workflows',
        plan_3_f4: 'Account Manager', plan_3_f5: 'Custom Reports', plan_3_f6: 'API Access',
        plan_3_f7: 'On-site Training', plan_3_cta: 'Contact Sales',
    },
    contact: {
        title: 'Contact Us', subtitle: 'Book Your Security Consultation',
        tagline: 'Fill in the form and we\'ll respond within 24 hours.',
        name: 'Full Name', email: 'Email Address', phone: 'Phone Number',
        service: 'Service Needed', service_placeholder: 'Select a service',
        service_opt1: 'Home Security', service_opt2: 'Event Security',
        service_opt3: 'Corporate Security', service_opt4: 'Security Consulting',
        message: 'Your Message', message_placeholder: 'Tell us about your security needs...',
        submit: 'Send Message', success: 'Message sent! We\'ll be in touch soon.',
        error: 'Something went wrong. Please try again.',
        phone_contact: '+966 11 234 5678', email_contact: 'info@guarrent.com',
        address: 'Riyadh, Saudi Arabia',
    },
    faq: {
        title: 'FAQ', subtitle: 'Have a Question?',
        q1: 'How do I get a security guard?',
        a1: 'Simply contact us via the form or phone and we\'ll arrange a consultation within 24 hours.',
        q2: 'How much does home security cost?',
        a2: 'Our plans start from $99/month. We offer flexible packages tailored to your specific needs.',
        q3: 'Are your guards licensed and trained?',
        a3: 'Yes, all our guards are fully licensed, background-checked, and trained to the highest standards.',
    },
    footer: {
        description: 'Guarrent — professional security for families and businesses. Available 24/7.',
        follow_us: 'Follow Us', pages: 'Pages', contact_info: 'Contact Info',
        phone_label: 'Phone', email_label: 'Email',
        link_home: 'Home', link_services: 'Services', link_contact: 'Contact Us',
        rights: 'All rights reserved — Guarrent Security Services',
    },
    projects_page: {
        label: 'Success Stories', stat1_label: 'Projects Delivered', stat2_label: 'Satisfied Clients',
        stat3_label: 'Specialized Sectors',
        cta_title: 'Hire Expert Guards — Done Right, Every Time.',
        cta_subtitle: 'Your free first consultation is the start of your journey.',
        cta_btn: 'Book Your Free Consultation', cta_learn_more: 'Learn More About Us',
        trust_1: 'Free First Consultation', trust_2: 'Team of Certified Guards',
        trust_3: 'Measured & Documented Results',
    },
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
})

export default i18n
