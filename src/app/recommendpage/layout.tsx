export const metadata = {
	title: "Recommendpage",
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
				background: "linear-gradient(to bottom, #0F0726, #361B8C)",
				width: "100%",
				minHeight: "100vh",
			}}
		>
			{children}
		</div >
	);
}
