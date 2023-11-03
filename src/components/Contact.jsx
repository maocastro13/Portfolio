import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tooltip } from 'react-tooltip';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { technologies } from "../constants";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub, FaItchIo, FaFilePdf } from "react-icons/fa";
import CV from "../assets/CV/CV_Mauricio_Castro_Game_Programmer.pdf";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_egph01u',
        'template_fw5ee76',
        {
          from_name: form.name,
          to_name: "Mauricio Castro",
          from_email: form.email,
          to_email: "maocastro13@gmail.com",
          message: form.message,
        },
        'aWRHk1eabYC3gy4Rj'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/maocastro13/', '_blank');
  };
  
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/maocastro13dev/', '_blank');
  };
  
  /*const handleTiktokClick = () => {
    window.open('https://www.tiktok.com/@maocastro13dev', '_blank');
  };*/
  
  const handleWhatsappClick = () => {
    window.open('https://wa.me/573012037742', '_blank');
  };
  
  const handleItchClick = () => {
    window.open('https://maocastro13.itch.io', '_blank');
  };
  
  const handleGithubClick = () => {
    window.open('https://github.com/maocastro13', '_blank');
  };

  const handleDownloadCVClick = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV_MAURICIO_CASTRO.pdf';
    link.click();
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h1 className={styles.sectionHeadText}>Contact me!</h1>
        <div className="flex justify-left gap-6 mt-8">
          <FaLinkedin 
            onClick={handleLinkedinClick} 
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="See my LinkedIn"
            data-tooltip-variant="light"
            id="contact-element" 
          />
          <FaGithub 
            onClick={handleGithubClick} 
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="See my Github"
            data-tooltip-variant="light"
            id="contact-element" 
          />
          <FaItchIo 
            onClick={handleItchClick} 
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="See my Itch.io"
            data-tooltip-variant="light"
            id="contact-element" 
          />
          <FaWhatsapp 
            onClick={handleWhatsappClick} 
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="Send me a message"
            data-tooltip-variant="light"
            id="contact-element"
          />
          <FaInstagram 
            onClick={handleInstagramClick} 
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="See my Instagram"
            data-tooltip-variant="light"
            id="contact-element" 
          /> 
          <FaFilePdf
            onClick={handleDownloadCVClick}
            className="text-3xl text-white cursor-pointer"
            data-tooltip-id="contact-tooltip" 
            data-tooltip-content="Click here to download my CV!"
            data-tooltip-variant="light"
            id="contact-element"
          />
          <Tooltip id="contact-tooltip" anchorSelect="#contact-element"/>
        </div>
        <br/>
        <p className={styles.sectionSubText}>👆🏻 My social networks and my CV.</p>
        <br/>
        <p className={styles.sectionSubText}>👇🏻 Or you can send me a email.</p> 

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black-100 p-8 rounded-2xl flex-shrink-0 w-full'
      >
        <p className={`${styles.sectionHeadText}`}>My Tech Stack</p>
        <br />
        <div className='flex flex-row flex-wrap justify-center md:justify-center gap-4 md:gap-10'>
          {technologies.map((technology) => (
            <div className='w-12 h-12 md:w-28 md:h-28' key={technology.name}>
              <img src={technology.icon} alt={technology.name} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");