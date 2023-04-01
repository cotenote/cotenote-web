import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function SearchInput() {
  return (
    <InputGroup size="md" maxWidth={560}>
      <Input placeholder="해결하고 싶은 문제를 검색해보세요." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="md" onClick={() => {}}>
          검색
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchInput;
