import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Select } from "chakra-react-select";
import React from "react";

interface TimeSelectProps {
  label: string;
  options: { value: number; label: number }[];
}
function TimeSelect({ label, options }: TimeSelectProps) {
  return (
    <FormControl width="100px">
      <FormLabel>{label}</FormLabel>
      <Select placeholder="00" size="lg" useBasicStyles options={options} />
    </FormControl>
  );
}

export default TimeSelect;
