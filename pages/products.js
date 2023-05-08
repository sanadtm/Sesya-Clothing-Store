/** @format */

import Head from "next/head";
import Items from "@/components/item";
import HomeContent from "@/components/HomeContent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function Products() {
	return (
		<>
			<Head>
				<title>SESYA | All Products </title>
				<link rel="Icon" href="/sesya_insta_logo.png" alt="my personal Logo" />
			</Head>
			<NavBar />

			{/* <HomeContent /> */}
			<div className="grid-cols-3">
				<Items /> <Items /> <Items /> <Items /> <Items /> <Items />
			</div>
			<Items />
			<Footer />
		</>
	);
}
