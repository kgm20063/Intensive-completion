import styled from "styled-components";

import { Button } from "../../../components/Button/styled";

export const InputBox = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  > ${Button} {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background: #ddd;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 10px 5px;
  border: none;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 4);
`;
