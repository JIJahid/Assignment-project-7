import './Hero.css'

const Hero = () => {
    return (
        <div className="max-w-[1280px] m-auto my-5" >
                <div className='hero'>
                    <div className='overlay m-auto '>
                        <div className='w-3/5 m-auto  text-center'>
                            <h1 className='text-5xl text-white font-bold my-2'>Discover an exceptional cooking class tailored for you!</h1>
                            <p className='text-gray-200 my-2'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                            <button className='text-lg  rounded-3xl px-4 py-2 m-2 bg-[#0BE58A]'>Explore Now</button>
                            <button className='text-lg border-2  rounded-3xl px-4 py-2 m-2 text-white'>Our Feedback</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Hero;