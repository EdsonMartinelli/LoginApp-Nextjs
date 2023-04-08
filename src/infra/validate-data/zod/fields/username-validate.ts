import { z } from 'zod'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

export const zodUsernameSchema = (field: string) => {
    return {
        [field]: z
            .string()
            .min(3, { message: "Username is too short!" })
            .max(20, { message: "Username is too long!" })
            .min(1, "Username is required!")
    } satisfies IValidateField
} 
