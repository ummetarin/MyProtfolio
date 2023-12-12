import { motion } from "framer-motion";
const Prot = () => {
    
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
    };
  
    const projectVariants = {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    return (
      <motion.div
        className="min-h-screen b bg-purple-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="">
          <motion.h1
            className="text-4xl pt-10 pb-4 text-white text-center font-normal border-b-2 w-60 mx-auto"
            variants={containerVariants}
          >
            My <span className="text-orange-600">Projects</span>
          </motion.h1>
        </div>
        <motion.div
          className="flex  md:flex-row flex-col justify-around py-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex  flex-col justify-center gap-8 items-center pt-12"
            variants={projectVariants}
          >
            <a href="https://delicious-restaurent.netlify.app/">
              {" "}
              <motion.img
                className="h-[280px] w-[350px] rounded-md "
                src="https://i.ibb.co/sbvcxdN/del.jpg"
                alt=""
                variants={projectVariants}
              />
            </a>
            <motion.h1
              className="text-2xl text-white font-bold"
              variants={projectVariants}
            >
              Delicious restaurant
            </motion.h1>
          </motion.div>
          <motion.div
            className="flex  flex-col justify-center gap-8 items-center pt-12"
            variants={projectVariants}
          >
            <a href="https://star-climax.netlify.app/">
              {" "}
              <motion.img
                className="h-[280px] w-[350px] rounded-md "
                src="https://i.ibb.co/VHnq4hc/appp.jpg"
                alt=""
                variants={projectVariants}
              />
            </a>
            <motion.h1
              className="text-2xl text-white font-bold"
              variants={projectVariants}
            >
              Star Climax
            </motion.h1>
          </motion.div>
          <motion.div
            className="flex  flex-col justify-center gap-8 items-center pt-12"
            variants={projectVariants}
          >
            <a href="https://brand-collection-81971.web.app/">
              {" "}
              <motion.img
                className="h-[280px] w-[350px] rounded-md "
                src="https://i.ibb.co/r5scbQh/fat.jpg"
                alt=""
                variants={projectVariants}
              />
            </a>
            <motion.h1
              className="text-2xl text-white font-bold"
              variants={projectVariants}
            >
              Fashion Brand
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    );
};

export default Prot;