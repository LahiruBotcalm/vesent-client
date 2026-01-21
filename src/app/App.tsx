import LandingPageDesign from "../imports/LandingPageDesign";
import MobileResponsiveDesign from "../imports/MobileResponsiveDesign";

export default function App() {
  return (
    <div className="size-full">
      {/* Desktop version - hidden on mobile and tablet */}
      <div className="hidden lg:block size-full overflow-auto">
        <LandingPageDesign />
      </div>
      
      {/* Mobile version - shown on mobile and tablet, hidden on desktop */}
      <div className="block lg:hidden size-full overflow-auto">
        <MobileResponsiveDesign />
      </div>
    </div>
  );
}
