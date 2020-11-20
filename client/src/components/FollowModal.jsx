import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';

const Section = styled.div`
  font-family: Poppins;
  color: var(--secondaryText);
  font-size: .75rem;
  position: relative;
  border: 1px solid black;
  border-radius: 2px;
  button {
    display: block;
    font-size: 14px;
    line-height: 18px;
    display: block;
    color: var(--secondaryText);
    padding: 8px 24px;
    text-decoration: none;
    cursor: pointer;
  }
  display: block;
`

const FollowModal = (props) => (
  <Section>
    <button>Report this</button>
    <button>Unfollow</button>
  </Section>
)


export default FollowModal;