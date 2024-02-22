import React from "react";
import "./index.css";

const SupportBanner = () => {
  return (
    <div className="support-banner-con">
      <div className="support-banner-img-con">
        <img
          width={20}
          className="support-banner-icon"
          alt=""
          src="https://documentden-deployments.s3.us-east-1.amazonaws.com/public/6b28dcd5-0845-4aa1-b12a-dab4f87ca6bb"
        ></img>
      </div>
      <div className="support-banner-text-con">
        Still, have questions or pondering a use case not covered here? We're
        here to help! Reach out to us at &nbsp;
        <a href="mailto:support@sharefable.com">support@sharefable.com</a>
        &nbsp; and let's craft your perfect demo together.
      </div>
    </div>
  );
};

export default SupportBanner;
