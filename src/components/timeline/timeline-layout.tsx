'use client';

import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from '@/components/timeline/timeline';
import { CONFIG } from '@/config';

export type TimelineData = (typeof CONFIG.experience)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface TimelineLayoutProps {
  items?: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items = [] }: TimelineLayoutProps) => {
  return (
    <Timeline>
      {items.map((item) => {
        return (
          <TimelineItem key={item.id}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineTime>{item.title}</TimelineTime>
              <TimelineIcon />
              <TimelineTitle>{item.date}</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
