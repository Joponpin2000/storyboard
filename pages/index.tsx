import PageTabs from "../components/molecules/PageTabs";
import HeaderNav from "../components/organisms/HeaderNav";
import PageSection from "../components/organisms/PageSection";

const IndexPage = () => {
  return (
    <div>
      <HeaderNav />
      <PageSection />
      <PageTabs />
    </div>
  );
};

export default IndexPage;
