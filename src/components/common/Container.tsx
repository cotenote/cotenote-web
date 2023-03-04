import styled from "styled-components";

const Container = styled.div<{ maxWidth?: number }>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 620)}px;

  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 var(--mobile-padding);
`;

export default Container;
