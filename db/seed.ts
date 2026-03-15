import { db, Experiences } from "astro:db";

export default async function seed() {
	await db.delete(Experiences);

	await db.insert(Experiences).values([
		{
			id: 1,
			title: "Software Engineer",
			company: "Acaciasoft",
			description: "Professional experience building modern web applications.",
			start_at: new Date("08-02-2023"),
			end_at: null,
			jobs: [
				"Connecting different software systems or applications using Application Programming Interfaces (APIs).",
				"Designing, creating, testing, and maintaining software applications or systems.",
				"Refactor and optimize existing code for better performance and readability."
			]
		},
		{
			id: 2,
			title: "Full-stack Software Developer",
			company: "Afforda-POS",
			description: "Developed Point of Sale (POS) software and desktop applications using Laravel, Vue.js, and native PHP.",
			start_at: new Date("05-11-2025"),
			end_at: null,
			jobs: [
				"Developed and maintained POS software using Laravel and Vue.js for modern web applications.",
				"Built desktop applications using native PHP for seamless local operations.",
				"Integrated multiple systems through APIs to streamline business processes.",
				"Refactored and optimized existing code for better performance, scalability, and readability."
			]
		}
	]);
}