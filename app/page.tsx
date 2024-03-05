import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="ComputerPartsAssistants"
          agent-id="cb9d67f5-716a-4bed-92cb-d06775ecd178"
          language-code="th"
        ></df-messenger>
      </div>
    </main>
  );
}
