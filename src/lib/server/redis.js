import { Redis } from 'ioredis'

export const redis = new Redis({
    port: 6379, // Redis port
    host: "143.198.49.250", // Redis host
    username: "default", // needs Redis >= 6
    password: "asdQWE123!@#asdQWE123",
    db: 1, // Defaults to 0
})