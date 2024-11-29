import styled from "styled-components";

export const PromoWrapper = styled.div`
  position: relative;
  color: white
`;

export const PromoText = styled.div`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 2em;
  
  a {
    color: white;
    background: green;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    margin-top: 20px;
  }
`;