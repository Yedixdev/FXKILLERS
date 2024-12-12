import React, { useState } from "react";
import { motion } from "framer-motion";
import { subscribe } from "@/services/subscription";
const AboutMe = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, ingresa tu correo.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await subscribe(email);

      if (response.success) {
        setMessage("¡Gracias por suscribirte!");
        setEmail("");
      } else {
        setMessage(`Hubo un error: ${response.message}`);
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="xl:w-[1250px] bg-gradient-to-r from-[#197149] to-[#012b20] h-auto mx-auto mt-5 p-5 lg:rounded-2xl flex flex-col py-10 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    > 
    <div className="contact-home-highlight font-poppins font-semibold text-xl mb-4">About Me</div>
      <motion.div
        className="w-full gap-4 flex flex-col items-center justify-evenly lg:flex-row lg:gap-10  top-1"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
      <div className="relative flex justify-center items-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 z-20">
          {/* Línea izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Aparece desde la izquierda
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-12 sm:left-16 w-[2px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"
          ></motion.div>

          {/* Línea derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Aparece desde la derecha
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 bottom-0 right-12 sm:right-16 w-[2px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"
          ></motion.div>

          {/* Línea superior */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Aparece desde arriba
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 right-0 top-12 sm:top-16 h-[2px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"
          ></motion.div>

          {/* Línea inferior */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 right-0 bottom-12 sm:bottom-16 h-[2px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"
          ></motion.div>
        </div>

        <div className="shadow-about-me absolute top-40"></div>
      </div>
      <motion.div
        className="w-full lg:w-[800px] bg-green2 opacity-90 relative z-10 rounded-xl p-6 sm:p-10 shadow-lg shadow-green-900"
        initial={{ opacity: 0, scale: 0.3  }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
      >
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ delay:  1, duration: 0.5, ease: "easeOut"}}
        className="flex flex-col text-center gap-2">
          <span className="font-display text-3xl sm:text-4xl font-bold text-gray-50">
            CEO e Instructor
          </span>
          <span className="contact-home-highlight font-bold text-gray-100 font-display text-2xl sm:text-3xl">
            Ivan Vargas
          </span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ delay:  1.5, duration: 2, ease: "easeOut"}}
          className="text-gray-50 font-poppins font-light mt-4 text-sm sm:text-base">
          <p>
            Me chamo Washington Henrique Fernandes de Sousa, mas pode me
            chamar apenas de Henrique. Prazer!
          </p>
          <p className="mt-2">
            Há mais de 2 anos desenvolvendo e programando interfaces com
            JavaScript, React JS e Typescript. Graduado em Análise e
            Desenvolvimento de Sistemas pela Fatec de São José dos Campos.
            Interesses em desenvolvimento Front-end com React, React Native,
            VueJS e UX/UI Design. Tentando ser um pouquinho melhor do que
            ontem todos os dias.
          </p>
        </motion.div>
      </motion.div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ delay:  0.5, duration: 0.8, ease: "easeOut"}}
      className="flex flex-col justify-center items-center mt-5 gap-4">
        <div 
        className="relative z-10 font-poppins text-xl font-semibold contact-home-highlight ">Newsletter</div>
        <div
          className="text-3xl sm:text-5xl font-bold font-display text-gray-300 text-center relative z-10 "
        >
          <span className="contact-home-highlight">Mantente</span> en contacto
        </div>
        <div className="font-poppins text-gray-300 text-center">Suscribete a nuestro email para recibir las últimas actualizaciones y ofertas exclusivas.</div>
      </motion.div>

      {message && (
        <div
          className={`${
            message.includes("Gracias") ? "text-green-500" : "text-red-500"
          } font-semibold text-center`}
        >
          {message}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ delay:  1, duration: 1, ease: "easeOut"}}
        className="relative mt-5 flex justify-center"
      >
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 flex sm:flex-row gap-2 justify-center bg-green2 p-3 rounded-2xl shadow-lg shadow-green1"
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 w-full sm:w-96 font-poppins rounded-xl text-gray-100 bg-transparent border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-yellow-500 transition duration-300 ease-in-out"
          />

          <motion.button
            type="submit"
            className={`contact-btn-form-home px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitting ? "Enviando..." : "Suscribirme"}
          </motion.button>
        </motion.form>
      </motion.div>

    </motion.div>
  );
};

export default AboutMe;