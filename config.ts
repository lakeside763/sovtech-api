const port: number = parseInt(process.env.PORT!);
const redisPort: number = parseInt(process.env.REDIS_PORT!);
const redisHost: string = process.env.REDIS_HOST!;
const redisPass: string = process.env.REDIS_PASS!;
const redisDb: number = parseInt(process.env.REDIS_DB!);

const redis = {
    port: redisPort,
    host: redisHost,
    password: redisPass,
    db: redisDb
};

export default {
    port,
    redis
};



