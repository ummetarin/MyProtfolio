
const Prot = () => {
    return (
        <div className="min-h-screen b bg-purple-700">
        
        <div className="">
        <h1 className="text-4xl pt-10 pb-4 text-white text-center font-normal border-b-2 w-60 mx-auto">My <span className="text-orange-600">Projects</span></h1>
        </div>
       <div className="flex  md:flex-row flex-col justify-around py-8">
       <div className="flex  flex-col justify-center gap-8 items-center pt-12 ">
           
           <a href="https://delicious-restaurent.netlify.app/"> <img className="h-[280px] w-[350px] rounded-md " src="https://i.ibb.co/sbvcxdN/del.jpg" alt="" /></a>
           <h1 className="text-2xl text-white font-bold">Delicious restaurant</h1>
        </div>
        <div className="flex  flex-col justify-center gap-8 items-center pt-12 ">
           
           <a href="https://star-climax.netlify.app/"> <img className="h-[280px] w-[350px] rounded-md " src="https://i.ibb.co/VHnq4hc/appp.jpg" alt="" /></a>
           <h1 className="text-2xl text-white font-bold">Star Climax</h1>
        </div>
        <div className="flex  flex-col justify-center gap-8 items-center pt-12 ">
            
           <a href="https://brand-collection-81971.web.app/"> <img className="h-280px] w-[350px] rounded-md " src="https://i.ibb.co/r5scbQh/fat.jpg" alt="" /></a>
           <h1 className="text-2xl text-white font-bold">Fashion Brand</h1>
        </div>
       </div>
        
     </div>
    );
};

export default Prot;