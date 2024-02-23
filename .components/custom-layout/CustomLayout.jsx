import React, { useEffect, useState } from "react";
import "../index.css";
import TOC from "../toc";
import SupportBanner from "../support-banner";

const menuIconUrl =
  "https://documentden-deployments.s3.us-east-1.amazonaws.com/public/2058d1f5-f692-4341-b4dc-2014ccad5ecc";

const CustomLayout = (props) => {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    contentFooterComp: ContentFooter,
  } = props;

  const [showSidePanel, setShowSidePanel] = useState("init");

  return (
    <>
      <Header />
      <div className="content-con">
        <Sidepanel show={showSidePanel} closeSidepanel={() => setShowSidePanel(false)} />
        <div className="content">
          <button type="button" className="menu-icon">
            <img
              style={{ cursor: "pointer"}}
              src={menuIconUrl}
              alt=""
              width={28}
              height={28}
              onClick={() =>
                setShowSidePanel((prev) =>
                  prev === "init" || !prev ? true : false
                )
              }
            />
          </button>
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
