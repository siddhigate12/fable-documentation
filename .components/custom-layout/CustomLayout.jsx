import React from "react";
import "../index.css"
import TOC from "../toc";

const CustomLayout = (props) => {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    contentFooterComp: ContentFooter,
  } = props;
  console.log(props.toc)
  return (
    <>
      <Header />
      <div className="content-con">
        <Sidepanel />
        <div className="content">
          {props.children}
          <ContentFooter />
        </div>
        <TOC toc={props.toc.length && props.toc} />
      </div>
      <Footer />
    </>
  );
};

export default CustomLayout;
