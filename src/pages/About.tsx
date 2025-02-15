import React from "react";
// import cap from "../images/cap.jpg"
import small from "../images/smallHair_c.jpg"
// import profile from "../images/profile.jpg"

const About: React.FC = () => {
    return (
        <section id="about" className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Left Side: Description */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-5xl font-extrabold text-green-400 mb-3">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Hello! I'm <span className="font-semibold text-green-300">Anurag Kumar</span>,
                        a <span className="font-semibold text-green-300">passionate Full-Stack Developer </span>
                        with a strong foundation in <span className="text-green-300">React, TypeScript, Tailwind CSS, Node.js, Java, C, HTML, CSS, and JavaScript</span>.
                        I thrive on building scalable, efficient, and user-friendly web applications,
                        turning ideas into reality with clean, maintainable code.
                    </p>

                    <h3 className="text-2xl font-semibold text-green-400 mt-6">
                        💡 My Philosophy
                    </h3>
                    <p className="mt-2 text-gray-400">
                        I believe that technology is a powerful tool for change,
                        and I am committed to making a positive impact through innovative digital solutions.
                        Every line of code I write is a step toward building something <span className="text-white">meaningful and transformative</span>.
                    </p>

                    <h3 className="text-2xl font-semibold text-green-400 mt-6">
                        🔥 What Drives Me?
                    </h3>
                    <ul className="mt-2 space-y-2 text-gray-300">
                        <li>✔ <span className="text-green-300 font-medium">Continuous Learning:</span> Always exploring new frameworks & tools.</li>
                        <li>✔ <span className="text-green-300 font-medium">Problem-Solving Mindset:</span> Breaking down complex challenges efficiently.</li>
                        <li>✔ <span className="text-green-300 font-medium">Freelancing & Entrepreneurship:</span> Helping businesses build powerful applications.</li>
                        <li>✔ <span className="text-green-300 font-medium">Collaboration & Innovation:</span> Building creative & impactful products.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-green-400 mt-6">
                        🎯 My Vision
                    </h3>
                    <p className="mt-2 text-gray-400">
                        I aspire to leave a mark in the tech industry by contributing to groundbreaking projects that revolutionize the way people interact with technology. Whether it's <span className="text-orange-300">developing cutting-edge applications, contributing to open-source projects,</span> or <span className="text-orange-300">helping startups grow</span>, I am always excited to take on new challenges.
                    </p>
                    <p className=" text-gray-400">
                        I’m <span className="text-green-300 font-medium">open to exciting projects, freelancing opportunities, and collaborations.</span> If you're looking for someone who can bring passion, expertise, and innovation to your team or project, feel free to reach out! 🚀
                    </p>

                    {/* Contact Button */}
                    {/* <a
                        href="/contact"
                        className="inline-block mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-md 
                      hover:bg-green-800 transition duration-300 shadow-lg hover:shadow-green-500/50"
                    >
                        💬 Let's Connect!
                    </a> */}
                </div>

                {/* Right Side: Image */}
                <div className="items-center justify-center lg:w-1/2">
                    <div className="flex justify-center">
                        <img
                            src={small} // Replace this with your actual image path
                            alt="My Profile"
                            className="w-80 h-100 object-cover rounded-lg shadow-lg border-4 border-green-500 hover:scale-105 transition-transform duration-300"
                        />


                    </div>

                    <a
                        href="/contact"
                        className="inline-block mt-20 px-6 py-2 ml-61 bg-green-600 text-white font-semibold rounded-md 
                      hover:bg-green-800 transition duration-300 shadow-lg hover:shadow-green-500/50"
                    >
                        💬 Let's Connect!
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;
