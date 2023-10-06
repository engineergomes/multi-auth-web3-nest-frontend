import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
	return (
		<div className="flex flex-col w-full gap-10">
			<h2>Youre Logged In!</h2>
			<LogoutButton />
		</div>
	);
}
