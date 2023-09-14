import "./Home.css";
import Collections from "./components/Collections/Collections";
import FirstSection from "./components/FirstSection/FirstSection";
import OptionsInfo from "./components/OptionsInfo/OptionsInfo";
export default function Home() {
  return (
    <div>
      <FirstSection />
      <OptionsInfo />
      <Collections />
    </div>
  );
}
