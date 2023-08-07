import TypewriterComponent from "typewriter-effect";
import Banner from "../../Components/Home/Banner/Banner";
import hero1 from "../../assets/hero_1.webp";
import { Link } from "react-router-dom";
import Features from "./Features";


const Home = () => {
    const user = true
    return (
        <div className="w-full h-full" >
            <Banner gradient={true} url={hero1} >
                <div className=" text-white flex w-full gap-4 flex-col justify-center items-center h-full z-20">
                    <h1 className="text-6xl font-extrabold">
                        <TypewriterComponent
                            options={{
                                strings: "Free Script Writing Software",
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </h1>
                    <p>Unleash creativity with AI Copilot - craft compelling screenplays</p>
                    {
                        user ? <Link>
                            <button className="btn font-bold btn-lg">Dashboard</button>
                        </Link> :
                            <Link>
                                <button className="btn font-bold btn-lg">Login</button>
                            </Link>
                    }
                </div>
            </Banner >
            <Features/>

        </div>
    );
};

export default Home;