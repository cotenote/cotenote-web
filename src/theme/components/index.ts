import Input from "./input";

const components = {
  Button: {
    variants: {
      primary: {
        backgroundColor: "var(--primary-500)",
        _hover: {
          backgroundColor: "var(--primary-600)",
          _disabled: {
            backgroundColor: "var(--primary-500)",
          },
        },
        _active: {
          backgroundColor: "var(--primary-700)",
        },
      },
    },
  },

  Input,
};

export default components;
