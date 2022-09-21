import styled from "styled-components";

export const RightLabel = styled.div`
  position: absolute;
  top: 57px;
  right: 10px;
  font-size: 10px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #718596;
`;

export const LeftLabel = styled(RightLabel)`
  left: 10px;
  text-align: left;
`;
export const RightBadgeLabel = styled.div`
  position: absolute;
  top: 57px;
  right: 10px;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #718596;
`;
export const LeftBadgeLabel = styled(RightBadgeLabel)`
  left: 10px;
  text-align: left;
`;
