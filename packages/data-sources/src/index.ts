import { initMongoose, InitMongooseOptions } from "./mongoose"
import { InitRedisOptions } from "./redis"

export interface InitDataSourcesOptions {
    mongoose?: InitMongooseOptions,
    redisdb?: InitRedisOptions
}

export const initDataSources = async ({
    mongoose, redisdb
}:InitDataSourcesOptions) => {
    if(mongoose){
        await initMongoose(mongoose);
    }

    if(redisdb){
        console.log("Redis database")
    }
}