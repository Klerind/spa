import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Guest({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
      <div className="min-h-screen bg-gray-100">
          <nav className="bg-white border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                      <div className="flex">
                          <div className="shrink-0 flex items-center">
                              <Link href="/home">
                                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                              </Link>
                          </div>

                          <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                              <NavLink href={route('home')} active={route().current('home')}>
                                  Home
                              </NavLink>
                          </div>

                          <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                              <NavLink href={route('contact')} active={route().current('contact')}>
                                  Contact
                              </NavLink>
                          </div>

                          <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                              <NavLink href={route('login')} active={route().current('login')}>
                                  Log In
                              </NavLink>
                          </div>

                          <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                              <NavLink href={route('register')} active={route().current('register')}>
                                  Sign Up
                              </NavLink>
                          </div>

                      </div>

                  </div>
              </div>

              <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                  <div className="pt-2 pb-3 space-y-1">
                      <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                          Dashboard
                      </ResponsiveNavLink>
                  </div>

                  <div className="pt-4 pb-1 border-t border-gray-200">
                      <div className="px-4">
                          <div className="font-medium text-base text-gray-800">usr name</div>
                          <div className="font-medium text-sm text-gray-500">user email</div>
                      </div>

                      <div className="mt-3 space-y-1">
                          <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                          <ResponsiveNavLink method="post" href={route('logout')} as="button">
                              Log Out
                          </ResponsiveNavLink>
                      </div>
                  </div>
              </div>
          </nav>

          {header && (
              <header className="bg-white shadow">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
              </header>
          )}
         <main>
           <div className="py-12">
               <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center">
                   <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8 w-full max-w-lg">
                       {children}
                   </div>
               </div>
           </div>
        </main>
      </div>
    );
}
