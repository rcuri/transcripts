import { allGames } from "./games";

export async function getAllGames() {
    const data = await allGames()
    return data
}

