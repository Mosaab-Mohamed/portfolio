import { GetStaticProps } from "next";
import Head from "next/head";
import { IProjectsPage } from "@/shared/types/pages";
import { getPage } from "@/shared/utils";
import { SectionHeader, Slide, ProjectCard } from "@/components/index";
import classes from "./style.module.scss";

export const getStaticProps: GetStaticProps = async () => {
	const pageDoc = await getPage<IProjectsPage>("projects");

	if (!pageDoc) return { notFound: true };
	return {
		props: pageDoc,
		revalidate: 86400,
	};
};

export default function Projects(props: IProjectsPage) {
	return (
		<Slide>
			<Head>
				<link rel="icon" href="/portfolio.png" />
				<title>Mosaab | Projects</title>
			</Head>
			<SectionHeader text="Recent Projects" />
			<div className={classes.projects}>
				{props.projects.sort((a, b) => Number(a.order) - Number(b.order)).map((project, index) => (
					<ProjectCard
						key={index}
						image={project.image}
						name={project.name}
					/>
				))}
			</div>
		</Slide>
	);
}
