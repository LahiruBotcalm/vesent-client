import svgPaths from "./svg-tcml84to6n";
import clsx from "clsx";
import imgObject from "../assets/aac21cfbc6ac8169a9a218227a7072b5d09cfa74.png";
import imgObject1 from "../assets/f7ec0ff01ae58ba841978be99445f5aaca76b24d.png";
import imgSuiteDivider from "../assets/c53b1279c5a8cb34566b3902fc1a1290588fb326.png";
import imgBgGradientImage from "../assets/b265b0ee333198d03ea338748c212699c01db24c.png";
import imgMainImage from "../assets/f0da6c7edf749e4566d6a6b4f2ceee502cf8cb69.png";
import imgImage9 from "../assets/b17883d51d02e4722577b837ba7e06582814d20a.png";
import imgObject3 from "../assets/a084fc72fc013d796dce2fed63e81b48f47d891c.png";
import imgObject2 from "../assets/8a6fed76088bfa16b30bf85c400e6a2e489dc82f.png";
import imgImage10 from "../assets/bf99d2208c7795f3e2c4c516441c7d13c517f25e.png";
import imgObject4 from "../assets/535bf5feddeaab05bce3d5de2fdf125d63ecb704.png";
import imgObject5 from "../assets/37081e3081844931e63ab5e99a710c03c210d9f2.png";
import imgImage11 from "../assets/1d1ebc35c4097e8ac092df7b28f89a60497d9865.png";
import imgObject6 from "../assets/63355570c748575b5e1460643fab01f8f8a2b364.png";
import imgImage3 from "../assets/02a027e113935f527eecfd46c995f9c033ed90d9.png";
import imgIntelligenceImageBackground from "../assets/c861cd79bcb3cbacad64a2865bc634ca39128d3c.png";

function CardDesigns3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[460px] relative shrink-0 w-[426px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[32px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Helper5() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
        <IntelligenceImageContainerImage />
      </div>
    </div>
  );
}

function IntelligenceImageContainerImage() {
  return (
    <div className="h-px relative w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIntelligenceImageBackground} />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative rounded-[999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <LinearArrowsAltArrowRight />
    </div>
  );
}

function LinearArrowsAltArrowRight() {
  return (
    <Wrapper>
      <g id="Linear / Arrows / Alt Arrow Right">
        <path d="M9 5L15 12L9 19" id="Vector" stroke="var(--stroke-0, #CDCDCD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </Wrapper>
  );
}
type Component6InputfieldDefaultTextProps = {
  text: string;
};

function Component6InputfieldDefaultText({ text }: Component6InputfieldDefaultTextProps) {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between px-[16px] py-[12px] relative rounded-[999px] shrink-0 w-[404px]">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#252525] text-[14px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type Helper4Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper4({ text, text1, additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] items-start px-[32px] relative size-full", additionalClassNames)}>
      <div className="absolute bg-white h-[320px] left-0 top-0 w-[426px]" />
      <Helper3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[24px] w-[min-content]">
        <p className="leading-[32px]">{text}</p>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
        <p className="leading-[20px]">{text1}</p>
      </div>
    </div>
  );
}

