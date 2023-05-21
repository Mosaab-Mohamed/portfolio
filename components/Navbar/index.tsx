import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BsFillPersonFill,
	BsFileEarmarkTextFill,
	GiPaintBrush,
	MdMessage,
} from "shared/assets/icons";
import classes from "./style.module.scss";

const links = [
	{
		name: "ABOUT",
		path: "/about",
		icon: <BsFillPersonFill />,
	},
	{
		name: "RESUME",
		path: "/resume",
		icon: <BsFileEarmarkTextFill />,
	},
	{
		name: "PROJECTS",
		path: "/projects",
		icon: <GiPaintBrush />,
	},
	{
		name: "CONTACTS",
		path: "/contacts",
		icon: <MdMessage />,
	},
];

export function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) => pathname?.startsWith(path);
	return (
		<nav className={classes.navbar}>
			<ul>
				{links.map((link) => (
					<li
						key={link.name}
						className={`navLink ${isActive(link.path) ? "active" : ""}`}
					>
						<Link href={link.path}>
							{link.icon}
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
