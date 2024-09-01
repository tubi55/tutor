//npm i @tanstack/react-query
//npm i @tanstack/react-query-devtools
import { useQuery } from "@tanstack/react-query";

const fetchStudy = async ({ queryKey: [_, opt] }) => {
	const api_key = import.meta.env.VITE_YOUTUBE_KEY;
	const baseURL = "https://www.googleapis.com/youtube/v3";
	const pid = "PLGOVj4gmzJyDZl4SuQ59zyn8GfwMx_RmO"; //커리큐럼
	const num = 8;
	const url_list = `${baseURL}/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
	let url = "";
	opt.type === "list" && (url = url_list);

	const response = await fetch(url);
	if (!response.ok) throw new Error("Fail to fetch Flickr data");

	const studyData = await response.json();
	return studyData.items;
};

export const useStudyQuery = opt => {
	return useQuery({
		queryKey: ["studyData", opt],
		queryFn: fetchStudy,
		staleTime: 1000 * 60 * 60,
		gcTime: 1000 * 60 * 60
	});
};