function Helper3() {
  return (
    <Wrapper1>
      <g id="Frame 1">
        <rect fill="url(#paint0_radial_1_1177)" height="72" rx="36" width="72" />
        <circle cx="36" cy="36" fill="var(--fill-0, white)" id="Ellipse 3" r="28" />
        <g id="Outline / List / Checklist">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p14a63d00} fill="var(--fill-0, #095141)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14a63d00} fill="var(--fill-1, #142E82)" fillRule="evenodd" />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(36 36) rotate(90) scale(36)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1177" r="1">
          <stop stopColor="#90A7F7" />
          <stop offset="1" stopColor="#1B3DAC" />
        </radialGradient>
      </defs>
    </Wrapper1>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper2({ text, text1, additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] items-start px-[32px] relative size-full", additionalClassNames)}>
      <div className="absolute bg-white h-[320px] left-0 top-0 w-[426px]" />
      <Helper1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[24px] w-[min-content]">
        <p className="leading-[32px]">{text}</p>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
        <p className="leading-[20px]">{text1}</p>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <Wrapper1>
      <g id="Frame 1">
        <rect fill="url(#paint0_radial_1_1154)" height="72" rx="36" width="72" />
        <circle cx="36" cy="36" fill="var(--fill-0, white)" id="Ellipse 3" r="28" />
        <g id="Outline / List / Checklist Minimalistic">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1ee4e760} fill="var(--fill-0, #095141)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1ee4e760} fill="var(--fill-1, #142E82)" fillRule="evenodd" />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(36 36) rotate(90) scale(36)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1154" r="1">
          <stop stopColor="#142E82" />
          <stop offset="1" stopColor="#90A7F7" />
        </radialGradient>
      </defs>
    </Wrapper1>
  );
}
type CardDesigns2ObjectImageProps = {
  additionalClassNames?: string;
};

function CardDesigns2ObjectImage({ additionalClassNames = "" }: CardDesigns2ObjectImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[104.4%] left-[-30.29%] max-w-none top-[0.28%] w-[130.09%]" src={imgObject6} />
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] not-italic relative shrink-0 w-full", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] sm:leading-[56px] lg:leading-[64px] min-w-full relative shrink-0 text-[#142e82] text-[32px] sm:text-[48px] lg:text-[56px] w-[min-content]">{text}</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] w-full max-w-[776px]">
        <p className="leading-[24px]">{text1}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#a3b8ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#a3b8ff] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundHelperProps = {
  additionalClassNames?: string;
};

function BackgroundHelper({ additionalClassNames = "" }: BackgroundHelperProps) {
  return (
    <div className={clsx("absolute flex h-[20.684px] items-center justify-center w-[31.385px]", additionalClassNames)}>
      <div className="flex-none rotate-[180deg]">
        <div className="h-[20.684px] relative w-[31.385px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.3849 20.6836">
            <path d={svgPaths.p2a1e2c80} fill="var(--fill-0, #A3B8FF)" id="Star 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SuiteDividerImage() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuiteDivider} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#142e82] content-stretch flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] sm:leading-[64px] relative shrink-0 text-[#142e82] text-[36px] sm:text-[56px] w-full max-w-[910px] px-4">Ready to Transform Your Compliance Operations?</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[29px] justify-center leading-[0] relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">See how VESANT.AI can streamline your compliance workflows and reduce risk.</p>
      </div>
    </div>
  );
}

function InquirySection() {
  return (
    <div className="h-[342px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Inquiry Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[40px] relative size-full">
          <div className="absolute bg-gradient-to-b from-[19.231%] from-[rgba(163,184,255,0)] h-[342px] left-1/2 to-[#a3b8ff] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1280px]" data-name="Background" />
          <Frame />
          <Text text="Schedule Your Demo" additionalClassNames="px-[20px]" />
          <div className="absolute flex h-[317.837px] items-center justify-center left-[-215.24px] top-[59.58px] w-[212.478px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[345deg]">
              <div className="h-[291px] relative w-[142px]" data-name="Object">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-28.78%] max-w-none top-0 w-[128.78%]" src={imgObject} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[321.201px] items-center justify-center left-[1279.98px] top-[58.9px] w-[225.035px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[15deg]">
              <div className="h-[291px] relative w-[155px]" data-name="Object">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[142.07%]" src={imgObject1} />
                </div>
              </div>
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
          <path d={svgPaths.p119acbc0} fill="url(#paint0_linear_1_1208)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1208" x1="0.000360965" x2="179.397" y1="23.9325" y2="68.8871">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
        <p className="leading-[20px]">Enterprise-grade compliance and risk management platform for gaming, crypto, and fintech companies.</p>
      </div>
    </div>
  );
}

function AddressIcon() {
  return (
    <Wrapper2>
      <g id="Address Icon">
        <path clipRule="evenodd" d={svgPaths.p24852e00} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Address">
      <AddressIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">105 E. Reno Ave., Suite 8, Las Vegas, NV 89119.</p>
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <Wrapper2>
      <g id="Email Icon">
        <path clipRule="evenodd" d={svgPaths.p2499c900} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Email">
      <EmailIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">info@vesant.ai</p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <Wrapper2>
      <g id="Phone Icon">
        <path clipRule="evenodd" d={svgPaths.p386b8620} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector (Stroke)" />
      </g>
    </Wrapper2>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Phone">
      <PhoneIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[20px]">+1 (410) 302-7987</p>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Contact Details">
      <Address />
      <Email />
      <Phone />
    </div>
  );
}

function LogoAndDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[393px]" data-name="Logo and Description">
      <Logo1 />
      <ContactDetails />
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap" data-name="Legal Links">
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
    <div className="content-stretch flex flex-col h-[164px] items-start justify-between leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap" data-name="Quick Links">
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
    <div className="content-stretch flex gap-[106px] items-start relative shrink-0" data-name="Links">
      <LegalLinks />
      <QuickLinks />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Contact Info">
      <LogoAndDescription />
      <Links />
    </div>
  );
}

function LucideLinkedin() {
  return (
    <Wrapper>
      <g id="lucide/linkedin">
        <g id="Vector">
          <path d={svgPaths.p30958080} stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 9H2V21H6V9Z" stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1bb3a100} stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </g>
    </Wrapper>
  );
}

function LucideFacebook() {
  return (
    <Wrapper>
      <g id="lucide/facebook">
        <path d={svgPaths.p3d19f300} id="Vector" stroke="var(--stroke-0, #142E82)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </Wrapper>
  );
}

function SocialIcons() {
  return (
    <Wrapper>
      <g id="Social Icons">
        <path d={svgPaths.p38a22b70} fill="var(--fill-0, #142E82)" id="Vector" />
      </g>
    </Wrapper>
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Bottom">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">2025 VESANT.AI © All Rights Reserved</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full" data-name="Footer">
      <ContactInfo />
      <SuiteDividerImage />
      <FooterBottom />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-4 sm:px-8 lg:px-20 py-0 relative w-full max-w-[1440px] mx-auto">
        <InquirySection />
        <Footer />
      </div>
    </div>
  );
}

function FooterWithInquiry() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[48px] pt-[40px] px-0 top-[5139px] w-full" data-name="Footer with Inquiry">
      <Content />
    </div>
  );
}

function GradientLines() {
  return (
    <div className="absolute h-[1131px] left-1/2 top-[calc(50%+78px)] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px]" data-name="Gradient Lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1131">
        <g id="Gradient Lines">
          <line id="Line 1" stroke="url(#paint0_linear_1_1197)" x1="80.5" x2="80.5" y1="2.18557e-08" y2="1131" />
          <line id="Line 3" stroke="url(#paint1_linear_1_1197)" x1="720.5" x2="720.5" y1="2.18557e-08" y2="1131" />
          <line id="Line 2" stroke="url(#paint2_linear_1_1197)" x1="1360.5" x2="1360.5" y1="2.18557e-08" y2="1131" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1197" x1="79.5" x2="79.5" y1="-2.18557e-08" y2="1131">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1197" x1="719.5" x2="719.5" y1="-2.18557e-08" y2="1131">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1197" x1="1359.5" x2="1359.5" y1="-2.18557e-08" y2="1131">
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

import Silk from "../app/components/ui/Silk";

function Background() {
  return (
    <div className="absolute h-[1287px] left-0 top-0 w-full" data-name="Background">
      <div className="absolute h-[1287px] left-0 right-0 top-0 flex justify-center items-center" data-name="BG Gradient Image">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Silk
            speed={5.2}
            scale={0.5}
            color="#132c7e"
            noiseIntensity={0.2}
            rotation={1.2}
          />
        </div>
      </div>
      <GradientLines />
    </div>
  );
}

function TaglineContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Tagline Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#acacac] text-[14px] text-nowrap">Risk Intelligence for the Digital World</p>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-full" data-name="Description Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[48px] sm:leading-[60px] lg:leading-[80px] min-w-full relative shrink-0 text-[0px] text-[36px] sm:text-[52px] lg:text-[68px] w-[min-content] px-4">
        <p className="mb-0">
          <span className="text-[#a3b8ff]">Enterprise</span> <span className="text-[#a3b8ff]">Compliance</span>
          <span>{` Platform`}</span>
        </p>
        <p>for High Risk Industries</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full max-w-[776px] px-4">
        <p className="leading-[24px]">Real time AML screening, fraud prevention, and intelligent case management. Built for gaming, crypto, and fintech companies that demand institutional grade compliance.</p>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="Text Content">
      <TaglineContainer />
      <DescriptionContainer />
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
      <Text1 text="View Features" />
      <ScheduleDemoButtonContainer />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TextContent />
      <ButtonsContainer />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="bg-[#011611] content-stretch flex flex-col h-auto items-start p-[8px] relative rounded-[32px] shrink-0 w-full max-w-[1130px]" data-name="Image Container">
      <div className="aspect-[1920/994] relative rounded-[24px] shrink-0 w-full" data-name="Main Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgMainImage} />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[72px] items-center left-1/2 -translate-x-1/2 px-4 sm:px-8 lg:px-20 min-[1440px]:px-0 py-0 top-[156px] w-full max-w-[1440px]" data-name="Content">
      <TextContainer />
      <ImageContainer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[1287px] relative shrink-0 w-full" data-name="Hero Section">
      <Background />
      <Content1 />
    </div>
  );
}

