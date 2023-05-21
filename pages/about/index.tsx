import type { GetStaticProps } from "next";
import Head from "next/head";
import { Slide, SectionHeader } from "@/components/index";
import { IAboutPage } from "@/shared/types/pages";
import { getPage } from "@/shared/utils";
import { AiOutlineCheckCircle } from "@/shared/assets/icons";
import classes from "./style.module.scss";

export const getStaticProps: GetStaticProps = async () => {
	const pageDoc = await getPage<IAboutPage>("about");

	if (!pageDoc) return { notFound: true };
	return {
		props: pageDoc,
		revalidate: 86400,
	};
};

export default function About(props: IAboutPage) {
	return (
		<Slide>
			<Head>
				<link rel="icon" href="/portfolio.png" />
				<title>Mosaab | About</title>
			</Head>
			<div className={classes.intro}>
				<SectionHeader text="About Me" />
				<p className="introContent">{props.content}</p>
				<ul className="introMetadata">
					{Object.keys(props.metadata).map((key) => (
						<li className="metadataItem" key={key}>
							{key.toUpperCase()} :{" "}
							<span className="colored">{props.metadata[key]}</span>
						</li>
					))}
				</ul>
			</div>

			<div className={classes.techSkills}>
				<SectionHeader
					text="Programming Languages & Technologies"
					Variant="h3"
				/>
				<ul className="list">
					{props.langsAndTechs.map((tech, index) => (
						<li className="techItem" key={index}>
							<AiOutlineCheckCircle />
							{tech}
						</li>
					))}
				</ul>
			</div>
		</Slide>
	);
}
