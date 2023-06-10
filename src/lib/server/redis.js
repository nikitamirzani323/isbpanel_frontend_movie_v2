import { Redis } from 'ioredis'

export const redis = new Redis({
    port: 6379, // Redis port
    host: "128.199.124.131", // Redis host
    username: "default", // needs Redis >= 6
    password: "asdQWE123!@#",
    db: 7, // Defaults to 0
})