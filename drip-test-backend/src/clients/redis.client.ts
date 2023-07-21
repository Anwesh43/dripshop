import { Injectable } from '@nestjs/common';
import {createClient} from 'redis';


type RedisClientType = ReturnType<typeof createClient>

@Injectable()
export default class RedisClient {

   
    client : RedisClientType 
    connected : boolean = false 


    async connect() {
        this.client = createClient()
        await this.client.connect()
        this.connected = true
        
    }

    async save(id : string, data : string) {
        if (!this.connected) {
            this.connect()
        }
        await this.client.set(id, data)
    }

    async get(id : string) : Promise<string> {
        if (!this.connected) {
            this.connect()
        }
        const data = await this.client.get(id)
        return data 
    }

    async getAll() : Promise<Array<string>> {
        if (!this.connected) {
            this.connect()
        }
        const data = await this.client.keys("*")
        return Promise.all(data.map(d => this.get(d)))
    }

    async delete(id : string) {
        if (!this.connected) {
            this.connect()
        }
        await this.client.del(id)
    }
}