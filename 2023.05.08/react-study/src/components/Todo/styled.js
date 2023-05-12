import styled from "styled-components";

import { Button } from "../Button/styled";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 15px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 04);
`;

export const Wrap = styled.div`
  display: flex;
  margin: 0 10px;
  > ${Button} {
    flex-shrink: 0;
    border: none;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    color: red;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  &
`;
