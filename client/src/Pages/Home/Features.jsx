
const Features = () => {
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
        <div className="w-full bg-[#171D22] h-full">
            <div className="container mx-auto grid md:grid-cols-2 gap-y-4 md:gap-y-2 lg:gap-y-0 lg:grid-cols-4 md:gap-2 lg:gap-8 px-12 lg:px-0 py-8 ">
                {
                    featuresItems.map(item => <div className="bg-[#202327] rounded-lg shadow-md px-4 py-6 relative -top-1/2" key={item.label}>
                        <div className="text-white text-center ">
                            <h3 className="text-3xl font-extrabold">{item.label}</h3>
                            <p>{item.details}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;