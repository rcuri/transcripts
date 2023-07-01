import postgres from 'postgres'

//const sql = postgres(process.env.DATABASE_URL)
const sql = postgres('postgres://postgres:password@localhost:5431/transcriptai')

export default sql