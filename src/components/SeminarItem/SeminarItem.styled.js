import styled from "styled-components";

export const SeminarCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 1.4rem;
`;

export const InfoText = styled.p`
  color: #34495e;
  margin: 8px 0;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
`;

export const EditButton = styled(Button)`
  background-color: #3498db;
  color: white;
`;
