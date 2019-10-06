import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lighten } from 'polished';

import { styled } from '../theme';
import { HomeIcon } from '../icons/HomeIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { RecipeIcon } from '../icons/RecipeIcon';

const NavigationLink = styled(NavLink)`
  transition: background-color 100ms ease-in-out;
  &:hover,
  &:active,
  &.active {
    transition-duration: 250ms;
    background-color: ${props => lighten(0.1, props.theme.color.primary)};
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
  font-size: var(--s-1);
  padding: var(--s-5) var(--s-2);
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const NavigationWrapper = styled(motion.nav)`
  color: ${({ theme }) => theme.color.text};
  flex: 0 0 auto;
  display: flex;

  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
  background-color: ${({ theme }) => theme.color.primary};

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
        Home
      </NavigationLink>
      <NavigationLink exact to="/recipes">
        <RecipeIcon />
        Recipes
      </NavigationLink>
      <NavigationLink exact to="/debug">
        <SettingsIcon />
        Debug
      </NavigationLink>
    </NavigationWrapper>
  );
}
