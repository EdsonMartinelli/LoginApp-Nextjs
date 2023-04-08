import { Field, useFormikContext } from "formik";
import { FormEvent, useRef} from "react";
import { FieldWrapperProps } from "../../../types/form-control/IFormWrapper";

export function FormikField(props: FieldWrapperProps) {
  const context = useFormikContext();
  return (
    <Field
      {...props} 
      onChange={(e: FormEvent) => {
          context.setFieldTouched(props.name);
          context.handleChange(e);
        }
      } 
      onBlur={() => {}}
    />
  );
}
