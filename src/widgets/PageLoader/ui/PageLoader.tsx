import React from "react";
import styled, { keyframes } from "styled-components";

export const PageLoader = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <span style={{ marginLeft: "20px", fontSize: "1.2em", color: "#333" }}>
        Идёт загрузка страницы, пожалуйста, подождите
      </span>
    </LoaderContainer>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
