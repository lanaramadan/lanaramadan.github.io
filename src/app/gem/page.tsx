import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

export default async function GemPage() {
  return (
    <div className="bg-background p-32 pb-8 w-full">
      <NavigationBar background={true} />
      <div className="flex flex-col">
        <img
          src="/case-studies/gem/cover.png"
          alt="cover"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/info.png"
          alt="info"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/users.png"
          alt="users"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/analysis.png"
          alt="analysis"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/solution.png"
          alt="solution"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Wireframes Title.png"
          alt="Wireframes"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Wireframes.png"
          alt="Wireframes"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Testing.png"
          alt="Testing"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Style Guide.png"
          alt="STyle Guide"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Final Prototype Title.png"
          alt="Final Prototype"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <div className="w-full flex justify-center">
          <iframe
            src="https://embed.figma.com/proto/WtTzpCPMbwdoD1fKm73TUD/GEM-Wireframes?content-scaling=fixed&kind=proto&node-id=276-5103&page-id=1%3A9&scaling=scale-down&starting-point-node-id=276%3A5103&embed-host=share"
            width="100%"
            height="750px"
            allowFullScreen
            title="GEM Wireframes"
          ></iframe>
        </div>

        <img
          src="/case-studies/gem/Highlights.png"
          alt="Highlights"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/gem/Takeaways.png"
          alt="Takeaways"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />
      </div>

      <Footer mini={true} color="text-[#065143]" />
    </div>
  );
}
