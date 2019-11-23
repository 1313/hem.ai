import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lighten } from 'polished';

import { styled } from '../theme';

const NavigationLink = styled(NavLink)`
  &:active,
  &.active {
    transition: background-color 100ms ease-in-out;
    &::before {
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--s-5);
      width: auto;
      @media (${({ theme }) => theme.breakpoints.small}) {
        top: 0;
        bottom: 0;
        left: 0;
        width: var(--s-5);
        height: auto;
      }
      position: absolute;
      content: '';
      display: block;

      background-color: ${props => lighten(0.1, props.theme.color.primary)};
    }
  }
  position: relative;
  color: ${props => lighten(0.3, props.theme.color.primary)};
  &:hover,
  &:active,
  &.active {
    transition-duration: 250ms;

    color: ${({ theme }) => theme.color.secondaryText};
  }

  font-size: var(--s-1);
  padding: var(--s-3) var(--s-2);
  width: 100%;

  display: inline-flex;
  align-items: center;
  flex-direction: column;
  span {
    display: none;
  }
  @media (${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
    span {
      display: inline;
    }

    * + * {
      margin-left: var(--s-3);
    }
  }
`;
const NavigationWrapper = styled(motion.nav)`
  color: ${({ theme }) => theme.color.text};
  flex: 0 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.color.primary};
  min-width: 10rem;
  flex-direction: row;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;

  @media (${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

export function Navigation(): JSX.Element {
  return (
    <NavigationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <NavigationLink exact to="/">
        <HomeIcon />
        <span>Home</span>
      </NavigationLink>
      <NavigationLink exact to="/recipes">
        <RecipeIcon />
        <span>Recipes</span>
      </NavigationLink>
      <NavigationLink exact to="/debug">
        <SettingsIcon />
        <span>Debug</span>
      </NavigationLink>
    </NavigationWrapper>
  );
}
