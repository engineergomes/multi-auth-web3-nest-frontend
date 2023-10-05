import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import React, { FC, useCallback } from "react";
import { sign } from "tweetnacl";
import { useProfile } from "@/hooks/onUser";
import baseX from "base-x";
import { apiBaseURL } from "@/configs/basUrl";

const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export const SignMessageButton: FC = () => {
	const { publicKey, signMessage } = useWallet();
	const profile = useProfile();
	const bs58 = baseX(alphabet);

	const onClick = useCallback(async () => {
		try {
			// `publicKey` will be null if the wallet isn't connected
			if (!publicKey) throw new Error("Wallet not connected!");
			// `signMessage` will be undefined if the wallet doesn't support it
			if (!signMessage)
				throw new Error("Wallet does not support message signing!");

			// Encode anything as bytes
			const message = new TextEncoder().encode("Hello, world!");
			// Sign the bytes using the wallet
			const signature = await signMessage(message);

			// Verify that the bytes were signed using the private key that matches the known public key
			if (!sign.detached.verify(message, signature, publicKey.toBytes()))
				throw new Error("Invalid signature!");

			const body = {
				username: publicKey.toBase58(),
				password: bs58.encode(signature),
			};

			await axios.post(`${apiBaseURL}/auth/wallet`, body, {
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});

			profile.refetch();
		} catch (error: any) {
			alert(`Signing failed: ${error?.message}`);
		}
	}, [publicKey, signMessage]);

	return (
		<button
			className="flex flex-col bg-[#EEAA38] w-full py-4 px-12 rounded-lg items-center justify-center relative z-50 animate-pulse"
			onClick={onClick}
			disabled={!publicKey}
		>
			<div className="bg-[#EEAA38] w-[65%] h-[60%] opacity-100  rounded-lg  absolute z-[-10] animate-ping "></div>
			<p>
				{publicKey?.toString().slice(0, 4) +
					".." +
					publicKey?.toString().slice(-4)}
			</p>
			Sign Message
		</button>
	);
};
