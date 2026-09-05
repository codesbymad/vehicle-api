export default {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 5432,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },

    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}