import React from 'react';
import { GiRobotAntennas } from 'react-icons/gi';
import { rgba } from 'polished';
import { styled } from '../theme';

const LogotypeWrapper = styled.div`
  color: ${p => p.theme.color.secondaryText};
  font-size: var(--s4);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: var(--s-3);
  border-bottom: 2px dotted ${rgba('#4ca1af', 0.3)};
`;
export function Logotype(): JSX.Element {
  return (
    <LogotypeWrapper>
      <svg height="1.25em" width="1em">
        <defs>
          <linearGradient
            gradientTransform="rotate(45)"
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: '#4CA1AF', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#C4E0E5', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <GiRobotAntennas fill="url(#grad1)" />
        <text
          fill="url(#grad1)"
          fontSize="0.34em"
          x="50%"
          y="96%"
          textAnchor="middle"
        >
          hem.ai
        </text>
      </svg>
    </LogotypeWrapper>
  );
}
