import { apiBaseURL } from "@/configs/basUrl";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProfile = () => {
	return useQuery(
		["profile"],
		async () =>
			await axios
				.get(`${apiBaseURL}/users/@me`, {
					withCredentials: true,
				})
				.then((res) => res.data),
		{ staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 5 }
	);
};

export const useLogout = () => {
	return useQuery(
		["logout"],
		async () =>
			await axios
				.get(`${apiBaseURL}/auth/logout`, {
					withCredentials: true,
				})
				.then((res) => res.data),
		{
			enabled: false, // This turns off auto-fetching
		}
	);
};
