

const Aboutme = () => {
    return (
        <div className="min-h-screen b bg-indigo-950">
        
           <div className="">
           <h1 className="text-4xl pt-10 pb-4 text-white text-center font-normal border-b-2 w-52 mx-auto">About <span className="text-orange-600">Me</span></h1>
           </div>
            <div className="hero mt-8 ">
               
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-[40%] justify-center flex ">
    <img src="https://i.ibb.co/YDVnVRh/384553128-324476877023016-2666399241610718134-n-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className="w-[40%]">
      <h1 className="text-2xl py-1 text-white font-bold">Frontend Developer & A Dedicated </h1>
      <h1 className="text-2xl  text-white font-bold">Student In The CSS Department </h1>
  

      <p className="pt-5 pb-4 text-sm font-medium text-white">Im [Umme Homaira], a passionate frontend web developer and a dedicated student in the CSS department. My journey into the world of web development began with a curiosity about creating visually stunning and user-friendly interfaces. Currently pursuing my studies in CSS, I am on a mission to blend creativity with technical skills to build immersive digital experiences.</p>
      <p className="pt-2 pb-5 text-sm font-medium text-white">Currently, I am a dedicated student in the CSS department, where I am honing my skills in creating visually appealing and functionally robust web interfaces. My academic journey is complemented by hands-on projects that showcase my ability to apply theoretical knowledge to practical solutions.</p>
      <button className="btn bg-white text-black">Read More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Aboutme;