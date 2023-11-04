import styled from '@emotion/styled';

function getRandomHexColor() {
  const brightColors = [
    '#FF5733',
    '#FFA726',
    '#FFD600',
    '#4CAF50',
    '#03A9F4',
    '#9C27B0',
    '#E91E63',
    '#795548',
    '#FF8A65',
    '#FFCC80',
    '#FFECB3',
    '#8BC34A',
    '#4DD0E1',
    '#673AB7',
    '#F06292',
    '#8D6E63',
    '#FFAB91',
    '#FFC107',
    '#00BCD4',
    '#607D8B',
    '#2196F3',
  ];

  const randomIndex = Math.floor(Math.random() * brightColors.length);
  return brightColors[randomIndex];
}

export const StatItem = styled.li`
  min-height: 100px;
  width: 100%;
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${getRandomHexColor};
  @media (min-width: 768px) {
    width: calc(100% / 5);
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 26px;
  color: #fff;
`;
