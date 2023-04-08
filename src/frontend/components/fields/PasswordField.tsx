import { ReactElement, useState } from "react";
import { FieldWrapperProps } from "../../../types/form-control/IFormWrapper";

interface PasswordFieldProps extends FieldWrapperProps{
    FieldWrapper: (props: FieldWrapperProps) => ReactElement;
    setValue: (field: string, name: string) => void;
    isTouched: boolean;
    error: string | undefined;
}

export function PasswordField({FieldWrapper, setValue, isTouched, error, ...props}: PasswordFieldProps){
    const [type, changeType] = useState<string>(props.type ?? "password") 

    function togglePasswordType(){
        changeType(oldType => {
            return oldType == "password" ? "text" : "password"
        })
    }
    const name = props.name ?? ""
    return(
        <>
            <FieldWrapper
                {...props}
                type={type}
            />
            <button type="button" onClick={togglePasswordType}> O </button>
            <h3>{isTouched ? error : null}</h3>
        </>
        
    )


}