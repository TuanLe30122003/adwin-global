import Container from "@/components/Container";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div className="min-h-[100vh] w-full background-effect-1">
      <Container className="pt-[130px]">
        <h1 className="font-orbitron">{t("title")}</h1>
      </Container>
    </div>
  );
}
