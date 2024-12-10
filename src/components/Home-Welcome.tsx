import { FaStar } from "react-icons/fa";
import ShimmerButton from "./ui/shimmer-button";
import { motion } from "framer-motion";
import TypingAnimation from "./ui/typing-animation";
import BlurIn from "./ui/blur-in";

const Welcome = () => {
  return (
    <div 
    id="home-welcome"
    className="w-full h-[630px] flex justify-center  relative">
      <motion.div
        className="bg-gray-300 h-[450px] max-w-[1000px] lg:w-[1000px] xl:w-[1000px]  rounded-xl  flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, ease: "easeOut" }}  
      >
        {/* Clasificación */}
        <motion.div
            className="mt-5 font-poppins"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <ShimmerButton background="#135A3A">
              <div className="flex gap-2 items-center">
                  <FaStar className="text-xl" />
                  <BlurIn className="font-poppins text-gray-100"
                  word="5/5 Clasificación"/>
              </div>
            </ShimmerButton>
        </motion.div>

        {/* Título principal */}
        <motion.div
          className="title-home-section text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold font-display text-center relative z-10 px-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          FK KILLERS <span className="text-gray-100">TRADING HOUSE</span>
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypingAnimation
          className="font-poppins font-semibold text-base md:text-xl xl:text-2xl pt-5 text-center text-green1 relative z-10"
          text="Comunidad exclusiva + Educación Financiera"
          />
        </motion.div>

        {/* Formulario */}
        <motion.form
          className="relative z-10 flex sm:flex-row gap-2 justify-center bg-green2 p-3 m-3 rounded-2xl shadow-lg shadow-green1 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <input
          type="email"
          placeholder="Correo electrónico"
          required
          className="p-2 w-full sm:w-96 font-poppins rounded-xl text-gray-100 bg-transparent border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-yellow-500 transition duration-300 ease-in-out"
        />

          <button
            type="submit"
            className="contact-btn-form-home px-6 py-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 bg-yellow1 text-white font-semibold hover:shadow-md hover:shadow-gray-950"
          >
            Suscríbete
          </button>
        </motion.form>

        <motion.div className="shadow-home-green bg-transparent w-[400px] max-w-3xl  rounded-full mt-24 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}></motion.div>
      </motion.div>

      <motion.div
        className="bg-black w-[70%] h-72 max-w-3xl rounded-xl  absolute bottom-8 sm:bottom-20 md:bottom-6 lg:bottom-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
};

export default Welcome;
