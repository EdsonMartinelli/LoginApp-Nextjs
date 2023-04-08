import { ReactElement } from "react";
import { FieldWrapperProps } from "../../../types/form-control/IFormWrapper";

interface EmailFieldProps extends FieldWrapperProps{
    FieldWrapper: (props: FieldWrapperProps) => ReactElement;
    setValue: (field: string, name: string) => void;
    isTouched: boolean;
    error: string | undefined;
}

export function TextField({FieldWrapper, setValue, isTouched, error, ...props}: EmailFieldProps){
    return(
        <>
            <FieldWrapper
                {...props}
            />
            <button type="button" onClick={() => setValue(props.name, "")}> X </button>
            <h3>{isTouched ? error : null}</h3>
        </>
        
    )


}