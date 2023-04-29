import { FormControl, FormLabel } from "@chakra-ui/form-control";
import dynamic from "next/dynamic";

import { TimerOption } from "./Timer";

const Select = dynamic(
  () => import("chakra-react-select").then((module) => module.Select),
  { ssr: false },
);

export type TimeSelectOption = { label: string; value: number };

interface SelectProps {
  label: string;
  options: TimerOption[];
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: TimeSelectOption) => void;
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
    <FormControl width="110px">
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Select
        size="lg"
        useBasicStyles
        placeholder="00"
        isDisabled={isDisabled}
        id={label}
        instanceId={`time-select-${label}`}
        options={options}
        value={options.filter((option) => {
          return option.value === value;
        })}
        onChange={(newValue) => {
          if (!newValue) return;
          handleChange(newValue as TimeSelectOption);
        }}
        {...rest}
      />
    </FormControl>
  );
}

export default TimeSelect;
