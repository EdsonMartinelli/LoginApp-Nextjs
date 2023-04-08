import { z } from 'zod'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const zodEmailSchema = (fields: string) => {
    return {
        [fields]: z
            .string()
            .email("Email is invalid!")
            .min(1, "Email is required!"),
    } satisfies IValidateField
} 

export { zodEmailSchema }