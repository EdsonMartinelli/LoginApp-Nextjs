import * as yup from 'yup'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

export const yupUsernameSchema = (fields: string) => {
    return {
        [fields]: yup
            .string()
            .min(3, "Username is too short!")
            .max(20, "Username is too long!")
            .required("Username is required!")
            .strict(true),
    } satisfies IValidateField
}