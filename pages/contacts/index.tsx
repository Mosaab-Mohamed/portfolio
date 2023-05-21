import { GetStaticProps } from "next";
import Head from "next/head";
import { Slide, SectionHeader } from "@/components/index";
import { IContactsPage } from "@/shared/types/pages";
import { getPage } from "@/shared/utils";
import {
	BsFillTelephoneFill,
	MdEmail,
	ImLocation2,
	BsGithub,
	ImLinkedin,
} from "@/shared/assets/icons";
import classes from "./style.module.scss";

export const getStaticProps: GetStaticProps = async () => {
	const pageDoc = await getPage<IContactsPage>("contacts");

	if (!pageDoc) return { notFound: true };
	return {
		props: pageDoc,
		revalidate: 86400,
	};
};

export default function Contacts(props: IContactsPage) {
	return (
		<Slide>
			<Head>
				<link rel="icon" href="/portfolio.png" />
				<title>Mosaab | Contacts</title>
			</Head>
			<SectionHeader text="Get In Touch" />
			<div className={classes.contactsList}>
				<div className="contactItem">
					<BsFillTelephoneFill />
					<a href={`tel:${props.phone}`} target="_blank" rel="noreferrer">
						{props.phone}
					</a>
				</div>
				<div className="contactItem">
					<MdEmail />
					<a
						href={`mailto:${props.email}`}
						target="_blank"
						rel="noreferrer"
					>
						{props.email}
					</a>
				</div>
				<div className="contactItem">
					<ImLocation2 />
					{props.residence}
				</div>
				<div className="contactItem">
					<ImLinkedin />
					<a href={props.linkedin} target="_blank" rel="noreferrer">
						Linkedin
					</a>
				</div>
				<div className="contactItem">
					<BsGithub />
					<a href={props.github} target="_blank" rel="noreferrer">
						Github
					</a>
				</div>
			</div>
		</Slide>
	);
}
