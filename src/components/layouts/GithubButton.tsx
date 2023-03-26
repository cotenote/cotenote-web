import { SocialLoginButton } from "@/components/common/button/index";
import React from "react";
import GithubIconSrc from "@/assets/images/github_icon.svg";

function GithubButton() {
  return (
    <SocialLoginButton
      iconSrc={GithubIconSrc}
      backgroundColor="#6e5494"
      type="github"
    />
  );
}

export default GithubButton;
