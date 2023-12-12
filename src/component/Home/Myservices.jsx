

const Myservices = () => {
    return (
        <div className="min-h-screen  bg-purple-800">
        
        <div className="">
        <h1 className="text-4xl pt-10 pb-4 text-white text-center font-normal border-b-2 w-60 mx-auto">My <span className="text-orange-600">Services</span></h1>
        </div>
        <div className="flex md:flex-row flex-col mx-auto items-center md:pb-3 pb-24 justify-center gap-16 pt-16">
       <div>
       <div className="bg-black w-[400px] h-[400px]">
            <h1 className="text-center text-2xl font-bold pt-5 text-orange-500">Web Design</h1>
           <div className="mx-auto flex justify-center  ">
           <img className="h-[180px] w-[200px]" src="https://i.ibb.co/nwwzKB8/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image-1496223-remo.png" alt="" />
           </div>
           <p className="text-center font-bold px-10  text-white text-sm">Web design involves creating the visual aspect of a website, including the layout, colors, layout, and overall aesthetics. Here are some key aspects and principles to consider when designing a website</p>
          </div>
       </div>
       <div>
       <div className="bg-black w-[400px] h-[400px]">
            <h1 className="text-center text-2xl font-bold pt-5 text-orange-500">Web Devlopement</h1>
           <div className="mx-auto flex justify-center  ">
           <img className="h-[180px] w-[200px]" src="https://i.ibb.co/cxrLH2N/images-removebg-preview.png" alt="" />
           </div>
           <p className=" px-10 text-center font-bold text-white text-sm">Web development involves building and maintaining websites or web applications. It encompasses a range of tasks, from designing the user interface to programming the backend functionality.</p>
          </div>
       </div>

        </div>
         
     </div>
    );
};

export default Myservices;