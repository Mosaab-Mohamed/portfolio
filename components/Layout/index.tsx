import { IconContext } from "react-icons";
import { Navbar, Particles, Hero } from "components";
import classes from "./style.module.scss";

interface ILayoutProps {
	children: React.ReactNode;
	className?: string;
}

export function Layout({ children, className }: ILayoutProps) {
	return (
		<div className={`${classes.layout} ${className}`}>
			<Particles />
			<IconContext.Provider value={{ className: "portfolioIcon" }}>
				<div className="container">
					<Navbar />
					<Hero />
					<div className="slides">{children}</div>
				</div>
			</IconContext.Provider>
		</div>
	);
}
