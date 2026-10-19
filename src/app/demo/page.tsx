import DemoHero from '@/components/demo/DemoHero';
import DemoExplorerClient from '@/components/demo/DemoExplorerClient';
import CustomSoftwareCTA from '@/components/demo/CustomSoftwareCTA';

export default function DemoPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pb-0 font-sans selection:bg-[#FFE81B] selection:text-black">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-blue-950/15 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[25%] right-[-10%] w-[40%] h-[50%] bg-purple-950/15 blur-[140px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[15%] w-[50%] h-[35%] bg-amber-950/10 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      {/* 1. Hero & Stats (Single Row Layout) */}
      <DemoHero />

      {/* 2. Interactive Marketplace (Client Component: Sidebar + Search + Cards + Modals) */}
      <DemoExplorerClient />

      {/* 3. Bottom Custom Software CTA */}
      <CustomSoftwareCTA />
    </div>
  );
}
