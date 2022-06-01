import { updateCreditsDB } from "../data/signupin";

export async function updateCredits(userId, credits){
	return await updateCreditsDB(userId, credits)
}