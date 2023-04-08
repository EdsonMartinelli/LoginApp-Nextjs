import { z } from 'zod'
import { IValidateField } from '../../../../types/validate-data/IValidateField'

const zodCheckboxSchema = (field: string) => {
    return {
        [field]: z
            .literal(true, {errorMap: () => ({ message: "You must check the field!" }) })
    } satisfies IValidateField
} 

export { zodCheckboxSchema }