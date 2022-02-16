import Link from "next/link";
import HeaderNav from "../components/organisms/HeaderNavbar";
import PageSection from "../components/organisms/PageSection";

const IndexPage = () => {
  return (
    <div className="Dashboard">
      <link
        rel="preload"
        href="/fonts/fellix/fellix-Regular.cssf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/fellix/fellix-Medium.css"
        as="font"
        crossOrigin=""
      />
      <HeaderNav />
      <PageSection />
    </div>
  );
};

export default IndexPage;
