import { getUserByIdDB } from "../data/signupin";

export async function getUserbyId(id){
	return await getUserByIdDB(id)
}