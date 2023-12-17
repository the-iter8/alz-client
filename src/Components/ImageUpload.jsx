import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Container = styled.div`
  max-width: 90%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.soft + "70"};
  border-radius: 12px;
  color: ${({ theme }) => theme.soft};
  padding: 20px;
`;

const Typo = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const TextBtn = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const ImageUpload = ({ images, setImages }) => {
  const handleOnCompleted = (file) => {
    setImages([file]);
  };

  const CustomisedButton = ({ triggerInput }) => {
    return <TextBtn onClick={triggerInput}>Browse Image</TextBtn>;
  };

  return (
    <Container>
      <CloudUploadIcon sx={{ fontSize: "100px" }} />
      <Typo>Drag & Drop Image here</Typo>
      <div style={{ display: "flex", gap: "6px" }}>
        <Typo>or</Typo>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleOnCompleted(e.target.files[0])}
        />
        <CustomisedButton
          triggerInput={() =>
            document.querySelector('input[type="file"]').click()
          }
        />
      </div>
    </Container>
  );
};

export default ImageUpload;
