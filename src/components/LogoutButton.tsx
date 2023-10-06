"use client";
import React, { useState, forwardRef, HTMLAttributes } from "react";
import LogoutModal from "./LogoutModal";
import { useProfile, useLogout } from "@/hooks/onUser";

interface logoutButtonProps extends HTMLAttributes<HTMLDivElement> {}

const LogoutButton = forwardRef<HTMLDivElement, logoutButtonProps>(
	(props, ref) => {
		const userProfile = useProfile();
		const logout = useLogout();
		const [isOpen, setIsOpen] = useState(false);

		async function logoutHandler() {
			await logout.refetch();
			await userProfile.refetch();
			setIsOpen(!isOpen);
		}

		return (
			<>
				<div {...props} onClick={() => setIsOpen(!isOpen)} ref={ref}>
					{props.children}
				</div>
				<LogoutModal
					isOpen={isOpen}
					onLogout={() => logoutHandler()}
					setIsOpen={() => setIsOpen(!isOpen)}
				/>
			</>
		);
	}
);

LogoutButton.displayName = "LogoutButton";

export default LogoutButton;
