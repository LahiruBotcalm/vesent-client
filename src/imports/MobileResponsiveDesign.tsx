import svgPaths from "./svg-8vl4khuy6r";
import clsx from "clsx";
import imgBgGradientImage from "../assets/b265b0ee333198d03ea338748c212699c01db24c.png";
import imgMainImage from "../assets/f0da6c7edf749e4566d6a6b4f2ceee502cf8cb69.png";
import imgObject3 from "../assets/a084fc72fc013d796dce2fed63e81b48f47d891c.png";
import imgObject from "../assets/8a6fed76088bfa16b30bf85c400e6a2e489dc82f.png";
import imgObject1 from "../assets/535bf5feddeaab05bce3d5de2fdf125d63ecb704.png";
import imgObject2 from "../assets/37081e3081844931e63ab5e99a710c03c210d9f2.png";
import imgObject4 from "../assets/63355570c748575b5e1460643fab01f8f8a2b364.png";
import imgObject5 from "../assets/53dfa7107c32faa41defd353c5ebcb0ca228c413.png";
import imgImage3 from "../assets/02a027e113935f527eecfd46c995f9c033ed90d9.png";
import imgObject6 from "../assets/f7ec0ff01ae58ba841978be99445f5aaca76b24d.png";
import imgObject7 from "../assets/aac21cfbc6ac8169a9a218227a7072b5d09cfa74.png";
import imgSuiteDivider from "../assets/58f7d6deced9f07c081071f6a31d900a4b1ed0cc.png";

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[40px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function ContentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-center w-full", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}

function ComponentBackgroundImage() {
  return (
    <div style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 44 44\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(1.3471e-16 2.2 -2.2 1.3471e-16 22 22)\\\'><stop stop-color=\\\'rgba(28,64,181,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(62,94,200,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(95,124,218,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(129,154,237,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(163,184,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} className="content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0">
      <LinearArrowsAltArrowRightBackgroundImage />
    </div>
  );
}

function LinearArrowsAltArrowRightBackgroundImage() {
  return (
    <BackgroundImage1>
      <g id="Linear / Arrows / Alt Arrow Right">
        <path d="M9 5L15 12L9 19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </BackgroundImage1>
  );
}
type ComponentBackgroundImageAndTextProps = {
  text: string;
};

function ComponentBackgroundImageAndText({ text }: ComponentBackgroundImageAndTextProps) {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#252525] text-[14px] text-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#142e82] text-[32px] w-full">{text}</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">{text1}</p>
      </div>
    </div>
  );
}
type InfoBlockBackgroundImageProps = {
  text: string;
  text1: string;
};

function InfoBlockBackgroundImage({ text, text1 }: InfoBlockBackgroundImageProps) {
  return (
    <BackgroundImage2>
      <div className="absolute bg-[#1633b6] h-[220px] left-0 top-0 w-[375px]" data-name="Background" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#8fa9ff] text-[20px] w-[min-content]">{text}</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[76px] min-w-full not-italic relative shrink-0 text-[68px] text-white w-[min-content]">{text1}</p>
    </BackgroundImage2>
  );
}
type BackgroundBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBackgroundImage({ additionalClassNames = "" }: BackgroundBackgroundImageProps) {
  return (
    <div className={clsx("absolute flex h-[15px] items-center justify-center w-[23px]", additionalClassNames)}>
      <div className="flex-none rotate-[180deg]">
        <div className="h-[15px] relative w-[23px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 15">
            <path d={svgPaths.pb8e6480} fill="var(--fill-0, #A3B8FF)" id="Star 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GradientLines() {
  return (
    <div className="absolute h-[626px] left-1/2 top-[calc(50%+14px)] translate-x-[-50%] translate-y-[-50%] w-[375px]" data-name="Gradient Lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 626">
        <g id="Gradient Lines">
          <line id="Line 1" stroke="url(#paint0_linear_1_1310)" x1="20.5" x2="20.5" y1="2.18557e-08" y2="626" />
          <line id="Line 3" stroke="url(#paint1_linear_1_1310)" x1="188" x2="188" y1="2.18557e-08" y2="626" />
          <line id="Line 2" stroke="url(#paint2_linear_1_1310)" x1="355.5" x2="355.5" y1="2.18557e-08" y2="626" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1310" x1="19.5" x2="19.5" y1="-2.18557e-08" y2="626">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1310" x1="187" x2="187" y1="-2.18557e-08" y2="626">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1310" x1="354.5" x2="354.5" y1="-2.18557e-08" y2="626">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[810px] left-0 top-0 w-[375px]" data-name="Background">
      <div className="absolute h-[811px] left-1/2 top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[375px]" data-name="BG Gradient Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.64%] left-[-160.89%] max-w-none top-[-6.38%] w-[421.52%]" src={imgBgGradientImage} />
        </div>
      </div>
      <GradientLines />
    </div>
  );
}

function TaglineContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Tagline Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#acacac] text-[12px] text-nowrap">Risk Intelligence for the Digital World</p>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-full" data-name="Description Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[40px] relative shrink-0 text-[0px] text-[32px] w-full">
        <p className="mb-0">
          <span className="text-[#a3b8ff]">{`Enterprise `}</span>
          <span className="text-[#a3b8ff]">Compliance</span>
          <span>{` Platform`}</span>
        </p>
        <p>for High Risk Industries</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[20px]">Real time AML screening, fraud prevention, and intelligent case management. Built for gaming, crypto, and fintech companies that demand institutional grade compliance.</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TaglineContainer />
      <DescriptionContainer />
    </div>
  );
}

function ViewFeaturesButtonContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="View Features Button Container">
      <div aria-hidden="true" className="absolute border border-[#a3b8ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#a3b8ff] text-[14px] text-nowrap">View Features</p>
    </div>
  );
}

function ScheduleDemoButtonContainer() {
  return (
    <div className="bg-[#a3b8ff] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Schedule Demo Button Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] text-nowrap">Schedule Demo</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Buttons Container">
      <ViewFeaturesButtonContainer />
      <ScheduleDemoButtonContainer />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="bg-[#011611] content-stretch flex flex-col h-[175px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[335px]" data-name="Image Container">
      <div className="aspect-[1920/994] relative rounded-[12px] shrink-0 w-full" data-name="Main Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgMainImage} />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-0 px-[16px] py-0 top-[139px] w-[375px]" data-name="Content">
      <TextContainer />
      <ButtonsContainer />
      <ImageContainer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[810px] relative shrink-0 w-[375px]" data-name="Hero Section">
      <Background />
      <Content />
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Content">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[56px] pt-0 px-[20px] relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#767676] text-[14px] text-nowrap">ABOUT US</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] min-w-full not-italic relative shrink-0 text-[#252525] text-[0px] text-[28px] w-[min-content]">
          <span>{`VESANT, `}</span>
          <span className="text-[#b0b0b0]">we offer advanced solutions for high-risk industries. Our compliance platform streamlines regulatory processes, helping businesses meet strict standards while reducing risks. With our innovative tools and expert support, we enable organizations to confidently navigate complex regulations.</span>
        </p>
        <div className="absolute bottom-0 flex h-[625px] items-center justify-center left-1/2 translate-x-[-50%] w-[949px]">
          <div className="flex-none rotate-[180deg]">
            <div className="h-[625px] relative w-[949px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 625">
                <path d={svgPaths.pf187500} fill="var(--fill-0, #DDDDDD)" id="Star 4" opacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock() {
  return (
    <BackgroundImage2>
      <div className="absolute bg-[#a3b8ff] h-[220px] left-0 top-0 w-[375px]" data-name="Background" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#142e82] text-[20px] w-[min-content]">Response Time</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[76px] min-w-full not-italic relative shrink-0 text-[68px] text-white w-[min-content]">99.9%</p>
    </BackgroundImage2>
  );
}

function BlockWraper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Block Wraper">
      <InfoBlockBackgroundImage text="Uptime SLA" text1="99.9%" />
      <InfoBlock />
      <InfoBlockBackgroundImage text="Monitoring" text1="24/7" />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[56px] px-0 relative shrink-0 w-[375px]" data-name="About Us">
      <TextContent />
      <BlockWraper />
    </div>
  );
}

function CasinoCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[460px] items-start overflow-clip p-[24px] relative shrink-0 w-[343px]" data-name="Casino Card">
      <div className="absolute bg-gradient-to-b from-[43.75%] from-white h-[460px] left-0 to-[#a3b8ff] top-0 w-[343px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">{`Casinos & Online Gaming`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Comprehensive player verification, geolocation enforcement, and responsible gaming controls to meet jurisdiction requirements worldwide.</p>
      <div className="absolute h-[179px] left-[calc(50%+109px)] top-[calc(50%+140.5px)] translate-x-[-50%] translate-y-[-50%] w-[167px]" data-name="Object 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[123.04%] left-0 max-w-none top-0 w-[146.99%]" src={imgObject3} />
        </div>
      </div>
      <div className="absolute bottom-px h-[122px] left-[-23px] w-[160px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.63%] left-[-68.15%] max-w-none top-0 w-[168.15%]" src={imgObject} />
        </div>
      </div>
    </div>
  );
}

function CryptocurrencyCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[460px] items-start overflow-clip p-[24px] relative shrink-0 w-[343px]" data-name="Cryptocurrency Card">
      <div className="absolute bg-gradient-to-b from-[43.75%] from-white h-[460px] left-0 to-[#a3b8ff] top-0 w-[343px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">Cryptocurrency</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.</p>
      <div className="absolute h-[138px] left-[-21px] top-[322px] w-[142px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.07%] left-[-71.56%] max-w-none top-[-9.25%] w-[185.94%]" src={imgObject1} />
        </div>
      </div>
      <div className="absolute h-[153px] right-0 top-[307px] w-[117px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[103.35%] left-0 max-w-none top-[-0.11%] w-[144.53%]" src={imgObject2} />
        </div>
      </div>
    </div>
  );
}

function FintechPaymentsCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[460px] items-start overflow-clip p-[24px] relative shrink-0 w-[343px]" data-name="Fintech & Payments Card">
      <div className="absolute bg-gradient-to-b from-[43.75%] from-white h-[460px] left-0 to-[#a3b8ff] top-0 w-[343px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">{`Fintech & Payments`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.</p>
      <div className="absolute h-[162px] left-[-30px] top-[298px] w-[147px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.4%] left-[-30.29%] max-w-none top-[0.28%] w-[130.09%]" src={imgObject4} />
        </div>
      </div>
      <div className="absolute bottom-[-6px] h-[147px] right-[-40px] w-[148px]" data-name="Object">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[94.67%] left-[9.56%] max-w-none top-[-13.1%] w-[152.1%]" src={imgObject5} />
        </div>
      </div>
    </div>
  );
}

function IndustryContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Industry Container">
      <CasinoCard />
      <CryptocurrencyCard />
      <FintechPaymentsCard />
    </div>
  );
}

function ActiveIndicators() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative" data-name="Active Indicators">
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#142e82] h-[3px] rounded-[999px] shrink-0 w-[29px]" />
    </div>
  );
}

function IndustryContainerWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="Industry Container Wrapper">
      <IndustryContainer />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ActiveIndicators />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <ContentBackgroundImage>
      <BackgroundImage text="Built for Regulated Industries" text1="Real time AML screening, fraud prevention, and intelligent case management. Built for gaming, crypto, and fintech companies that demand institutional grade compliance." />
      <IndustryContainerWrapper />
    </ContentBackgroundImage>
  );
}

function Industries() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[40px] pt-[56px] px-0 relative shrink-0 w-full" data-name="Industries">
      <Content1 />
    </div>
  );
}

