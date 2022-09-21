import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a7b2bd;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f2f5fa;
  &:focus-within {
    border: 2px solid #227eff;
  }
`;
const AutoCompleteContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #a7b2bd;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f2f5fa;
  &:focus-within {
    border: 2px solid #227eff;
  }
`;
const InputField = styled.input`
  outline: none;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #071827;
  padding: 14px 8px 17px;
  width: 100%;
  height: 44px;
  background: #f2f5fa;
  &::placeholder {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    color: #6f798b;
    padding-left: 5px;
    position: absolute;
  }
  &:focus::placeholder {
    left: 2px;
    top: 2px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #030c96;
    transition: 0.2s ease-out;
  }
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.1;
    `}
`;
const Prefix = styled.span`
  background: #f2f5fa;
  padding: 18px 10px;
  border-right: 0.5px solid #cbd6e0;
  height: 44px;
  select {
    background: #f2f5fa;
    outline: none;
  }
`;
const Suffix = styled(Prefix)`
  border: none;
`;

export { Container, AutoCompleteContainer, InputField, Prefix, Suffix };
