export interface IPrimitiveRepository<T>{
    create: (data: T) => Promise<T>
    findById: (id: string) => Promise<T | null>
}