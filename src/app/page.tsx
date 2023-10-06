"use client";
import DiscordLoginButton from "@/components/DiscordLoginButton";
import { SignMessageButton } from "@/components/SignMessageButton";
import TwitterLoginButton from "@/components/TwitterLoginButton";
import WalletLoginButton from "@/components/WalletLoginButton";
import WalletContextProvider from "@/context/WalletContextProvider";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
	const { publicKey } = useWallet();

	return (
		<main className="max-w-sm">
			<div className="flex flex-col gap-y-4 w-full px-8 pb-12 pt-2 overflow-hidden text-left align-middle transition-all transform bg-[#1c1c1c] shadow-xl rounded-2xl min-w-[250px]">
				<h2 className="font-[Avenir] font-bold text-center text-lg mt-2">
					Connect Account
				</h2>

				<div className="font-[Avenir] flex flex-col gap-y-2">
					{/* <MatricaLoginButton /> */}
					<DiscordLoginButton />
					<TwitterLoginButton />
					{publicKey ? <SignMessageButton /> : <WalletLoginButton />}
				</div>
			</div>
		</main>
	);
}
