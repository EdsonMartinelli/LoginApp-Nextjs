import * as crypto from "crypto";
import { IPrimitiveRepository } from "../repositories/IPrimitiveRepository";

export class GenerateUniqueId{
    static async execute<T>(repository: IPrimitiveRepository<T>){
        let id= crypto.randomUUID();
        let idAlreadyExists = await repository.findById(id);

        while(idAlreadyExists != null){
            id = crypto.randomUUID();
            idAlreadyExists = await repository.findById(id);
        }
        return id;
    }
}