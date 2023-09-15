import "./Home.css";
import Collections from "./components/Collections/Collections";
import FirstSection from "./components/FirstSection/FirstSection";
import LastBlog from "./components/LastBlog/LastBlog";
import OptionsInfo from "./components/OptionsInfo/OptionsInfo";
export default function Home() {
  return (
    <div>
      <FirstSection />
      <OptionsInfo />
      <Collections />
      <LastBlog />
    </div>
  );
}
