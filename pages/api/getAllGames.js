import sql from '../../lib/db'
import { allGames } from '@/lib/games'

export default async function getAllGames(req, res) {
    console.log("fetching games")
    return res.status(200).json(await allGames())
  }