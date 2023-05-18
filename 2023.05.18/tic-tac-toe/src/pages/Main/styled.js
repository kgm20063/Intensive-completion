import styled from "styled-components";

export const Div = styled.div``;

export const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export const Status = styled.div`
  margin-bottom: 10px;
`;

export const Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  width: 34px;
  height: 34px;
  line-height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const NavKdb = styled.div`
  > ${Square}:focus {
    background: #ddd;
  }
`;

export const Game = styled.div`
  display: flex;
`;

export const GameBoard = styled.div``;

export const GameInfo = styled.div`
  margin-left: 20px;
`;
