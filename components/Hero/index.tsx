import { useEffect, useState } from "react";
import Image from "next/image";
import { ImLinkedin, BsGithub } from "shared/assets/icons";
import type { IHeroPage } from "@/shared/types/pages";
import { getPage } from "@/shared/utils";
import classes from "./style.module.scss";

export function Hero() {
	const [props, setProps] = useState<IHeroPage | null>(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		(async function () {
			try {
				setIsError(false);
				const pageDoc = await getPage<IHeroPage>("hero");
				if (pageDoc) setProps(pageDoc);
			} catch (error) {
				setIsError(true);
			}
		})();
	}, []);

	return (
		<section className={classes.hero}>
			{!props ? (
				<p>Loading...</p>
			) : isError ? (
				"Something went wrong, please trye again."
			) : (
				<>
					<div className="heroHeader">
						<div
							className="heroCover"
							style={{
								backgroundImage: `url(${props?.coverImg})`,
							}}
						/>
						<div className="heroImage">
							<Image
								priority
								src={props.personalImg}
								alt={props.fullName}
								width={150}
								height={150}
							/>
						</div>
					</div>

					<div className="heroBody">
						<p className="heroName">{props.fullName}</p>
						<p className="heroJob">{props.title}</p>
						<ul className="heroSocial">
							<li className="heroSocialLink">
								<a
									href={props.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<ImLinkedin />
								</a>
							</li>
							<li className="heroSocialLink">
								<a href={props.github} target="_blank" rel="noreferrer">
									<BsGithub />
								</a>
							</li>
						</ul>
					</div>
					<a className="heroCV" href={props.cv} download target="_blank">
						Download CV
					</a>
				</>
			)}
		</section>
	);
}
