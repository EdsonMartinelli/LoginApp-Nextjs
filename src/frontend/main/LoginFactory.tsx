import { FormikForm } from "../../infra/form-control/formik/FormikForm";
import { HookFormForm } from "../../infra/form-control/hook-form/HookFormForm";
import yupValidade from "../../infra/validate-data/yup/yup-validate";
import zodValidade from "../../infra/validate-data/zod/zod-validate";
import { yupEmailSchema } from "../../infra/validate-data/yup/fields/email-validate";
import { yupPasswordSchema } from "../../infra/validate-data/yup/fields/password-validate";
import { zodEmailSchema } from "../../infra/validate-data/zod/fields/email-validate";
import { zodPasswordSchema } from "../../infra/validate-data/zod/fields/password-validate";
import Login from "../presentation/Login";
import login from "../../infra/http-client/axios/routes/login";


export default function LoginFactory() {
  return (
    <>
    <Login 
        formManager={FormikForm} 
        validate={{
          manager: yupValidade,
          fields:{
            email: yupEmailSchema,
            password: yupPasswordSchema,
          }
        }} 
        httpLogin={login}
    />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Login 
        formManager={HookFormForm} 
        validate={{
          manager: zodValidade,
          fields:{
            email: zodEmailSchema,
            password: zodPasswordSchema,
          }
        }} 
        httpLogin={login}
    />






    </>
  );
}