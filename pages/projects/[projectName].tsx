import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Slide, SectionHeader, ScrollableImage } from "@/components/index";
import { getPage, getProject } from "@/shared/utils";
import type { IProject } from "@/shared/types/project";
import classes from "./style.module.scss";
import { IProjectsPage } from "@/shared/types/pages";

type Params = { projectName: string };

export const getStaticProps: GetStaticProps<IProject, Params> = async ({
	params,
}) => {
	const projectDoc = await getProject(params?.projectName);

	if (!projectDoc) return { notFound: true };
	return { props: projectDoc, revalidate: 86400 };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projectsPage = await getPage<IProjectsPage>("projects");
	if (!projectsPage || !projectsPage.projects)
		return { paths: [], fallback: "blocking" };

	return {
		paths: projectsPage.projects.map(({ name }) => ({
			params: { projectName: name },
		})),
		fallback: false,
	};
};

export default function ProjectDetails(props: IProject) {
	return (
		<Slide>
			<Head>
				<link rel="icon" href="/portfolio.png" />
				<title>Mosaab | {props.name}</title>
			</Head>
			<SectionHeader text={props.name} />
			<div className={classes.project}>
				<ScrollableImage imgProps={{ src: props.image, alt: props.name }} />

				<p className="projectDescription">{props.description}</p>

				<div className="projectSkills">
					<h2 className="header">Key Features</h2>
					<ul>
						{props.keyFeatures.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</div>

				<div className="projectTechnologies">
					<ul className="list">
						{props.langs.map((tech) => (
							<li key={tech} className="chip">
								{tech}
							</li>
						))}
					</ul>
				</div>

				{props.links.map((link, index) => (
					<a
						key={index}
						href={link.href}
						target="_blank"
						className="projectLink"
						rel="noreferrer"
					>{`Visit ${link.type}`}</a>
				))}
			</div>
		</Slide>
	);
}
