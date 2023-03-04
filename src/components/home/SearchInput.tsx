import { ButtonBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BaseTextField from "../common/input/BaseTextField";

function SearchInput() {
  return (
    <SearchInputWrapper>
      <Image
        src={"/assets/images/logo.svg"}
        width={431}
        height={57}
        alt="logo"
        priority
      />
      <StyledTextField
        placeholder={"검색어를 입력하세요"}
        endAdornment={
          <ButtonBase>
            <Image
              src={"/assets/images/search_icon.svg"}
              width={25}
              height={25}
              alt={"search_icon"}
            />
          </ButtonBase>
        }
      />
    </SearchInputWrapper>
  );
}

export default SearchInput;

const SearchInputWrapper = styled.div`
  height: calc(100vh - var(--footer-height));

  display: flex;
  gap: 66px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTextField = styled(BaseTextField)`
  fieldSet {
    border-radius: 22px;
    border: 3px solid var(--primary) !important;
  }
`;