function Frame1() {
  return (
    <BackgroundImage3>
      <g id="Frame 1">
        <path d={svgPaths.p30f5690} fill="url(#paint0_radial_1_1320)" />
        <circle cx="32" cy="32" fill="var(--fill-0, #11276E)" id="Ellipse 3" r="24" />
        <g id="Outline / List / Checklist Minimalistic">
          <path clipRule="evenodd" d={svgPaths.p27882f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(32 32) rotate(90) scale(32)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1320" r="1">
          <stop stopColor="#142E82" />
          <stop offset="1" stopColor="#90A7F7" />
        </radialGradient>
      </defs>
    </BackgroundImage3>
  );
}

function Component() {
  return (
    <div className="h-[284px] relative shrink-0 w-full" data-name="Component 1">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <div className="absolute bg-[#1633b6] h-[284px] left-0 top-0 w-[343px]" />
        <Frame1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">
          <p className="leading-[24px]">AML Watchlist Screening</p>
        </div>
        <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
          <p className="leading-[20px]">Integrated sanctions and PEP screening powered by licensed third-party data providers. Real-time checks against global watchlists to identify high risk entities.</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <BackgroundImage3>
      <g id="Frame 2">
        <path d={svgPaths.p30f5690} fill="url(#paint0_radial_1_1273)" />
        <circle cx="32" cy="32" fill="var(--fill-0, #A3B8FF)" id="Ellipse 3" r="24" />
        <g id="Outline / List / Checklist">
          <path clipRule="evenodd" d={svgPaths.p12b71480} fill="var(--fill-0, #142E82)" fillRule="evenodd" id="Vector" />
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(32 32) rotate(90) scale(32)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1273" r="1">
          <stop stopColor="#90A7F7" />
          <stop offset="1" stopColor="#1B3DAC" />
        </radialGradient>
      </defs>
    </BackgroundImage3>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <div className="absolute bg-[#a3b8ff] h-[284px] left-0 top-0 w-[343px]" />
        <Frame2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[20px] w-[min-content]">
          <p className="leading-[24px]">Fraud Management</p>
        </div>
        <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
          <p className="leading-[20px]">Real-time fraud prevention through internal and external fraud detection services. Evaluate transactions and user activities for fraud risk with instant decisioning.</p>
        </div>
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card Container">
      <Component />
      <Component1 />
    </div>
  );
}

function ActiveIndicators1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Active Indicators">
      <div className="bg-[#142e82] h-[3px] rounded-[999px] shrink-0 w-[29px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
      <div className="bg-[#dbdbdb] h-[3px] rounded-[999px] shrink-0 w-[20px]" />
    </div>
  );
}

function CardContainerWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="Card Container Wrapper">
      <CardContainer />
      <ActiveIndicators1 />
    </div>
  );
}

function Content2() {
  return (
    <ContentBackgroundImage>
      <BackgroundImage text="Comprehensive Compliance Suite" text1="Everything you need to manage risk, conduct investigations, and maintain regulatory compliance" />
      <CardContainerWrapper />
    </ContentBackgroundImage>
  );
}

function ComplianceSuits() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Compliance Suits">
      <Content2 />
    </div>
  );
}

function TitileAndSubTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Titile and Sub Title">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#142e82] text-[32px] w-full">
        <p className="mb-0">Intelligent Compliance Solutions Powered</p>
        <p>by AI</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">{`Ask questions in plain English. VESANT's embedded GPT interface translates natural language into structured queries across your entire compliance dataset. Available on every page, the AI assistant provides instant analysis, retrieves records, and delivers context-aware insights all while maintaining complete data isolation between clients.`}</p>
      </div>
    </div>
  );
}

function SubParagraphContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Sub Paragraph Content">
      <div className="flex h-[21px] items-center justify-center relative shrink-0 w-[6px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-gradient-to-l from-[#a3b8ff] h-[6px] rounded-[999px] to-[#142e82] w-[21px]" data-name="Sub Paragraph Background" />
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#252525] text-[20px]">
        <p className="leading-[24px]">Enterprise-Grade Data Security</p>
      </div>
    </div>
  );
}

function SubParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Sub Paragraph">
      <SubParagraphContent />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">Your data is strictly isolated. Other clients cannot access your information, and OpenAI does not use your data for model training. Complete privacy and confidentiality guaranteed.</p>
      </div>
    </div>
  );
}

function IntelligenceContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Intelligence Content">
      <TitileAndSubTitle />
      <SubParagraph />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] min-w-full relative shrink-0 text-[28px] w-[min-content]">Example Queries</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] w-[212px]">
        <p className="leading-[20px]">Explore some sample queries to quickly understand the types of insights you can retrieve from the system.</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 6">
      <ComponentBackgroundImageAndText text="Show me all high-risk customers from the last 7 days" />
      <ComponentBackgroundImage />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 10">
      <ComponentBackgroundImageAndText text="How many AML alerts are pending investigation?" />
      <ComponentBackgroundImage />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 11">
      <ComponentBackgroundImageAndText text="Summarize fraud trends by transaction type this month" />
      <ComponentBackgroundImage />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 12">
      <ComponentBackgroundImageAndText text="Which jurisdictions have the highest KYC failure rates?" />
      <ComponentBackgroundImage />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function IntelligenceImageContainer() {
  return (
    <div className="bg-white h-[469px] relative shrink-0 w-full" data-name="Intelligence Image Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <div className="absolute h-[469px] left-0 top-0 w-[343px]" style={{ backgroundImage: "linear-gradient(270deg, rgb(255, 255, 255) 38.942%, rgb(163, 184, 255) 100%), linear-gradient(270deg, rgb(255, 255, 255) 38.942%, rgb(175, 222, 180) 100%)" }} />
          <div className="absolute h-[131px] opacity-80 right-0 top-0 w-[97px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[143.36%]" src={imgImage3} />
            </div>
          </div>
          <Frame11 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <ContentBackgroundImage>
      <IntelligenceContent />
      <IntelligenceImageContainer />
    </ContentBackgroundImage>
  );
}

