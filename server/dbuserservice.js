const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: '',
  password: '',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM quotes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM quotes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => { // ei toimi! miksi???
  const { content,author } = request.body

  pool.query('INSERT INTO quotes (content,author) VALUES ($1::text, $2::text)', [content, author], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added`)
  })
}

const updateUser = (request, response) => {   // ei toimi!
  const id = parseInt(request.params.id)
  const { content,author } = request.body

  pool.query(
    'UPDATE quotes SET content = $1, author = $2 WHERE id = $3',
    [content,author, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Quote modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => { // toimiiko?
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM quotes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Quote deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}