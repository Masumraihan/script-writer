

const Banner = ({ children, url, gradient }) => {
    return (
        <div className={`max-w-full h-[100vh]  bg-center bg-cover`} style={{ backgroundImage: `url(${url})` }}>
            <div className=" container mx-auto z-50 flex flex-col items-start justify-center h-full">
                <>
                    {children}
                </>
            </div>
            {
                gradient && <div className="w-full z-10 absolute top-0 h-full flex">
                    <div className="bg-[#8b4040] w-1/2 h-full blur-3xl opacity-50"></div>
                    <div className="bg-[#1c5f63] w-1/2 h-full blur-[150px] opacity-50"></div>
                </div>
            }
        </div>
    );
};

export default Banner;