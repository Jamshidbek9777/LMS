"use client";

import { Card, Flex } from "antd";
import styled from "styled-components";

export default function Home() {
  return (
    <ContentWrapper>
      <Flex gap={50}>
        <Card>Total Students</Card>
        <Card>Total Mentors</Card>
        <Card>Branches</Card>
      </Flex>

      <div>Social</div>
      <div>Email messages</div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  background-color: white;
  min-height: 90vh;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  width: 250px;
`;
