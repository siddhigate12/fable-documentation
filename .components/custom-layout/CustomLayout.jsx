import React from "react";
import "../index.css"
import TOC from "../toc";
import SupportBanner from "../support-banner";

const CustomLayout = (props) => {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    contentFooterComp: ContentFooter,
  } = props;
  
  return (
    <>
      <Header />
      <div className="content-con">
        <Sidepanel />
        <div className="content">
          {props.children}
          <SupportBanner />
          <ContentFooter />
        </div>
        <TOC toc={props.toc.length && props.toc} />
      </div>
      <Footer />
    </>
  );
};

export default CustomLayout;
