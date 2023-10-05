import { apiBaseURL } from "@/configs/basUrl";
import { log } from "console";
import React, { useEffect } from "react";
import { TwitterLogo } from "@/assets/SocialLogos";

const TwitterLoginButton = () => {
	function TwitterSignIn() {
		window.location.replace(`${apiBaseURL}/auth/twitter`);
		// window.open(`${apiBaseURL}/auth/twitter`, "_blank", "noreferrer");
	}

	return (
		<button
			className="bg-[#434343] w-full py-4 px-12 rounded-lg"
			onClick={() => TwitterSignIn()}
		>
			<div className="flex items-center gap-x-3 fill-white">
				<span className="w-4 -mt-[2px]">
					<TwitterLogo />
				</span>
				<span>Connect Twitter</span>
			</div>
		</button>
	);
};

export default TwitterLoginButton;
