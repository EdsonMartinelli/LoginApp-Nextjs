import { createElement } from "react";
import { IFormWrapper } from "../../types/form-control/IFormWrapper";

export function FormWrapper({ as, ...props }: IFormWrapper) {
  return <> {createElement(as, {...props})} </>
}
