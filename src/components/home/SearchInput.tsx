import { ButtonBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BaseTextField from "../common/input/BaseTextField";
import SearchIconSrc from "@/assets/images/search_icon.svg";
import LogoSrc from "@/assets/images/logo.svg";

function SearchInput() {
  return (
    <SearchInputWrapper>
      <Image
        className="main_logo"
        src={LogoSrc}
        width={400}
        height={56}
        alt="logo"
        priority
      />
      <StyledTextField
        placeholder={"검색어를 입력하세요"}
        endAdornment={
          <ButtonBase>
            <Image
              src={SearchIconSrc}
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
  height: calc(100vh - var(--footer-height) - var(--header-height));
  padding: 0 9px;

  display: flex;
  gap: 46px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    gap: 45px;
    .main_logo {
      width: 280px;
    }
  }
`;

const StyledTextField = styled(BaseTextField)`
  padding: 15px 20px;
  border-radius: 18px;

  input {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
  }

  input::placeholder {
    color: var(--primary);
    opacity: 1;
  }
  fieldSet {
    border: 3px solid var(--primary) !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    padding: 10px 18px;
  }
`;
