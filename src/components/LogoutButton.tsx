"use client";
import React, { useState, forwardRef, HTMLAttributes } from "react";
import LogoutModal from "./LogoutModal";
import { useProfile, useLogout } from "@/hooks/onUser";

export default function LogoutButton() {
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
			<button onClick={() => setIsOpen(!isOpen)}>Logout</button>
			<LogoutModal
				isOpen={isOpen}
				onLogout={() => logoutHandler()}
				setIsOpen={() => setIsOpen(!isOpen)}
			/>
		</>
	);
}
