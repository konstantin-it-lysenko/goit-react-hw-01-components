import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  width: 100%;
  min-height: 80px;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #525252;
  background: #ffffff;
  overflow: hidden;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? '#00dd00' : '#f00000';
  }};
`;

export const Avatar = styled.img`
  border-radius: 2px;
`;

export const Name = styled.p`
  font-size: large;
`;
