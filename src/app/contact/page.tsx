import NavigationBar from "../components/navigation/navigationBar";
import Footer from "../components/navigation/footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen py-2 px-12 gap-16 font-geist-sans">
      <NavigationBar/>
      <Footer />
    </div>
  );
}