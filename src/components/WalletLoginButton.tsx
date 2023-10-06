import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { WalletIcon } from "@/assets/WalletIcon";

const WalletLoginButton = () => {
	const { wallet, publicKey, signMessage, connect } = useWallet();
	const { setVisible } = useWalletModal();
	async function WalletSignIn() {
		setVisible(true);
	}

	return (
		<button
			className="bg-[#434343] w-full py-4 px-12 rounded-lg"
			onClick={() => {
				WalletSignIn();
			}}
		>
			<div className="flex items-center gap-x-3 fill-white">
				<span className="w-4 -mt-[2px]">
					<WalletIcon />
				</span>
				<span>Connect Wallet</span>
			</div>
		</button>
	);
};

export default WalletLoginButton;
