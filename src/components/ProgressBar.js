import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.ul`
  list-style: none;
  margin-left: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  font-size: 12px;
  padding: 0;
  margin-bottom: 5px;
  li {
    width: 100px;
    justify-content: center;
    display: flex;
    border: 1px solid grey;
    border-right-style: none;
    padding: 10px 10px;
  }
  li:last-of-type {
    border: 1px solid grey;
  }
`;

export default function ProgressBar({currentTab, tabs}) {
  return (
    <ProgressBarWrapper>
      {tabs.map(tab => (
        <li
          style={{
            backgroundColor: `${currentTab === tab ? '#4caf50' : 'white'}`,
          }}
          key={tab}
        >
          {tab}
        </li>
      ))}
    </ProgressBarWrapper>
  );
}
