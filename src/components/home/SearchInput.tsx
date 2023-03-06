import { ButtonBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BaseTextField from "../common/input/BaseTextField";

function SearchInput() {
  return (
    <SearchInputWrapper>
      <Image
        className="main_logo"
        src={"/assets/images/logo.svg"}
        width={400}
        height={56}
        alt="main_logo"
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
  padding: 17px 20px;
  border-radius: 18px;

  input {
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
  }

  input::placeholder {
    color: var(--primary);
    opacity: 1;
  }
  fieldSet {
    border: 3px solid var(--primary) !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    padding: 10px 18px 15px;
  }
`;
