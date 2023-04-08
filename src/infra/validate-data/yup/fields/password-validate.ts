import * as yup from 'yup'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const yupPasswordSchema = (field: string) => {
    return {
        [field]: yup
            .string()
            .min(8, "Password is too short!")
            .max(16, "Password is too long!")
            .matches(/^(\S+$)/g, "Password is invalid!")
            .required("Password is required!")
            .strict(true),
    } satisfies IValidateField
} 

export { yupPasswordSchema }