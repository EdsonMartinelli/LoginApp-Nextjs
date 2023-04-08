import { z } from "zod";
import { IValidateManager, validateManagerProps  } from '../../../types/validate-data/IValidateManager';

const zodValidade = {
    execute: async ({values, fields}: validateManagerProps) => {
        try{

            const mergeFields = fields.reduce((acc, item) => {
                return {...acc,...item}
            }, {})

            const validationSchema = z.object(mergeFields)

            const checkedValues = await validationSchema.parseAsync(values)

            return {
                values: checkedValues,
                errors: {}
            }

        }catch(error: any){

            const allErrors = error.issues.reduce((acc: any, item: any) => {

                const allPathErrors = item.path.reduce((pathAcc: any, path: any) =>{
                  return {
                    ...pathAcc,
                    [path]: item.message
                  }
                }, {})
          
                return {
                  ...acc,
                  ...allPathErrors
                }

            }, {})
          
            return {
                values: {},
                errors: allErrors
            }
        }
    }
} satisfies IValidateManager

export default zodValidade