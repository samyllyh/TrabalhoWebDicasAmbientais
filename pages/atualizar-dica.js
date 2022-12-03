import Header from "../components/header";
import Form from "../components/form";
import { useRouter } from "next/router";

export default function AtualizarDica() {
  const router = useRouter();
  const { title, content } = router.query;

  return (
    <>
      <Header title="ATUALIZAR DICA" />
      <Form title={title} content={content} />
    </>
  );
}
