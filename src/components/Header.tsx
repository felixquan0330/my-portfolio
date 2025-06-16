export default function Header() {
    return (
        <header className="fixed top-0 left-0 h-screen w-72 bg-gray-900 flex flex-col items-center shadow-lg overflow-y-auto z-30">
            <div className="mt-8 mb-4 flex flex-col items-center">
                <img src="assets/img/my-profile-img.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-gray-700 object-cover" />
                <h1 className="mt-4 text-2xl font-bold text-white">Felix Quan</h1>
            </div>
            <div className="flex flex-row justify-center gap-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="bi bi-skype"></i></a>
                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="bi bi-linkedin"></i></a>
            </div>
            <nav className="w-full px-4">
                <ul className="flex flex-col gap-2">
                    <li>
                        <a href="#hero" className="flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-gray-800 font-medium hover:bg-gray-700 transition"><i className="bi bi-house navicon"></i>Home</a>
                    </li>
                    <li>
                        <a href="#about" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"><i className="bi bi-person navicon"></i> About</a>
                    </li>
                    <li>
                        <a href="#resume" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"><i className="bi bi-file-earmark-text navicon"></i> Resume</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"><i className="bi bi-images navicon"></i> Portfolio</a>
                    </li>
                    <li>
                        <a href="#services" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"><i className="bi bi-hdd-stack navicon"></i> Services</a>
                    </li>
                    <li>
                        <a href="#contact" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"><i className="bi bi-envelope navicon"></i> Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}