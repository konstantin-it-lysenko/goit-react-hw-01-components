import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid #010101;
  background: #fff;
`;

export const Username = styled.h3`
  line-height: 1.29;
  font-size: 1.6em;
`;

export const Tag = styled.p`
  color: ${theme.colors.fontGray};
`;

export const Location = styled.p`
  font-size: 1.05em;
  line-height: 1.11;
  letter-spacing: -0.5px;
  color: ${theme.colors.fontGray};
`;
