import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
   return (
      <div className="border-t border-stone-900 pb-20" ref={ref}>
         <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl mix-blend-difference"
         >
            Get in Touch
         </motion.h2>
         <div className="text-center tracking-tighter">
            <motion.p
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 1 }}
               className="my-4 mix-blend-difference"
            >
               {CONTACT.address}
            </motion.p>{" "}
            <motion.p
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
               className="my-4 mix-blend-difference"
            >
               {CONTACT.phoneNo}
            </motion.p>
            <a href="#" className="border-b mix-blend-difference">
               {CONTACT.email}
            </a>
         </div>
      </div>
   );
});

export default Contact;
