import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { Form, Header } from "../../components";
import { HomeContainer } from "./style";

export type IConfirmFormData = zod.infer<typeof confirmFormValidationSchema>;

const confirmFormValidationSchema = zod.object({
  name: zod
    .string()
    .min(3, "Nome é obrigatório e precisa ter no mínimo 3 caracteres"),
});

export function Home() {
  const confirmForm = useForm<IConfirmFormData>({
    resolver: zodResolver(confirmFormValidationSchema),
  });

  const { handleSubmit } = confirmForm;
  const navigate = useNavigate();

  function handleConfirm(data: IConfirmFormData) {
    navigate("/cards", {
      state: data,
    });
  }

  return (
    <>
      <Header />
      <HomeContainer onSubmit={handleSubmit(handleConfirm)}>
        <FormProvider {...confirmForm}>
          <Form />
        </FormProvider>
      </HomeContainer>
    </>
  );
}
