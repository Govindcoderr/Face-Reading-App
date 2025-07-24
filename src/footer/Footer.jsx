import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-xl font-semibold items-center">FaceScope</h1>
                    <p className="  text-sm text-gray-400">© 2025 FaceScope. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer