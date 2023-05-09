/** @format */

import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ListProducts from "@/components/ListProducts";
export default function Products() {
	return (
		<>
			<Head>
				<title>SESYA | All Products </title>
				<link rel="Icon" href="/sesya_insta_logo.png" alt="my personal Logo" />
			</Head>
			<NavBar />
			<ListProducts />

			<Footer />
		</>
	);
}
