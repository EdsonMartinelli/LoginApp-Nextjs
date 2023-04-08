import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1> Foi, teste</h1>
     
      <Link
        href={{
          pathname: "/login",
          query: {
            name: "teste pra ver se vai",
          },
        }}
        as={"/login"}
      >
        Teste
      </Link>

      <Link
        href={{
          pathname: "/active/123",
          query: {
            name: "teste de slug",
          },
        }}
        as={"/active/123"}
      >
        Slug
      </Link>
    </>
  );
}
