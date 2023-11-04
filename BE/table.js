const promisePool = require('./app')

async function createTable() {
    try {
        const [rows, fields] = await promisePool.query(`
            CREATE TABLE IF NOT EXISTS users(
                    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                    username VARCHAR(100),
                    password VARCHAR(100)
                )
        `);
        console.log('success');
    } catch (error) {
        console.error('error', error)
    }
}

createTable();