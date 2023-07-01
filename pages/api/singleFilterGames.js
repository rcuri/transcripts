import sql from '../../lib/db'
import { filterGamesSingleFilter } from '@/lib/games'

export default async function singleFilterGames(req, res) {
    try {
        const queries = []
        const queryKeys = Object.keys(req.query)
        console.log("before loop")
        queryKeys.forEach((queryKey)=> {
            const queryObject = {}
            console.log("made it in here")
            if (queryKey === 'homeTeamId') {
                queryObject['fieldName'] = 'home_team_id'
                queryObject['fieldValue'] = req.query[queryKey]
            }
            else if (queryKey === 'visitorTeamId') {
                queryObject['fieldName'] = 'visitor_team_id'
                queryObject['fieldValue'] = req.query[queryKey]
            }
            else if (queryKey === 'season') {
                queryObject['fieldName'] = 'season'
                queryObject['fieldValue'] = req.query[queryKey]
            }
            queries.push(queryObject)
        })
        const queryString = "home_team_id = 1610612737"
        console.log("requesting data")
        console.log("queries:")
        console.log(queries)
        console.log("end queries")
        return res.status(200).json(await filterGamesSingleFilter(queryString))
    }
    catch(error) {
        console.log("error occurred ok")
        console.log(error)
    }
    finally {
        console.log("succeeded")
    }
}