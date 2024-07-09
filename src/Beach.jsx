

import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedTypography = motion(Typography);

export default function Beach() {
  return (
    <AnimatedTypography
      variant="h3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      We provide these services
    </AnimatedTypography>
  );
}








