import { useRouter } from "next/router";

export default function ActivePage() {

  const router = useRouter()
  const { slug, name } = router.query
  return (
    <>
      <h1>Active Email Page: {slug}</h1>
      <h2>{name}</h2>
    </>
  );
}