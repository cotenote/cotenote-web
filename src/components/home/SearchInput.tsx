import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function SearchInput() {
  return (
    <InputGroup height="44px" maxWidth={560}>
      <Input
        height="44px"
        paddingRight="71px"
        placeholder="해결하고 싶은 문제를 검색해보세요."
      />
      <InputRightElement top="2px" width="71px">
        <Button height="35px" size="md" onClick={() => {}}>
          검색
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchInput;
