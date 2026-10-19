// Video Testimonials Data
// Replace the youtubeId values with your actual client video IDs.

export interface VideoTestimonial {
    id: string;
    name: string;
    company: string;
    designation: string;
    photo: string;
    youtubeId: string;
    duration: string;
    rating: number;
    review: string;
    tags: string[];
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
    {
        id: 'vt1',
        name: 'Rajesh Mehta',
        company: 'Study First Info',
        designation: 'Founder & CEO',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '2:45',
        rating: 5,
        review: 'Kiaan Technology transformed our entire enrollment pipeline. Their CRM solution cut our response time by 85% and increased student enrollments by 30%.',
        tags: ['CRM', 'EdTech', 'Automation']
    },
    {
        id: 'vt2',
        name: 'Dr. Ananya Sharma',
        company: 'HealthSakhi',
        designation: 'Chief Medical Officer',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '3:12',
        rating: 5,
        review: 'The AI-powered health assistant has reached over 100,000 rural users. Their ability to integrate vernacular language models with medical guardrails was extraordinary.',
        tags: ['AI', 'Healthcare', 'Rural Tech']
    },
    {
        id: 'vt3',
        name: 'Vikram Patel',
        company: 'PlayGroundX',
        designation: 'CTO & Co-Founder',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '2:58',
        rating: 5,
        review: 'From our payment gateway to our booking platform, Kiaan has been our go-to engineering partner. The PGX Gateway alone reduced checkout bounces by 22%.',
        tags: ['FinTech', 'Gateway', 'SaaS']
    },
    {
        id: 'vt4',
        name: 'Priya Nair',
        company: 'TurfBook Sports',
        designation: 'Head of Operations',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '2:20',
        rating: 4,
        review: 'We needed a SaaS platform that could handle multi-venue scheduling, dynamic pricing, and real-time availability — Kiaan delivered all three flawlessly.',
        tags: ['SaaS', 'Sports', 'Scheduling']
    },
    {
        id: 'vt5',
        name: 'Arjun Kapoor',
        company: 'NexGen Logistics',
        designation: 'Managing Director',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '3:30',
        rating: 5,
        review: 'Kiaan built our real-time fleet tracking and route optimization dashboard from scratch. Fuel costs are down 18% and on-time delivery rates jumped to 97%.',
        tags: ['Logistics', 'Tracking', 'Fleet']
    },
    {
        id: 'vt6',
        name: 'Sneha Desai',
        company: 'FinEdge Capital',
        designation: 'VP of Technology',
        photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual video ID
        duration: '2:55',
        rating: 5,
        review: 'Security and compliance were non-negotiable for our fintech platform. Kiaan delivered a PCI-DSS compliant architecture with end-to-end encryption, 2 weeks ahead of schedule.',
        tags: ['FinTech', 'Security', 'Compliance']
    },
];
