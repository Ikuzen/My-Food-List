export const config = {
    POSTGRES_USER: process.env.POSTGRES_USER || 'admin',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'admin',
    POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost'
}