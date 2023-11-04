import styled from '@emotion/styled';

const onlineStatus = ({ status, theme }) => {
  return status ? theme.colors.green : theme.colors.red;
};

export const Friend = styled.li`
  display: flex;
  width: 100%;
  min-height: 80px;
  align-items: center;
  gap: 12px;
  padding: 4px 12px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #525252;
  background: #fff;
  overflow: hidden;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${onlineStatus};
`;

export const Avatar = styled.img`
  border-radius: 6px;
`;

export const Name = styled.p`
  font-size: large;
`;
