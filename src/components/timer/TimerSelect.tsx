import { FormControl, FormLabel } from "@chakra-ui/form-control";
import dynamic from "next/dynamic";
import { TimerOption } from "./Timer";

const Select = dynamic(
  () => import("chakra-react-select").then((module) => module.Select),
  { ssr: false },
);

interface SelectProps {
  label: string;
  options: TimerOption[];
  value: TimerOption | null;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: TimerOption | null) => void;
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
        {...rest}
        id={label}
        instanceId={`time-select-${label}`}
        options={options}
        value={value}
        onChange={(newValue) => {
          if (!newValue) return;
          handleChange(newValue as TimerOption);
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
