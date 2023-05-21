import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/index";
import "@/shared/styles/main.scss";

const poppins = Poppins({
	weight: ["300", "400", "500"],
	subsets: ["latin"],
	display: "swap",
});

export default function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<Layout className={poppins.className}>
			<AnimatePresence>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</Layout>
	);
}
