
module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './db.sqlite'
        },
        migrations: {
            directory: './migrations/'
        },
        useNullAsDefault: true,
    }
}