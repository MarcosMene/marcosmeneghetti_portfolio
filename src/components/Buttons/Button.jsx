import "./Button.scss";
import { motion } from "framer-motion";

const STYLES = ["fill", "outline"];

export const Button = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0 }}
      className={`btn ${checkButtonStyle} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};
