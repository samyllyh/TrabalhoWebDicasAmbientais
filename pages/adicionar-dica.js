import Header from "../components/header";
import Form from "../components/form";

export default function AdicionarDica() {
  return (
    <>
      <Header title="ADICIONAR DICA" />
      <Form isAdd={true} />
    </>
  );
}
