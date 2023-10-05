import { apiBaseURL } from "@/configs/basUrl";
import { log } from "console";
import React, { useEffect } from "react";
import { DiscordLogo } from "@/assets/SocialLogos";

const DiscordLoginButton = () => {
	function DiscordSignIn() {
		window.location.replace(`${apiBaseURL}/auth/discord`);
	}

	return (
		<button
			className="bg-[#434343] w-full py-4 px-12 rounded-lg"
			onClick={() => DiscordSignIn()}
		>
			<div className="flex items-center gap-x-3 fill-white">
				<span className="w-4 -mt-[2px]">
					<DiscordLogo />
				</span>
				<span>Connect Discord</span>
			</div>
		</button>
	);
};

export default DiscordLoginButton;
