import { Formik } from "formik";
import { createElement } from "react";
import { formControlProps } from "../../../types/form-control/IFormWrapper";
import { FormikField } from "./FormikField";

export function FormikForm({
  initialValues,
  validationSchema,
  onSubmitFunction,
  children,
}: formControlProps) {
  function getInitialErrors(data: { [key: string]: string }) {
    const messageArray = Object.entries(data).map(
      ([key, _]: [string, string]) => {
        return [key, ""];
      }
    );
    const objectMessage = messageArray.reduce((obj, item) => {
      return {
        ...obj,
        [item[0]]: item[1],
      };
    }, {});
    return objectMessage;
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={async (values) => { 
        return validationSchema.manager.execute({
          values,
          fields: validationSchema.fields
        }).then(data => {
          return data.errors
        })
      }}
      initialErrors={getInitialErrors(initialValues)}
      onSubmit={onSubmitFunction}
      validateOnChange
    >
      {
        ({ handleSubmit, isValid, dirty, errors, touched, setFieldValue, setFieldTouched }) => {
          return createElement(children, {
            handleSubmit,
            FieldWrapper: FormikField,
            isValid,
            dirty,
            errors,
            touched,
            setValue: (field: string, value: string) => {
              setFieldTouched(field, true, true)
              setFieldValue(field, value, true)
            }
          })
        }
      }
    </Formik>
  );
}
