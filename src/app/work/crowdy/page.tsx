import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

export default async function CrowdyPage() {
  return (
    <div className="bg-background p-32 pb-8 w-full">
      <NavigationBar background={true} />
      <div className="flex flex-col">
        <img
          src="/case-studies/crowdy/cover.png"
          alt="cover"
          style={{ width: "100%", height: "auto" }}
          className="w-screen"
        />

        <div className="w-full flex justify-center">
          <iframe
            src="https://embed.figma.com/proto/GL6q2IfFhYaQcFMhyxDBhp/Crowd-Checker-Wireframes?content-scaling=fixed&kind=proto&node-id=165-2124&page-id=95%3A1663&scaling=scale-down&starting-point-node-id=165%3A2079&embed-host=share"
            width="100%"
            height="750px"
            allowFullScreen
            title="crowdy Wireframes"
          ></iframe>
        </div>
      </div>

      <Footer mini={true} />
    </div>
  );
}
