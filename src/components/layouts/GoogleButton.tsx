import React from "react";
import GoogleIconSrc from "@/assets/images/google_icon.svg";
import { SocialLoginButton } from "@/components/common/button";

function GoogleButton() {
  return (
    <SocialLoginButton
      iconSrc={GoogleIconSrc}
      backgroundColor="#db4437"
      type="google"
    />
  );
}

export default GoogleButton;
