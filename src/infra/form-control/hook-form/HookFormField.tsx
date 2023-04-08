import { useFormContext } from "react-hook-form";
import { FieldWrapperProps } from "../../../types/form-control/IFormWrapper";

export function HookFormField(props: FieldWrapperProps) {
  const context = useFormContext();
  return(
    <input 
      {...props} 
      {...context.register(props.name)}
      onFocus={() => {
        context.formState.touchedFields[props.name] = true
      }}
    />
  );
}
