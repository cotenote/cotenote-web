const focus = {
  borderColor: "var(--primary-500)",
  boxShadow: "0 0 0 1px var(--primary-500)",
};

const Input = {
  variants: {
    outline: {
      field: {
        borderColor: "var(--chakra-colors-gray-200)",
        _focus: focus,
        _placeholder: {
          color: "var(--chakra-colors-gray-500)",
        },
      },
    },
    filled: {
      field: {
        _focus: focus,
      },
    },
    flushed: {
      field: {
        _focus: focus,
      },
    },
  },
};

export default Input;
