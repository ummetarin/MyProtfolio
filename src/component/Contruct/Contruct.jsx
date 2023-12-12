import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contruct = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2t4m9wg', 'template_xb3ii2v', form.current, '53e7lEtq-rLlUMSyB')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Send Message",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div>
         <div  className="">
     

         <form ref={form} onSubmit={sendEmail}>
         <div className='flex md:flex-row  bg-purple-700 flex-col justify-center mx-auto'>
         <div className=''>
              <img src="https://i.ibb.co/TH4h2sW/Banner-Image-removebg-preview.png" alt="" />
            </div>
     <div className='flex flex-col gap-2 justify-center mx-auto items-center bg-purple-700'>
     <div>
     <div className=' text-white font-bold text-sm py-2 text-center'>
     <label>Name</label>
     </div>
      <input type="text" className='bg-orange-600 text-black h-8 w-60' name="user_name" />
      </div>
      <div  className='text-white font-bold text-sm py-2 text-center'>
     <div >
     <label>Email</label>
     </div>
      <input type="email" className='bg-orange-600 text-black h-8 w-60' name="user_email" />
      </div>
      <div  className='text-white font-bold text-sm  text-center'>
     <div >
     <label>Message</label>
     </div>
      <textarea name="message" className='bg-orange-600 text-black h-44 w-72' />
      </div>
     <div>
     <input className='bg-red-600 btn text-white font-bold w-24 h-2' type="submit" value="Send" />
     </div>
     </div>
         </div>
    </form>


            </div> 
        </div>
    );
};

export default Contruct;