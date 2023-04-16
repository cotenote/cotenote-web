import { FormControl, FormLabel } from "@chakra-ui/form-control";
import dynamic from "next/dynamic";

const Select = dynamic(
  () => import("chakra-react-select").then((module) => module.Select),
  { ssr: false },
);

interface SelectOption {
  label: string;
  value: number;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: SelectOption | null;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: SelectOption | null) => void;
  isDisabled?: boolean;
}

function TimeSelect({
  label,
  options,
  value,
  onChange: handleChange,
  isDisabled = false,
  ...rest
}: SelectProps) {
  return (
    <FormControl width="120px">
      <FormLabel>{label}</FormLabel>
      <Select
        {...rest}
        id="long-value-select"
        instanceId="long-value-select"
        options={options}
        value={value}
        onChange={(newValue) => {
          if (!newValue) return;
          handleChange(newValue as SelectOption);
        }}
        placeholder="00"
        isDisabled={isDisabled}
        useBasicStyles
        size="lg"
      />
    </FormControl>
  );
}

export default TimeSelect;
