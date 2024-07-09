import React from "react";
import { motion } from "framer-motion";

export default function Thanku() {

     const[show, setshow] = React.useState(false)

    const[invisible, setinvisible] = React.useState(true)

  return (
    <motion.h1
      animate={{ 
        scale: [1, 1.2, 1], 
        color: ["#000", "#f00", "#00f", "#000"] 
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{ textAlign: "center", marginTop: "20%" }}
    >
      Thank you
    </motion.h1>
  );
}




