import { useCallback } from "react";
import ParticlesEle from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export function Particles() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<ParticlesEle
			id="tsparticles"
			init={particlesInit}
			url="/particles.json"
		/>
	);
}
