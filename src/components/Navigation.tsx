import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lighten } from 'polished';
import { TiHomeOutline } from 'react-icons/ti';
import { MdSettings } from 'react-icons/md';
import { GoNote } from 'react-icons/go';
import { styled } from '../theme';

const NavigationLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => lighten(0.3, theme.color.primary)};
  &:hover,
  &:active,
  &.active {
    transition-duration: 250ms;
    color: ${({ theme }) => theme.color.secondaryText};
  }

  padding: var(--s-3) var(--s-2);
  width: 100%;

  display: inline-flex;
  align-items: center;
  flex-direction: column;
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
        <TiHomeOutline />
        <span>Home</span>
      </NavigationLink>
      <NavigationLink exact to="/recipes">
        <GoNote />
        <span>Recipes</span>
      </NavigationLink>
      <NavigationLink exact to="/debug">
        <MdSettings />
        <span>Debug</span>
      </NavigationLink>
    </NavigationWrapper>
  );
}
