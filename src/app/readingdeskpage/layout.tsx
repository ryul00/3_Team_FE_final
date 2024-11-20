export const metadata = {
	title: "Loadingpage",
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
				background: "#473322",
				width: "100%",
				minHeight: "100vh",
			}}
		>
			{children}
		</div >
	);
}
