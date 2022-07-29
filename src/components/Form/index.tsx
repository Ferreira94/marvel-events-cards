import { useFormContext } from "react-hook-form";
import { FormContainer } from "./style";

interface IErrorsProps {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function Form() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as IErrorsProps;

  return (
    <FormContainer>
      <input placeholder="Digite seu nome" id="name" {...register("name")} />
      <button type="submit">Ver cartas</button>
      {errors.name && <span>{errors.name?.message}</span>}
    </FormContainer>
  );
}
