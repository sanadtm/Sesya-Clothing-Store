/** @format */

import Head from "next/head";
import Items from "../components/Items";
import HomeContent from "@/components/HomeContent";
import LoginForm from "@/components/LoginForm";
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
			<LoginForm />
			<Footer />
		</>
	);
}
