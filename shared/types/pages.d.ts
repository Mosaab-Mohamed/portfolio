interface IPage {
	name: string;
}

export interface IHeroPage extends IPage {
	fullName: string;
	title: string;
	coverImg: string;
	personalImg: string;
	linkedin: string;
	github: string;
	cv: string;
}

export interface IAboutPage extends IPage {
	content: string;
	metadata: {
		age: number;
		residence: string;
		"military service": string;
		"job type": string;
		[key: string]: string;
	};
	langsAndTechs: Array<string>;
}

export interface IResumePage extends IPage {
	experience: Array<Job>;
	education: Array<EducationStage>;
	personalSkills: Array<string>;
}

type Job = {
	role: string;
	order: number;
	company: string;
	period: string;
	responsibilities: Array<string>;
};

type EducationStage = {
	degree: string;
	college: string;
	period: string;
	certificate?: string;
};

export interface IProjectsPage extends IPage {
	projects: Array<{ name: string; image: string }>;
}

export interface IContactsPage extends IPage {
	phone: string;
	email: string;
	linkedin: string;
	github: string;
	residence: string;
}
