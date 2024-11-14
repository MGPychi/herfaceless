import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Nav } from '@/components/nav';
import { IconX, IconMenu2, IconArrowRight } from '@/components/icons';

const SidebarLayout = ({ children, sidelinks }) => {
  const [navOpened, setNavOpened] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
      <aside className='relative flex flex-col'>
          <Button onClick={() => setNavOpened(!navOpened)} size='icon' variant='outline'>
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>

        {/* Navigation links */}
        <Nav
          id='sidebar-menu'
          className={`z-40 h-full flex-1 overflow-auto ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sidelinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size='icon'
          variant='outline'
          className='absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex'
        >
          <IconArrowRight
            stroke={1.5}
            className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </Button>
      </aside>
  );
};

export default SidebarLayout;
