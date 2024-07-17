import React from 'react';
import styled from 'styled-components';

export const AddButton = styled.button`
  position: absolute;
  bottom: -14px;
  padding: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 18px;
  background: linear-gradient(to right, #464FEB 10.42%, #8330E9 100%);
  z-index: 1;
  border: none; /* Remove default border */
  cursor: pointer;
  color: transparent;
  font-size: 16px;
  font-weight: bold;
  
  &:before {
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    border-radius: 16px;
    background-color: white;
    z-index: -1;
  }

  &:hover:before {
    opacity: 0.5;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  &:hover:after {
    color: white;
  }
`;
