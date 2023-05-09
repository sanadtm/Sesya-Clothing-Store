/** @format */

import Head from "next/head";
import Items from "../components/Items";
import HomeContent from "@/components/HomeContent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function ListProducts() {
	return (
		<>
			<div className="min-h-screen grid-cols-3 justify-between flex items-center">
				<div class="col-start-1 col-end-1 ...">
					{" "}
					<Items />
				</div>
				<div class="col-start-1 col-end-1 ...">
					{" "}
					<Items />
				</div>
				<div class="col-start-1 col-end-1 ...">
					{" "}
					<Items />
				</div>
				<div class="col-start-1 col-end-1 ...">
					{" "}
					<Items />
				</div>
			</div>
		</>
	);
}
