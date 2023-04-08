import { IFormWrapper } from "../../types/form-control/IFormWrapper";
import { ISignUp } from "../../types/http/routes/ISignUp";
import { IValidateField } from "../../types/validate-data/IValidateField";
import { IValidateManager } from "../../types/validate-data/IValidateManager";
import { EmailField } from "../components/fields/EmailField";
import { PasswordField } from "../components/fields/PasswordField";
import { TextField } from "../components/fields/TextField";
import { FormWrapper } from "../components/FormWrapper";

interface validateProps{
    manager: IValidateManager,
    fields:{
      username: (name: string) => IValidateField,
      email: (name: string) => IValidateField,
      password: (name: string) => IValidateField,
      checkbox: (name: string) => IValidateField
    }
}

interface SignUpProps{
    formManager: IFormWrapper["as"],
    validate: validateProps,
    httpSignUp: ISignUp
}

export default function SignUp({
    formManager,
    validate,
    httpSignUp
}: SignUpProps){

  const initialValues = { username: "", email: "", password: "", terms: false }
  // type names = keyof typeof initialValues

  return (
      <>
        <h1>Sign Up</h1>
        <FormWrapper
          initialValues={initialValues}
          onSubmitFunction={
            (values: typeof initialValues) => {
              console.log(values)
              httpSignUp.execute({
                  username: values.username,
                  email: values.email,
                  password: values.password
              }).then(
                  data => console.log("sucesso")
              ).catch(
                  error => console.log("falha")
              )
            }
          }
          validationSchema={{
            manager: validate.manager,
            fields: [
              validate.fields.username('username'),
              validate.fields.email('email'),
              validate.fields.password('password'),
              validate.fields.checkbox('terms')
            ]
          }}
          as={formManager}
        >
          {({ handleSubmit, FieldWrapper, isValid, dirty, errors, touched, setValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <TextField 
                  FieldWrapper={FieldWrapper} 
                  setValue={setValue}
                  isTouched={touched.username}
                  error={errors.username}
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <EmailField
                  FieldWrapper={FieldWrapper} 
                  setValue={setValue}
                  isTouched={touched.email}
                  error={errors.email}
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                />
                <PasswordField
                  FieldWrapper={FieldWrapper} 
                  setValue={setValue}
                  isTouched={touched.password}
                  error={errors.password}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <FieldWrapper
                  name="terms"
                  type="checkbox"
                />
                <label htmlFor="terms"> I agree with all Terms and Conditions </label>
                <h3>{touched.terms ? errors.terms : null}</h3>
                
                <button disabled={!(isValid && dirty)} type="submit">enviar</button>
              </form>
            );
          }}
        </FormWrapper>
      </>
  );
}