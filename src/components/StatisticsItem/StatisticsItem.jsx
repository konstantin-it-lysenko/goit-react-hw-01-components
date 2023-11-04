import React from 'react';
import { StatItem, Label, Percentage } from './StatisticsItem.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

export default StatisticsItem;
