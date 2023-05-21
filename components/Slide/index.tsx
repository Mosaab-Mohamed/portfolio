import { ReactNode } from "react";
import { motion } from "framer-motion";
import classes from "./style.module.scss";

export function Slide({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<motion.div
			className={classes.slide}
			initial={{ opacity: 0, x: "-100%" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "-100%" }}
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
}
