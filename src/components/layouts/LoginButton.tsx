import BaseButton from "@/components/common/button/BaseButton";
import { Dialog } from "@mui/material";
import LogoSrc from "@/assets/images/logo.svg";
import React from "react";
import Image from "next/image";
import { GoogleButton, GithubButton } from "@/components/layouts";

function LoginButton() {
  const [open, setOpen] = React.useState(false);

  // TODO : 모달(Dialog) 분리
  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <div
          style={{
            padding: "60px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image
            className="main_logo"
            src={LogoSrc}
            width={200}
            height={27}
            alt="logo"
            priority
          />
          <GoogleButton />
          <GithubButton />
        </div>
      </Dialog>
      <BaseButton
        onClick={() => setOpen(true)}
        className="login_button"
        variant="contained"
      >
        로그인 하기
      </BaseButton>
    </>
  );
}

export default LoginButton;
