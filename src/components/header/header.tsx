import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@/components/container';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}
const isAuth = true;
const Header: FC<HeaderProps> = () => (
  <header className="bg-white">
    <Container>
      <div className="flex justify-between items-center py-2 sm:py-5">
        <NavLink
          to="/"
          className={() =>
            'px-2 py-2 hover:underline underline-offset-[6px] focus:outline outline-2 outline-blue-700 rounded-sm'
          }
        >
          Realworld Blog
        </NavLink>
        <div className="flex items-center space-x-5">
          {isAuth && (
            <>
              <NavLink
                to="articles"
                className={() =>
                  'px-2 py-2 hover:underline underline-offset-[6px] focus:outline outline-2 outline-blue-700 rounded-sm'
                }
              >
                Sign In
              </NavLink>
              <NavLink
                to="profile"
                className={() =>
                  'px-2 py-1.5 border-2 text-light-green rounded-sm border-light-green hover:underline underline-offset-[6px] focus:outline outline-2 outline-blue-700 focus:border-transparent'
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </Container>
  </header>
);
export default Header;
