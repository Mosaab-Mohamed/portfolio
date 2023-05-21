import Link from "next/link";
import { ScrollableImage } from "@/components/index";
import classes from "./style.module.scss";

interface IProjectCardProps {
	name: string;
	image: string;
}

export function ProjectCard(props: IProjectCardProps) {
	return (
		<div className={classes.projectCard}>
			<h2 className="projectName">{props.name}</h2>
			<ScrollableImage imgProps={{ src: props.image, alt: props.name }} />
			<Link href={`/projects/${props.name}`}>
				<button className="projectLink">View Details</button>
			</Link>
		</div>
	);
}
