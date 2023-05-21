import { useEffect, useRef } from "react";
import classes from "./style.module.scss";

interface IScrollableImageProps {
	imgProps: React.ImgHTMLAttributes<HTMLImageElement>;
	containerProps?: { width?: number | string; height?: number | string };
}

export function ScrollableImage({
	imgProps,
	containerProps,
}: IScrollableImageProps) {
	const imgContainerRef = useRef<HTMLDivElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const animateScroll = () => {
		if (!imgRef.current || !imgContainerRef.current) return;
		const animatedTop =
			imgRef.current.clientHeight - imgContainerRef.current.clientHeight;

		const keyframes: Keyframe[] = [
			{ top: "0px" },
			{ top: `-${animatedTop}px` },
		];

		const options: KeyframeAnimationOptions = {
			duration: imgRef.current.clientHeight / 0.2,
			fill: "forwards",
			easing: "linear",
		};

		imgRef.current.animate(keyframes, options);
	};

	useEffect(() => {
		if (!imgContainerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) animateScroll();
			},
			{ threshold: 1 }
		);
		observer.observe(imgContainerRef.current);

		return () => {
			observer.disconnect();
		};
	}, [imgContainerRef.current]);

	return (
		<div
			className={classes.projectImgContainer}
			ref={imgContainerRef}
			style={{
				width: containerProps?.width,
				height: containerProps?.height,
			}}
		>
			<img
				className="projectImg"
				{...imgProps}
				ref={imgRef}
				loading="lazy"
			/>
		</div>
	);
}
