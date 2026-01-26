import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

export default async function AnywearPage() {
  return (
    <div className="bg-background p-32 pb-8 w-full">
      <NavigationBar background={true} />
      <div className="flex flex-col">
        <img
          src="/case-studies/anywear/cover.png"
          alt="cover"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/info.png"
          alt="info"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/users.png"
          alt="users"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/personas.png"
          alt="personas"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/analysis.png"
          alt="analysis"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/wireframes.png"
          alt="wireframes"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/midfi.png"
          alt="midfi"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/Style Guide.png"
          alt="style guide"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <img
          src="/case-studies/anywear/Final Prototype.png"
          alt="Final Prototype"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <div className="w-full flex justify-center">
          <iframe
            src="https://embed.figma.com/proto/FHS4fSMjDNU4usAxLIR2tK/AnyWear-Wireframes?content-scaling=fixed&kind=proto&node-id=855-135&page-id=&scaling=scale-down&starting-point-node-id=855%3A135&embed-host=share"
            width="100%"
            height="750px"
            allowFullScreen
            title="anywear Wireframes"
          ></iframe>
        </div>

        <img
          src="/case-studies/anywear/next.png"
          alt="What's next"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />
      </div>

      <Footer mini={true} color="text-[#7E5443]" />
    </div>
  );
}
