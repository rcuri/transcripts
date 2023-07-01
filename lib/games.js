import sql from './db'

export async function allGames() {
    console.log("fetching games")
    return await sql`
      SELECT * FROM game
      ORDER BY game_date DESC
      LIMIT 10
    `
  }

export async function filterGamesMultipleFilters() {
    return await sql`
      SELECT * FROM game
      ORDER BY game_date DESC
      LIMIT 10
    `
}

const singleFilter = x => sql`
    WHERE ${ x[0]['home_team_id'] } = ${ fields[0]['fieldValue'] }`

const twoFilters = x => sql`WHERE ${ x[0]['fieldName'] } = ${ x[0]['fieldValue'] } 
    WHERE ${ x[0]['fieldName'] } = ${ x[0]['fieldValue'] } 
    AND ${ x[1]['fieldName'] } = ${ x[1]['fieldValue'] }`

const threeFilters = x => 
    sql`
    WHERE ${ x[0].fieldName } = ${ x[0].fieldValue } 
    AND ${ x[1].fieldName } = ${ x[1].fieldValue }
    AND ${ x[2].fieldName } = ${ x[2].fieldValue }
    `


export async function filterGamesSingleFilter(fields) {
    let response;
   // console.log("length of fields" + fields.length)
    try {
    const result = await sql`
    SELECT * FROM game
    ${
        (fields) ?
            sql`
            WHERE ${ fields }
            `
        :   sql``
      }
    ORDER BY game_date DESC
    LIMIT 10
    `
    response = result
    }
  catch(e) {
    console.error(e)
  }
  finally {
    console.log(response)
    return response
  }
}


export async function filterGamesAllFilter(fields) {
    let response;
    console.log("length of fields" + fields.length)
    try {
    const result = await sql`
    SELECT * FROM game
    ${
        (fields.length === 3) ? 
            threeFilters(fields)
        :
        (fields.length === 2) ?
            twoFilters(fields)
        :
        (fields.length === 1) ?
            singleFilter(fields)
        :   sql``
      }
    ORDER BY game_date DESC
    LIMIT 10
    `
    response = result
    }
  catch(e) {
    console.error(e)
  }
  finally {
    console.log(response)
    return response
  }
}