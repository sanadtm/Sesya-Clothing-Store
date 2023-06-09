/** @format */
import Link from "next/link";
import Image from "next/image";
export default function HomeContent() {
	return (
		<>
			<div className=" min-h-screen bg-gray-100 flex flex-col p-10 justify-center">
				<div className="relative m-3 flex flex-wrap mx-auto justify-center">
					<div className="min-w-[340px]flex flex-col group">
						<div
							data-aos="fade-left"
							className="rounded-full h-78 md:h-86 lg:h w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
							<Image
								src="/sesya_insta_logo.png"
								className="rounded-full object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
								alt=""
							/>

							<div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
						</div>

						<Link
							href="/"
							data-aos="fade-right"
							data-aos-duration="3000"
							className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
							SESYA
						</Link>

						<p
							data-aos="fade-right"
							data-aos-duration="3000"
							className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
							Clothing Made with Passion
						</p>

						<div className="flex justify-center gap-x-3">
							{/* <a
							href="#"
							className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
							Add
						</a> */}
							<a
								data-aos="zoom-in-right"
								href="#"
								className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold">
								View Product
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
