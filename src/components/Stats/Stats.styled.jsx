import styled from '@emotion/styled';

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
  border-top: 1px solid #c0c0c0;
  &:not(:last-child) {
    border-right: 1px solid #c0c0c0;
  }
`;

export const Label = styled.span`
  color: #727272;
  letter-spacing: -0.6px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
