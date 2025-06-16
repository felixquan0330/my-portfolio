export default function Footer() {
    return (
        <footer className="bg-blue-50 border-t border-blue-100 relative py-6 mt-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-gray-700 text-sm">© <span>Copyright</span> <strong className="px-1 font-semibold">iPortfolio</strong> <span>All Rights Reserved</span></p>
                    <div className="text-xs text-gray-500 mt-1">
                        Designed by <a href="https://bootstrapmade.com/" className="text-blue-500 hover:underline">BootstrapMade</a>
                    </div>
                </div>
            </div>
            {/* Floating Back to Top Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}