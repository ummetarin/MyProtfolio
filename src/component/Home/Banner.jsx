  import Lottie from 'lottie-react';
// import Lottie from "lottie-react";
import banimage from './Banner.json'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div>
<div className="hero min-h-screen  bg-purple-800">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="md:w-[30%]">
    <Lottie animationData={banimage}> </Lottie>
    </div>
    <div className="md:w-[50%]">
      <h1 className="text-xl text-orange-500 font-bold">Hey Its Me</h1>
      <h1 className="mt-2 text-4xl text-white font-bold">UMME HOMAIRA</h1>
   <h1 className='text-2xl text-white font-bold '> <Typewriter
         words={['I Am A Fronted Web Developer', 'Current Student In CSE Department', 'Website Designer']}
         loop={10}
         >
             
         </Typewriter></h1>
      <p className="py-5 text-sm font-normal text-white">My journey into the world of web development began with a curiosity about creating visually stunning and user-friendly interfaces. Currently pursuing my studies in CSS, I am on a mission to blend creativity with technical skills to build immersive digital experiences.</p>
      <button className="btn bg-orange-600 text-white rounded-full">Dowload CV</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;