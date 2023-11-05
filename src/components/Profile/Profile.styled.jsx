import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  margin: 60px auto;
  padding-top: 40px;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px #525252;
  background: #fff;
  overflow: hidden;
`;

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

export const StatsList = styled.ul`
  display: flex;
  background-color: #f1f1f1;
`;

export const StatsItem = styled.li`
  min-height: 100px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-top: ${theme.border.onePxSolid} ${theme.colors.gray};
  &:not(:last-child) {
    border-right: ${theme.border.onePxSolid} ${theme.colors.gray};
  }
`;

export const Label = styled.span`
  color: ${theme.colors.fontGray};
  letter-spacing: -0.6px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
