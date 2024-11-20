export const metadata = {
	title: "Homepage",
	description: "",
};

export default function HomepageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #473322, #8D6542)",
				width: "100%",
				height: "100vh",
			}}
		>
			{children}
		</div>
	);
}
