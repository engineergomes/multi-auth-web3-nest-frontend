"use client";
import React, { useMemo } from "react";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {
	PhantomWalletAdapter,
	CloverWalletAdapter,
	SolflareWalletAdapter,
	LedgerWalletAdapter,
	TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as solana from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

interface walletContextProviderProps {
	children?: React.ReactNode;
}

const WalletContextProvider = ({ children }: walletContextProviderProps) => {
	// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
	const network = WalletAdapterNetwork.Devnet;

	// You can also provide a custom RPC endpoint.
	const endpoint = useMemo(() => solana.clusterApiUrl("devnet"), []);

	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new CloverWalletAdapter(),
			new SolflareWalletAdapter({ network }),
			new TorusWalletAdapter(),
			new LedgerWalletAdapter(),
		],
		[network]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export default WalletContextProvider;