function Inteliganace() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Inteliganace">
      <Content3 />
    </div>
  );
}

function InquiryTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full" data-name="Inquiry Text Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#142e82] text-[28px] w-full">Ready to Transform Your Compliance Operations?</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">See how VESANT.AI can streamline your compliance workflows and reduce risk.</p>
      </div>
    </div>
  );
}

function ScheduleDemoButtonContainer1() {
  return (
    <div className="bg-[#142e82] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Schedule Demo Button Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Schedule Your Demo</p>
    </div>
  );
}

function InquirySection() {
  return (
    <div className="h-[504px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Inquiry Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[112px] pt-[40px] px-[32px] relative size-full">
          <div className="absolute bg-gradient-to-b from-[rgba(163,184,255,0)] h-[504px] left-1/2 to-[#a3b8ff] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[343px]" data-name="Background" />
          <InquiryTextContainer />
          <ScheduleDemoButtonContainer1 />
          <div className="absolute bottom-[-23px] h-[177px] right-0 w-[87px]" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[142.07%]" src={imgObject6} />
            </div>
          </div>
          <div className="absolute bottom-[-23px] h-[177px] left-0 w-[87px]" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-28.78%] max-w-none top-0 w-[128.78%]" src={imgObject7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[163px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 48">
        <g id="logo">
          <path d={svgPaths.p119acbc0} fill="url(#paint0_linear_1_1278)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1278" x1="0.000360965" x2="179.397" y1="23.9325" y2="68.8871">
            <stop stopColor="#1E45C5" />
            <stop offset="1" stopColor="#0E215F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Logo">
      <Logo />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] text-center w-[min-content]">
        <p className="leading-[20px]">Enterprise-grade compliance and risk management platform for gaming, crypto, and fintech companies.</p>
      </div>
    </div>
  );
}

function AddressIcon() {
  return (
    <BackgroundImage4>
      <g id="Address Icon">
        <path clipRule="evenodd" d={svgPaths.p24852e00} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
      </g>
    </BackgroundImage4>
  );
}

function AddressContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Address Container">
      <AddressIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">105 E. Reno Ave., Suite 8, Las Vegas, NV 89119.</p>
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <BackgroundImage4>
      <g id="Email Icon">
        <path clipRule="evenodd" d={svgPaths.p2499c900} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
      </g>
    </BackgroundImage4>
  );
}

function EmailContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Email Container">
      <EmailIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">info@vesant.ai</p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <BackgroundImage4>
      <g id="Phone Icon">
        <path clipRule="evenodd" d={svgPaths.p386b8620} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector (Stroke)" />
      </g>
    </BackgroundImage4>
  );
}

function PhoneContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Phone Container">
      <PhoneIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">+1 (410) 302-7987</p>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contact Details">
      <AddressContainer />
      <EmailContainer />
      <PhoneContainer />
    </div>
  );
}

function LogoAndDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Logo and Description">
      <Logo1 />
      <ContactDetails />
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black text-nowrap" data-name="Legal Links">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Legal</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Privacy Policy</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Terms of Service</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Compliance</p>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[164px] items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black text-nowrap" data-name="Quick Links">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Quick Links</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Industries</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Features</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Solution</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Links">
      <LegalLinks />
      <QuickLinks />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Contact Info">
      <LogoAndDescription />
      <Links />
    </div>
  );
}

function LucideLinkedin() {
  return (
    <BackgroundImage1>
      <g id="lucide/linkedin">
        <g id="Vector">
          <path d={svgPaths.p30958080} stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 9H2V21H6V9Z" stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1bb3a100} stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </g>
    </BackgroundImage1>
  );
}

