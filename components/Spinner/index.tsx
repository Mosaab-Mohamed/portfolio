import classes from "./style.module.scss";

export function Spinner() {
	return (
		<div className={classes.spinnerOverlay}>
			<div className="spinner" />
		</div>
	);
}
