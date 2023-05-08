/** @format */

import Head from "next/head";
import Items from "@/components/item";
import HomeContent from "@/components/HomeContent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function HomePage() {
	return (
		<>
			<Head>
				<title>SESYA | Passionate Clothing </title>
				<link rel="Icon" href="/sesya_insta_logo.png" alt="my personal Logo" />
			</Head>

			<NavBar />
			<HomeContent />
			<Footer />
		</>
	);
}
