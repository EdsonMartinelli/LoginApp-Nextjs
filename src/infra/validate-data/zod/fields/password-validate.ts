import { z } from 'zod'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const zodPasswordSchema = (field: string) => {
    return {
        [field]: z
            .string()
            .min(8, { message: "Password is too short!" })
            .max(16, { message: "Password is too long!" })
            .regex(/^(\S+$)/g, {message: "Password is invalid!"})
            .min(1, "Email is required!")
    } satisfies IValidateField
} 

export { zodPasswordSchema }