function GrayLines() {
  return (
    <div className="absolute h-[960px] left-0 top-0 w-full" data-name="Gray Lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 960">
        <g id="Gray Lines">
          <line id="Line 1" stroke="url(#paint0_linear_1_1173)" x1="480.5" x2="480.5" y1="2.18557e-08" y2="960" />
          <line id="Line 2" stroke="url(#paint1_linear_1_1173)" x1="960.5" x2="960.5" y1="2.18557e-08" y2="960" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1173" x1="479.5" x2="479.5" y1="-2.18557e-08" y2="960">
            <stop offset="0.3125" stopColor="#D0D0D0" stopOpacity="0" />
            <stop offset="1" stopColor="#D0D0D0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1173" x1="959.5" x2="959.5" y1="-2.18557e-08" y2="960">
            <stop offset="0.3125" stopColor="#D0D0D0" stopOpacity="0" />
            <stop offset="1" stopColor="#D0D0D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Content">
      <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start justify-between not-italic px-4 sm:px-8 lg:px-20 py-0 relative w-full max-w-[1440px] mx-auto">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#767676] text-[14px] text-nowrap">ABOUT US</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] sm:leading-[40px] relative shrink-0 text-[#252525] text-[24px] sm:text-[32px] text-left sm:text-right w-full max-w-[963px]">
          <span>{`VESANT, `}</span>
          <span className="text-[#b0b0b0]">we offer advanced solutions for high-risk industries. Our compliance platform streamlines regulatory processes, helping businesses meet strict standards while reducing risks. With our innovative tools and expert support, we enable organizations to confidently navigate complex regulations.</span>
        </p>
      </div>
    </div>
  );
}

function InfoBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pl-6 sm:pl-12 lg:pl-20 pr-5 py-[40px] relative shrink-0 w-full max-w-[480px]" data-name="Info Block 1">
      <div className="absolute bg-[#1633b6] h-[232px] left-0 top-0 w-full" data-name="Background" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#8fa9ff] text-[20px] w-[min-content]">Uptime SLA</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[88px] min-w-full not-italic relative shrink-0 text-[80px] text-white w-[min-content]">99.9%</p>
    </div>
  );
}

function InfoBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center px-5 py-[40px] relative shrink-0 w-full max-w-[480px]" data-name="Info Block 2">
      <div className="absolute bg-[#a3b8ff] h-[232px] left-0 top-0 w-full" data-name="Background" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#142e82] text-[20px] text-center w-[min-content]">Response Time</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[88px] min-w-full not-italic relative shrink-0 text-[80px] text-center text-white w-[min-content]">{`<200ms`}</p>
    </div>
  );
}

function InfoBlock2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end pl-5 pr-6 sm:pr-12 lg:pr-20 py-[40px] relative shrink-0 w-full max-w-[480px]" data-name="Info Block 3">
      <div className="absolute bg-[#1633b6] h-[232px] left-0 top-0 w-full" data-name="Background" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#8fa9ff] text-[20px] text-right w-[min-content]">Monitoring</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[88px] min-w-full not-italic relative shrink-0 text-[80px] text-right text-white w-[min-content]">24/7</p>
    </div>
  );
}

function BlockWraper() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch md:items-start justify-center relative shrink-0 w-full max-w-[1440px] mx-auto px-4 md:px-0" data-name="Block Wraper">
      <InfoBlock />
      <InfoBlock1 />
      <InfoBlock2 />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex flex-col min-h-[960px] items-center justify-between pb-0 pt-[96px] px-0 relative shrink-0 w-full" data-name="About Us">
      <GrayLines />
      <div className="absolute bottom-0 flex h-[625px] items-center justify-center left-[calc(50%-0.5px)] translate-x-[-50%] w-[949px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[625px] relative w-[949px]" data-name="bg star">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 625">
              <path d={svgPaths.pf187500} fill="var(--fill-0, #DDDDDD)" id="bg star" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <TextContent1 />
      <BlockWraper />
    </div>
  );
}

