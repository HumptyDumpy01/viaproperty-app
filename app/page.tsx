import LogoImg from '@/assets/logo.png';
import Image from 'next/image';
import React from 'react';
import NavLink from '@/components/UI/Link/NavLInk';

export default function Home() {
  return (
    <main className={``}>
      <div className={`max-w-7xl mx-auto w-full mt-9`}>
        <nav className={`flex items-center`}>
          <div className={`flex items-center gap-1 mr-16`}>
            <Image className={`w-[45.7px]`} src={LogoImg} alt={`Viaproperty logo`} />
            <h3
              className={`text-[13.163px] uppercase font-bold bg-clip-text text-transparent bg-linear-main-red font-montserrat-alternates`}>Viaproperty</h3>
          </div>
          <div className={`flex gap-12`}>
            <NavLink label={`Home`} path={`/`} type={`active`} />
            <NavLink label={`Buy`} path={`/buy`} type={`default`} />
            <NavLink label={`Rent`} path={`/rent`} type={`default`} />
            <NavLink label={`Sell`} path={`/sell`} type={`default`} />
          </div>

          <div>

          </div>

        </nav>
      </div>
      <header>
      </header>
    </main>
  );
}
