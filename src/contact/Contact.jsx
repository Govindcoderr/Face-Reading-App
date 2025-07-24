import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_v16essi',      // Replace with your service ID
            'template_su8teyf',     // Replace with your template ID
            form.current,
            'ySB8r_oC5Om5s07wP'       // Replace with your public key
        ).then(
            (result) => {
                console.log('Message sent:', result.text);
                alert("Message sent successfully!");
            },
            (error) => {
                console.log('Error:', error.text);
                alert("Failed to send message.");
            }
        );

        e.target.reset(); // Clear form
    };

    return (

        <div
            className="min-h-screen bg-gray-400 flex items-center justify-start px-10 py-12"
            style={{
                backgroundImage: `url('/contact_bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-xl w-full bg-whitew-full max-w-md mx-auto rounded-full shadow-lg p-4">
                <h2 className="text-3xl text-gray-100 font-bold mb-7">Contact Us</h2>

                <form  ref={form} onSubmit={sendEmail} className="space-y-5">
                    <div>
                        <label className="block text-gray-200">User name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border border-gray-100 rounded-lg text-white bg-white-900 placeholder-gray-400"
                            placeholder="Enter User name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-200">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-3 border border-gray-100 rounded-lg text-white bg-white-900 placeholder-gray-400"
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-200">Message</label>
                        <textarea
                            className="w-full mt-1 p-3 border border-gray-100 rounded-lg text-white bg-white-900 placeholder-gray-400"
                            placeholder="Enter message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            {/* 🔸 Image on the Right */}
            <div className="w-full md:w-1/2">
                <img
                    src="/contact.jpg"
                    alt="Contact"
                    className="w-full max-w-md mx-auto rounded-full shadow-lg"
                />
            </div>
        </div>

    )
}