function LucideFacebook() {
  return (
    <BackgroundImage1>
      <g id="lucide/facebook">
        <path d={svgPaths.p3d19f300} id="Vector" stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </BackgroundImage1>
  );
}

function SocialIcons() {
  return (
    <BackgroundImage1>
      <g id="Social Icons">
        <path d={svgPaths.p38a22b70} fill="var(--fill-0, #142E82)" id="Vector" />
      </g>
    </BackgroundImage1>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Social Media Icons">
      <LucideLinkedin />
      <LucideFacebook />
      <SocialIcons />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer Bottom">
      <SocialMediaIcons />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">2025 VESANT.AI © All Rights Reserved</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Footer">
      <ContactInfo />
      <div className="h-px relative shrink-0 w-full" data-name="Suite Divider">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuiteDivider} />
      </div>
      <FooterBottom />
    </div>
  );
}

function FooterWithInquiry() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer with Inquiry">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-[32px] pt-[40px] px-[16px] relative w-full">
        <InquirySection />
        <Footer />
      </div>
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Sections">
      <HeroSection />
      <AboutUs />
      <Industries />
      <ComplianceSuits />
      <Inteliganace />
      <FooterWithInquiry />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[39px] relative shrink-0 w-[133px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 39">
        <g id="logo">
          <path d={svgPaths.p32ef5400} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function OutlineEssentionalUiHamburgerMenu() {
  return (
    <BackgroundImage1>
      <g id="Outline / Essentional, UI / Hamburger Menu">
        <path clipRule="evenodd" d={svgPaths.p5873732} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        <path clipRule="evenodd" d={svgPaths.p29e52f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        <path clipRule="evenodd" d={svgPaths.pbf5fd00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
      </g>
    </BackgroundImage1>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0">
      <OutlineEssentionalUiHamburgerMenu />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 px-[20px] py-[12px] top-[44px] translate-x-[-50%] w-[375px]" data-name="Header">
      <Logo2 />
      <Frame3 />
    </div>
  );
}

function UrlBar() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[34px] items-center justify-end left-1/2 pb-[8px] pt-[21px] px-[121px] translate-x-[-50%] w-[375px]" data-name="URL Bar">
      <div className="bg-white h-[5px] rounded-[100px] shrink-0 w-[133px]" data-name="Home Indicator" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 size-[32px]" data-name="Frame">
      <BackgroundImageAndText text="􀄪" additionalClassNames="text-[#747577] text-[24px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-[32px]" data-name="Frame">
      <BackgroundImageAndText text="􀄪" additionalClassNames="text-[#e7eaed] text-[24px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#5e6367] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[25px] shrink-0 size-[37px]" data-name="Frame">
      <BackgroundImageAndText text="􀅼" additionalClassNames="text-[#dadce0] text-[22px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute border-[#e7eaed] border-[2.5px] border-solid left-[calc(50%-0.5px)] overflow-clip rounded-[7px] size-[25px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-[9.5px] text-[#e7eaed] text-[12px] text-center text-nowrap top-[9.5px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Frame">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p3cfe6500} fill="var(--fill-0, #E7EAED)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[3.5px] w-[343px]" data-name="Frame">
      <Frame />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame4 />
        </div>
      </div>
      <Frame5 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function ChromeControlBars() {
  return (
    <div className="absolute bg-[#343739] border-[#030405] border-[0.5px_0px_0px] border-solid inset-0 overflow-clip" data-name="Chrome Control Bars">
      <UrlBar />
      <Frame9 />
    </div>
  );
}

function ChromeControlBars1() {
  return (
    <div className="absolute bottom-0 h-[79px] left-0 w-[375px]" data-name="Chrome Control Bars">
      <ChromeControlBars />
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute h-[34px] left-[108px] top-[-2px] w-[159px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 34">
        <g id="Notch">
          <path d={svgPaths.p2c731200} fill="var(--fill-0, black)" id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6614 11.3362">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p284dc240} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3b01f0e0} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p2a5bf740} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.pc434800} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.p28a9ed00} fill="var(--fill-0, white)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IPhoneXOrNewerLightDefault() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="iPhone X (or newer)/Light/Default">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default function MobileResponsiveDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile Responsive Design">
      <ChromeControlBars1 />
      <IPhoneXOrNewerLightDefault />
      <Sections />
      <Header />
    </div>
  );
}