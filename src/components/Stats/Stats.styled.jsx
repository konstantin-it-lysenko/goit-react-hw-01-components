import styled from '@emotion/styled';
import { theme } from 'constants/theme';

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
