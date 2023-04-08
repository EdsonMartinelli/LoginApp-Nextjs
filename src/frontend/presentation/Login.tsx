import Link from "next/link";
import { useRouter } from "next/router";
import { FormWrapper } from "../components/FormWrapper";
import { IFormWrapper} from "../../types/form-control/IFormWrapper";
import { IValidateManager } from "../../types/validate-data/IValidateManager";
import { IValidateField } from "../../types/validate-data/IValidateField";
import { EmailField } from "../components/fields/EmailField";
import { PasswordField } from "../components/fields/PasswordField";
import { ILogin } from "../../types/http/routes/ILogin";

interface validateProps{
  manager: IValidateManager,
  fields:{
    email: (name: string) => IValidateField,
    password: (name: string) => IValidateField
  }
}

interface LoginProps{
    formManager: IFormWrapper["as"],
    validate: validateProps,
    httpLogin: ILogin
}

export default function Login({
    formManager,
    validate,
    httpLogin
}: LoginProps) {
  const route = useRouter();
  
  const initialValues = {email: "", password: ""}

  return (
    <>
      <h1> {route.query.name ?? "sem query"}</h1>
      <Link href="/">Home</Link>

      <FormWrapper
        initialValues={initialValues}
        onSubmitFunction={
          (values: typeof initialValues) => {
            console.log(values)
            httpLogin.execute({
              email: values.email,
              password: values.password
            }).then(
                data => console.log("sucesso")
            ).catch(
                error => console.log("falha")
            )
        }}
        validationSchema={{
          manager: validate.manager,
          fields: [
            validate.fields.email('email'),
            validate.fields.password('password')
          ]
        }}
        as={formManager}
      >
        {({ handleSubmit, FieldWrapper, isValid, dirty, errors, touched, setValue }) => {
          return (
            <form  onSubmit={handleSubmit}>
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
              <button disabled={!(isValid && dirty)} type="submit">enviar</button>
            </form>
          );
        }}
      </FormWrapper>
    </>
  );
}