export interface IProject {
	id: string;
	name: string;
	description: string;
	keyFeatures: Array<string>;

	langs: Array<sting>;
	links: Array<{ type: string; href: string }>;
	image: string;
}
