import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LogoSrc from "@/assets/images/logo.svg";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function SearchInput() {
  return (
    <SearchInputWrapper>
      <Image
        className="main_logo"
        src={LogoSrc}
        width={270}
        height={39}
        alt="logo"
        priority
      />
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="해결하고 싶은 문제를 찾아보세요." />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="md" onClick={() => {}}>
            검색
          </Button>
        </InputRightElement>
      </InputGroup>
    </SearchInputWrapper>
  );
}

export default SearchInput;

const SearchInputWrapper = styled.div`
  height: calc(100vh - var(--footer-height) - var(--header-height));
  padding: 0 9px;

  display: flex;
  gap: 40px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
