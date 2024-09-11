import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    { href: '/', label: 'Home' },
    {href: '/todo-list', label: 'Todo List'},
    { href: '/gallery', label: 'Gallery' },
    {href: '/todo-list/testing-db', label: 'Testing DB'},
  ];

  return (
    <div>
      <nav className='text-black flex justify-between items-center h-20 px-5 border-b-2 mb-5 bg-rose-400'>
        <div className='font-bold'>
            <Link href='/'>Logo here</Link>
        </div>
        <ul className='flex space-x-10 mr-4'>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className='hover:text-zinc-600 duration-500'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// goal today: tukar warna navbar