import { db, Experiences } from "astro:db";

export default async function seed() {
	await db.delete(Experiences);
	
	await db.insert(Experiences).values([
		{
		id: 1,
		title: "Software Development",
		description: "Professional experience in building web applications and software systems.",
		jobs: [
			{
			company: "Freelance",
			position: "Full-stack Developer",
			period: "2023 - Present",
			technologies: ["Laravel", "Vue", "Tailwind CSS"],
			description: "Developed custom web applications for clients including POS systems and e-commerce platforms."
			},
			{
			company: "Personal Projects",
			position: "Software Developer",
			period: "2022 - 2023",
			technologies: ["Nuxt", "Contentful", "Vercel"],
			description: "Built modern portfolio and CMS-driven applications."
			}
		]
		},
		{
		id: 2,
		title: "Web Development",
		description: "Experience designing and building responsive websites.",
		jobs: [
			{
			company: "Self-employed",
			position: "Frontend Developer",
			period: "2021 - 2022",
			technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
			description: "Created responsive websites and UI components."
			}
		]
		}
	]);
}