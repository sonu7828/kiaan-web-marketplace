export default function Loading() {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-zinc-800 border-t-yellow-500 rounded-full animate-spin"></div>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest animate-pulse">Initializing Interface...</p>
            </div>
        </div>
    )
}
