import { GetStaticProps } from "next";
import Head from "next/head";
import { SectionHeader, Slide } from "@/components/index";
import { getPage } from "@/shared/utils";
import { IResumePage } from "@/shared/types/pages";
import {
	FaBriefcase,
	FaUniversity,
	AiOutlineCheckCircle,
} from "@/shared/assets/icons";
import classes from "./style.module.scss";

export const getStaticProps: GetStaticProps = async () => {
	const pageDoc = await getPage<IResumePage>("resume");

	if (!pageDoc) return { notFound: true };
	return {
		props: pageDoc,
		revalidate: 86400,
	};
};

export default function Resume(props: IResumePage) {
	return (
		<Slide>
			<Head>
				<link rel="icon" href="/portfolio.png" />
				<title>Mosaab | Resume</title>
			</Head>
			<SectionHeader text="Resume" />
			<div className={classes.resumeExperience}>
				<div className="header">
					<FaBriefcase />
					EXPERIENCE
				</div>

				{props.experience
					.sort((a, b) => a.order - b.order)
					.map((job, index) => (
						<div className="job" key={index}>
							<div className="title">{job.role}</div>
							<div className="chip">{job.period}</div>
							<div className="firm">{job.company}</div>
							<ol className="description">
								{job.responsibilities.map((responsibility, index) => (
									<li key={index}>{responsibility}</li>
								))}
							</ol>
						</div>
					))}
			</div>

			<div className={classes.resumeEducation}>
				<div className="header">
					<FaUniversity />
					EDUCATION
				</div>

				{props.education.map((stage, index) => (
					<div className="stage" key={index}>
						<div className="chip present">{stage.period}</div>
						<div className="school">{stage.college}</div>
						<div className="degree">{stage.degree}</div>
						{stage.certificate && (
							<a
								className="description"
								href={stage.certificate}
								target="_blank"
								rel="noreferrer"
							>
								Official Certification
							</a>
						)}
					</div>
				))}
			</div>

			<div className={classes.resumeSkills}>
				<SectionHeader text="Personal Skills" />
				<ul className="list">
					{props.personalSkills.map((skill, index) => (
						<li className="item" key={index}>
							<AiOutlineCheckCircle /> {skill}
						</li>
					))}
				</ul>
			</div>
		</Slide>
	);
}
