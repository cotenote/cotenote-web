import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Input from "../common/input/Input";

function SearchInput() {
  return (
    <StyledSearchInput>
      <Image
        src={"/assets/images/logo.svg"}
        width={431}
        height={57}
        alt="logo"
      />
      <Input
        placeholder="내용을 입력해주세요"
        endAdornment={
          <Image
            src={"/assets/images/search_icon.svg"}
            width={25}
            height={25}
            alt={"search_icon"}
          />
        }
      />
    </StyledSearchInput>
  );
}

export default SearchInput;

const StyledSearchInput = styled.div`
  height: calc(100vh - var(--footer-height));
  /* height: 100vh; */
  display: flex;
  gap: 66px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
