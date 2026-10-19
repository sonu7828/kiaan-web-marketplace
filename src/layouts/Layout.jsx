import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { BackgroundEffects } from '../components/BackgroundEffects'

import { GoogleTagManager } from '@next/third-parties/google';

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen relative bg-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none animated-grid opacity-20"></div>
            <div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-5 mix-blend-overlay"></div>
            <BackgroundEffects />

            <Navbar />

            {/* Main Content */}
            <main className="flex-grow relative z-10 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
