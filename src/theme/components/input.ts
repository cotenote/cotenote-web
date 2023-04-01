const focus = {
  borderColor: "var(--primary-500)",
  boxShadow: "0 0 0 1px var(--primary-500)",
};

const Input = {
  variants: {
    outline: {
      field: {
        _focus: focus,
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
