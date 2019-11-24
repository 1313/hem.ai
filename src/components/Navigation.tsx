import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lighten, rgba } from 'polished';
import { FaHome } from 'react-icons/fa';
import { IoIosBug } from 'react-icons/io';

import { GiElderberry, GiSpellBook } from 'react-icons/gi';
import { styled } from '../theme';
import { Logotype } from './Logotype';

const NavigationLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => lighten(0.4, theme.color.primary)};
  &:hover {
    color: ${({ theme }) => theme.color.secondaryText};
  }
  &.active {
    background-color: ${({ theme }) =>
      rgba(lighten(0.3, theme.color.primary), 0.5)};

    color: ${({ theme }) => theme.color.secondaryText};
  }
  > * + * {
    margin-left: var(--s-1);
  }
  svg {
    font-size: 1.5em;
  }
  padding: var(--s-2) var(--s0);
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};

  display: inline-flex;
  align-items: center;
  flex-direction: row;
  font-size: 1em;
`;
const NavigationWrapper = styled(motion.nav)`
  color: ${({ theme }) => theme.color.text};
  flex: 0 0 auto;
  display: flex;
  > *:first-child {
    margin-bottom: var(--s-2);
  }
  > * + * {
    margin-top: var(--s-5);
  }
  padding: var(--s-1);
  background-color: ${({ theme }) => theme.color.primary};
  min-width: 15rem;
  flex-direction: row;
  align-items: center;

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
      <Logotype />
      <NavigationLink exact to="/">
        <FaHome />
        <span>Home</span>
      </NavigationLink>
      <NavigationLink exact to="/ingredients">
        <GiElderberry />
        <span>Ingredients</span>
      </NavigationLink>
      <NavigationLink exact to="/recipes">
        <GiSpellBook />
        <span>Recipes</span>
      </NavigationLink>
      <NavigationLink exact to="/debug">
        <IoIosBug />
        <span>Debug</span>
      </NavigationLink>
    </NavigationWrapper>
  );
}
