import { IValidateField } from "./IValidateField"


export interface validatedDataProps {
    values: {[key: string]: any}
    errors: {[key: string]: string}
}

export interface validateManagerProps {
    values: {[key: string]: any}
    fields: IValidateField[]
}

export interface IValidateManager {
    execute: (props: validateManagerProps ) => Promise<validatedDataProps>
}