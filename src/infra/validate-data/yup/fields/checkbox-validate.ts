import * as yup from 'yup'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const yupCheckboxSchema = (field: string) => {
    return {
        [field]: yup
            .boolean()
            .oneOf([true], "You must check the field!")
            .strict(true),
    } satisfies IValidateField
} 

export { yupCheckboxSchema }