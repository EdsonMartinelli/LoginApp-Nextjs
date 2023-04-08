import { FormikForm } from "../../infra/form-control/formik/FormikForm";
import signup from "../../infra/http-client/axios/routes/signup";
import { yupCheckboxSchema } from "../../infra/validate-data/yup/fields/checkbox-validate";
import { yupEmailSchema } from "../../infra/validate-data/yup/fields/email-validate";
import { yupPasswordSchema } from "../../infra/validate-data/yup/fields/password-validate";
import { yupUsernameSchema } from "../../infra/validate-data/yup/fields/username-validate";
import yupValidade from "../../infra/validate-data/yup/yup-validate";
import SignUp from "../presentation/SignUp";


export default function SignUpFactory() {
  return (
    <>
        <SignUp 
          formManager={FormikForm}
          validate={{
            manager: yupValidade,
            fields: {
              username: yupUsernameSchema,
              email: yupEmailSchema,
              password: yupPasswordSchema,
              checkbox: yupCheckboxSchema
            }
          }} 
          httpSignUp={signup}        
        />
    </>
  )
}