import { createElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formControlProps } from "../../../types/form-control/IFormWrapper";
import { HookFormField } from "./HookFormField";

export function HookFormForm({
  initialValues,
  validationSchema,
  onSubmitFunction,
  children,
}: formControlProps) {

  const methods = useForm({
    values: initialValues,
    mode: "onChange",
    resolver: async (values) => { 
      return validationSchema.manager.execute({
        values,
        fields: validationSchema.fields
      })
    }
  });


  return (
    <FormProvider {...methods}>
      {createElement(children, {
        handleSubmit: methods.handleSubmit(onSubmitFunction),
        FieldWrapper: HookFormField,
        isValid: methods.formState.isValid,
        dirty: methods.formState.isDirty,
        errors: methods.formState.errors,
        touched: methods.formState.touchedFields,
        setValue: (field: string, value: string) => {
          methods.setValue(field, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true })
        }
      })}
    </FormProvider>
  );
}
