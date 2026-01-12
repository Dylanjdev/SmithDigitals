import { motion } from "framer-motion";
import "./PageLoader.css";

export default function PageLoader() {
  return (
    <motion.div 
      className="page-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loader-content">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </motion.div>
  );
}
