import classes from "./style.module.scss";

interface ISectionHeader {
	text: string;
	Variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeader({ text, Variant = "h2" }: ISectionHeader) {
	const [firstWord, ...restWords] = text.split(" ");

	return (
		<Variant className={classes.slideHeader}>
			<span className="colored">{firstWord} </span>
			{restWords.join(" ")}
		</Variant>
	);
}
