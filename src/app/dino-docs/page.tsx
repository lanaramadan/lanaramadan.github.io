import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

export default async function DinoDocsPage() {
  return (
    <div className="bg-background p-32 pb-8 w-full">
      <NavigationBar background={true} color="text-[#80C079]" />
      <div className="flex flex-col">
        <img
          src="/case-studies/dino-docs/cover.png"
          alt="cover"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/info.png"
          alt="info"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/users.png"
          alt="users"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/stories.png"
          alt="user stories"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/ideation.png"
          alt="ideation"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/mindmap.png"
          alt="mindmap"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/Style Guide.png"
          alt="Style Guide"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/Final Prototype.png"
          alt="Final Prototype"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <div className="w-full flex justify-center">
          <iframe
            src="https://embed.figma.com/proto/YAGECqVZXlQFc7bTiQh8Q7/Dino-Docs?content-scaling=fixed&kind=proto&node-id=15-324&page-id=0%3A1&scaling=scale-down&starting-point-node-id=15%3A324&embed-host=share"
            width="100%"
            height="750px"
            allowFullScreen
            title="dino-docs Wireframes"
          ></iframe>
        </div>

        <img
          src="/case-studies/dino-docs/Highlights.png"
          alt="Highlights"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/dino-docs/next.png"
          alt="Takeaways"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />
      </div>

      <Footer mini={true} color="text-[#80C079]" />
    </div>
  );
}
