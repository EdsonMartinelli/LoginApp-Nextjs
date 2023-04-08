import * as yup from 'yup'
import { IValidateManager, validateManagerProps  } from '../../../types/validate-data/IValidateManager';

const yupValidade = {
    execute: async ({values, fields}: validateManagerProps) => {
        try{

            const mergeFields = fields.reduce((acc, item) => {
                return {...acc,...item}
            }, {})

            const validationSchema = yup.object(mergeFields)

            const checkedValues = await validationSchema.validate(values, {abortEarly: false})

            return {
                values: checkedValues,
                errors: {}
            }

        }catch(error: any){

            const allErrors = error.inner.reduce((acc: any, item: any) => {
                return {...acc, [item.path]: item.errors[0]}
            },{})

            return {
                values: {},
                errors: allErrors
            }
        }
    }
} satisfies IValidateManager

export default yupValidade