import React from "react";
import { motion } from "framer-motion";

const Animation = ({ children, duration }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default Animation;
