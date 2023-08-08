import { useState } from "react";
import image from "../../../assets/image.jpg"

const Features = () => {

    const [showVideo, setShowVideo] = useState(false)

    const featuresItems = [
        {
            label: "AI-Copilot",
            details: "Enhance your screenwriting experience with GPT-powered editing features and AI-generated imagery"
        },
        {
            label: "Offline-Capable",
            details: "Work on the go without having to rely on the cloud and an always-required internet connection"
        },
        {
            label: "Free",
            details: "Enjoy the NOLAN free version while also influencing the further development of the product."
        },
        {
            label: "Secure",
            details: "Don’t worry, your screenplay is secure and encrypted with Nola"
        },
    ]
    return (
        <section className="w-full bg-[#171D22] h-full">
            <div className="container mx-auto grid md:grid-cols-2 gap-y-4 md:gap-y-2 lg:gap-y-0 lg:grid-cols-4 md:gap-2 lg:gap-8 px-5 md:px-0 py-8 ">
                {
                    featuresItems.map(item => <div className="bg-[#202327] rounded-lg shadow-md px-4 py-6 relative -top-1/2" key={item.label}>
                        <div className="text-white text-center ">
                            <h3 className="text-3xl font-extrabold">{item.label}</h3>
                            <p>{item.details}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="grid md:grid-cols-2 px-5 md:px-0 lg:grid-cols-5 gap-6 text-white container mx-auto">
                <div className=" lg:col-span-3 space-y-7 text-center md:text-start">
                    <h2 className=" md:text-2xl lg:text-4xl">What is NOLAN</h2>
                    <h1 className="text-5xl lg:text-7xl font-bold">Lights, camera, action!</h1>
                    <p className="lg:text-xl">
                        NolanAI is the ultimate tool for any screenwriter looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
                    </p>
                    <button className="btn md:btn-lg bg-[#8b4040] border-none text-white opacity-100 hover:bg-opacity-80 hover:bg-[#8b4040]">Explore our premium plan</button>
                </div>
                <div className="lg:col-span-2">
                    {!showVideo ? <img onClick={() => setShowVideo(pre => !pre)} src={image} className="rounded-3xl w-full cursor-pointer" alt={image} /> :
                        <iframe className="rounded-3xl w-full" height="315" src="https://www.youtube.com/embed/p6P4EDHqAV4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                </div>
            </div>
        </section>
    );
};

export default Features;