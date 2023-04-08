import * as yup from 'yup'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const yupEmailSchema = (fields: string) => {
    return {
        [fields]: yup
            .string()
            .email("Email is invalid!")
            .required("Email is required!")
            .strict(true),
    } satisfies IValidateField
} 

export { yupEmailSchema }