function CardDesigns() {
  return (
    <CardDesigns3>
      <div className="absolute bg-white h-[460px] left-0 top-0 w-[426px]" />
      <div className="absolute h-[460px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[426px]" data-name="image 6" />
      <div className="absolute h-[460px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[426px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">{`Casinos & Online Gaming`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Comprehensive player verification, geolocation enforcement, and responsible gaming controls to meet jurisdiction requirements worldwide.</p>
      <div className="absolute flex h-[214.899px] items-center justify-center right-[-170.21px] top-[calc(50%+141px)] translate-y-[-50%] w-[206.413px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[15deg]">
          <div className="h-[178px] relative w-[166px]" data-name="Object 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[123.04%] left-0 max-w-none top-0 w-[146.99%]" src={imgObject3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-20.83px] flex h-[178.66px] items-center justify-center left-[-204.68px] w-[208.359px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[345deg]">
          <div className="h-[137px] relative w-[179px]" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[122.63%] left-[-68.15%] max-w-none top-0 w-[168.15%]" src={imgObject2} />
            </div>
          </div>
        </div>
      </div>
    </CardDesigns3>
  );
}

function CardDesigns1() {
  return (
    <CardDesigns3>
      <div className="absolute bg-white h-[460px] left-0 top-0 w-[426px]" />
      <div className="absolute h-[460px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[426px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">Cryptocurrency</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.</p>
      <div className="absolute bottom-[-18.96px] flex h-[200.928px] items-center justify-center left-[-208.23px] w-[204.463px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[345deg]">
          <div className="h-[163px] relative w-[168px]" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[119.07%] left-[-71.56%] max-w-none top-[-9.25%] w-[185.94%]" src={imgObject4} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-11.3px] flex h-[201.6px] items-center justify-center right-[-165.63px] w-[168.262px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.856deg]">
          <div className="h-[179px] relative w-[137px]" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[103.35%] left-0 max-w-none top-[-0.11%] w-[144.53%]" src={imgObject5} />
            </div>
          </div>
        </div>
      </div>
    </CardDesigns3>
  );
}

function CardDesigns2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[460px] items-start overflow-clip p-[32px] relative shrink-0 w-[426px]" data-name="Card Designs">
      <div className="absolute h-[460px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[426px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-full not-italic relative shrink-0 text-[#252525] text-[32px] w-[min-content]">{`Fintech & Payments`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#252525] text-[16px] w-[min-content]">Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.</p>
      <div className="absolute bottom-[-17.48px] flex h-[208.965px] items-center justify-center left-[-199.83px] w-[197.651px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[345deg]">
          <CardDesigns2ObjectImage additionalClassNames="h-[174px] w-[158px]" />
        </div>
      </div>
      <div className="absolute bottom-[-15.52px] flex h-[168.049px] items-center justify-center right-[-175.38px] w-[168.756px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[15deg]">
          <CardDesigns2ObjectImage additionalClassNames="h-[137px] w-[138px]" />
        </div>
      </div>
    </div>
  );
}

function IndustryContainer() {
  return (
    <div className="content-stretch flex h-[460px] items-start relative shrink-0 w-full" data-name="Industry Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(226,226,226,0)] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <CardDesigns />
      <CardDesigns1 />
      <CardDesigns2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-4 sm:px-8 lg:px-20 py-0 relative w-full max-w-[1440px] mx-auto">
        <Helper text="Built for Regulated Industries" text1="Real time AML screening, fraud prevention, and intelligent case management. Built for gaming, crypto, and fintech companies that demand institutional grade compliance." additionalClassNames="items-start" />
        <IndustryContainer />
      </div>
    </div>
  );
}

function Industries() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[72px] pt-[120px] px-0 relative shrink-0 w-full" data-name="Industries">
      <Content2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
      <Helper2 text="AML Watchlist Screening" text1="Integrated sanctions and PEP screening powered by licensed third-party data providers. Real-time checks against global watchlists to identify high risk entities." additionalClassNames="pb-[56px] pt-[32px]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
      <Helper4 text="Fraud Management" text1="Real-time fraud prevention through internal and external fraud detection services. Evaluate transactions and user activities for fraud risk with instant decisioning." additionalClassNames="pb-[56px] pt-[32px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <Helper2 text="Geolocation Compliance" text1="Location-based controls with device integrity verification. Detect VPN/proxy usage and enforce regional restrictions in real time." additionalClassNames="pb-[56px] pt-[32px]" />
    </div>
  );
}

function CardRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Row">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component9 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper1>
      <g id="Frame 1">
        <rect fill="url(#paint0_radial_1_1159)" height="72" rx="36" width="72" />
        <circle cx="36" cy="36" fill="var(--fill-0, white)" id="Ellipse 3" r="28" />
        <g id="Outline / List / Checklist">
          <path clipRule="evenodd" d={svgPaths.p14a63d00} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(36 36) rotate(90) scale(36)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1159" r="1">
          <stop stopColor="#90A7F7" />
          <stop offset="1" stopColor="#1B3DAC" />
        </radialGradient>
      </defs>
    </Wrapper1>
  );
}

function Component10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[56px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute bg-white h-[304px] left-0 top-0 w-[639px]" />
        <Frame1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[24px] w-[min-content]">
          <p className="leading-[32px]">Identity Verification (KYC)</p>
        </div>
        <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
          <p className="leading-[20px]">Document verification and biometric checks with liveness detection. Waterfall strategy that starts with basic KYC and escalates based on predefined criteria or client preference.</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <Wrapper1>
      <g id="Frame 1">
        <rect fill="url(#paint0_radial_1_1164)" height="72" rx="36" width="72" />
        <circle cx="36" cy="36" fill="var(--fill-0, white)" id="Ellipse 3" r="28" />
        <g id="Outline / List / Checklist">
          <path clipRule="evenodd" d={svgPaths.p14a63d00} fill="var(--fill-0, #095141)" fillRule="evenodd" id="Vector" />
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(36 36) rotate(90) scale(36)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1164" r="1">
          <stop stopColor="#142E82" />
          <stop offset="1" stopColor="#90A7F7" />
        </radialGradient>
      </defs>
    </Wrapper1>
  );
}

function Component11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[56px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute bg-white h-[304px] left-0 top-0 w-[639px]" />
        <Frame2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[24px] w-[min-content]">
          <p className="leading-[32px]">Intelligent Case Management</p>
        </div>
        <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#252525] text-[14px] w-[min-content]">
          <p className="leading-[20px]">Unified alert triage and investigation workflows. Visual storytelling tools reveal linked entities and patterns across all compliance data.</p>
        </div>
      </div>
    </div>
  );
}

function CardRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Row">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component10 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component11 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
      <Helper4 text="Role-Based Access Control" text1="Granular permissions for Compliance Analysts, Managers, Administrators, and Auditors. Configurable per client requirements with proper segregation of duties." additionalClassNames="pb-[32px] pt-[56px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 3">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(226,226,226,0)] border-solid inset-0 pointer-events-none" />
      <Helper2 text="360° Customer Profiles" text1="Complete compliance view with KYC data, risk scores, watchlist status, device associations, and alert history in one unified profile." additionalClassNames="pb-[32px] pt-[56px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 4">
      <Helper4 text="Tax Reporting" text1="Ensure timely and accurate tax reporting with integrated 1099 and W-2G reporting and W-9 solicitation tools." additionalClassNames="pb-[32px] pt-[56px]" />
    </div>
  );
}

function CardRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Row">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component12 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component3 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component4 />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Container">
      <CardRow />
      <SuiteDividerImage />
      <CardRow1 />
      <SuiteDividerImage />
      <CardRow2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-4 sm:px-8 lg:px-20 py-0 relative w-full max-w-[1440px]">
          <Helper text="Comprehensive Compliance Suite" text1="Everything you need to manage risk, conduct investigations, and maintain regulatory compliance" additionalClassNames="items-center text-center" />
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

function ComplianceSuits() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center px-0 py-[72px] relative shrink-0 w-full" data-name="Compliance Suits">
      <Content3 />
      <Text text="Explore All" additionalClassNames="px-[32px]" />
    </div>
  );
}

function TitileAndSubTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0" data-name="Titile and Sub Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] sm:leading-[64px] relative shrink-0 text-[#142e82] text-[36px] sm:text-[56px] w-full max-w-[665px]">Intelligent Compliance Solutions Powered by AI</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#252525] text-[16px] w-[min-content]">
        <p className="leading-[24px]">{`Ask questions in plain English. VESANT's embedded GPT interface translates natural language into structured queries across your entire compliance dataset. Available on every page, the AI assistant provides instant analysis, retrieves records, and delivers context-aware insights all while maintaining complete data isolation between clients.`}</p>
      </div>
    </div>
  );
}

function SubParagraphTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Sub Paragraph Title">
      <div className="flex h-[27px] items-center justify-center relative shrink-0 w-[6px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-gradient-to-l from-[#a3b8ff] h-[6px] rounded-[999px] to-[#142e82] w-[27px]" data-name="Sub Paragraph Background" />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[24px] text-nowrap">
        <p className="leading-[32px]">Enterprise-Grade Data Security</p>
      </div>
    </div>
  );
}

function SubParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[585px]" data-name="Sub Paragraph">
      <SubParagraphTitle />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[65px] justify-center leading-[0] not-italic relative shrink-0 text-[#252525] text-[16px] w-full">
        <p className="leading-[24px]">Your data is strictly isolated. Other clients cannot access your information, and OpenAI does not use your data for model training. Complete privacy and confidentiality guaranteed.</p>
      </div>
    </div>
  );
}

function IntelligenceContent() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full max-w-[707px]" data-name="Intelligence Content">
      <TitileAndSubTitle />
      <SubParagraph />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#252525] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] min-w-full relative shrink-0 text-[40px] w-[min-content]">Example Queries</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] w-[362px]">
        <p className="leading-[20px]">Explore some sample queries to quickly understand the types of insights you can retrieve from the system.</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Component 6">
      <Component6InputfieldDefaultText text="Show me all high-risk customers from the last 7 days" />
      <Component />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Component 7">
      <Component6InputfieldDefaultText text="How many AML alerts are pending investigation?" />
      <Component />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Component 8">
      <Component6InputfieldDefaultText text="Summarize fraud trends by transaction type this month" />
      <Component />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Component 9">
      <Component6InputfieldDefaultText text="Which jurisdictions have the highest KYC failure rates?" />
      <Component />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Component6 />
      <Component13 />
      <Component7 />
      <Component8 />
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white h-[524px] relative shrink-0 w-[528px]" data-name="Component 5">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Frame4 />
        <Frame3 />
        <div className="absolute flex h-[215.19px] items-center justify-center right-[-181.54px] top-[-15.09px] w-[184.077px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[15deg]">
            <div className="h-[185px] opacity-80 relative w-[141px]" data-name="image 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[139.06%]" src={imgImage3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e2e2] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IntelligenceImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Intelligence Image Container">
      <Helper5 />
      <Component5 />
      <Helper5 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col lg:flex-row gap-8 items-start justify-between px-4 sm:px-8 lg:px-20 py-0 relative w-full max-w-[1440px] mx-auto">
        <IntelligenceContent />
        <IntelligenceImageContainer />
      </div>
    </div>
  );
}

function Inteliganace() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[72px] relative shrink-0 w-full" data-name="Inteliganace">
      <Content4 />
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full max-w-full" data-name="Sections">
      <HeroSection />
      <AboutUs />
      <Industries />
      <ComplianceSuits />
      <Inteliganace />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[42px] relative shrink-0 w-[143px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 42">
        <g id="logo">
          <path d={svgPaths.p25d2a580} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-center leading-[20px] not-italic relative shrink-0 text-[#acacac] text-[14px] text-nowrap" data-name="Menu Items">
      <p className="relative shrink-0">Industries</p>
      <p className="relative shrink-0">Features</p>
      <p className="relative shrink-0">Solution</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Menu">
      <MenuItems />
      <Text1 text="Request Demo" />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 px-4 sm:px-8 lg:px-20 py-[24px] top-0 -translate-x-1/2 w-full max-w-[1440px] z-50" data-name="Header">
      <Logo2 />
      <Menu />
    </div>
  );
}

export default function LandingPageDesign() {
  return (
    <div className="bg-white relative size-full overflow-x-hidden" data-name="Landing Page Design">
      <FooterWithInquiry />
      <Sections />
      <Header />
    </div>
  );
}