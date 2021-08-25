//npm install pg
// Importa somente a classe Client da biblioteca PostGree com o método de desestruturação
const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://repaerloijrhpx:9e6dc8af488e48a20522b40832679d5e4f35f4168e6e94b0d5e31f08d4748f73@ec2-35-174-122-153.compute-1.amazonaws.com:5432/d1e685bt2rn37',
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

module.exports = client