import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const Table = styled.table`
  margin: 0 auto 60px;
  max-width: 600px;
  width: 100%;
  border: ${theme.border.onePxSolid} #333;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #333;
  color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 12px 0;
  text-align: center;
  text-transform: capitalize;
  &:not(:last-of-type) {
    border-right: 1px solid #dfdfdf;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 16px 0;
  text-align: center;
`;
