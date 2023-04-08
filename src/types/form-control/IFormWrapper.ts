import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, ReactElement} from "react";
import { IValidateManager } from "../validate-data/IValidateManager";
import { IValidateField } from "../validate-data/IValidateField";

export interface FieldWrapperProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>{
  name: string
}

export interface childrenProps {
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  FieldWrapper: (props: FieldWrapperProps) => ReactElement;
  isValid: boolean;
  dirty: boolean;
  touched: { [key: string]: any };
  errors: { [key: string]: any };
  setValue: (field: string, name: string) => void;
}

export interface formControlProps extends Omit<IFormWrapper, "as"> {}

export interface IFormWrapper {
  initialValues: { [key: string]: any };
  validationSchema: { manager: IValidateManager, fields: IValidateField[] };
  onSubmitFunction: (value: any) => any;
  children: (props: childrenProps) => ReactElement;
  as: (data: formControlProps) => ReactElement;
}
