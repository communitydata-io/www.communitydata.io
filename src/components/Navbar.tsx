"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  {
    name: "directory",
    href: "https://directory.communitydata.io",
  },
  {
    name: "editor",
    href: "https://editor.communitydata.io",
  },
  {
    name: "apps",
    href: "https://apps.communitydata.io",
  },
  {
    name: "docs",
    href: "https://docs.communitydata.io",
  },
];

const Navbar = () => {
  return (
    <nav className="grow-0 p-4 px-8 flex items-center">
      <div>
        <h1 className="text-lg font-semibold flex items-center space-x-1">
          <span>
            <Link href="/" className="hover:underline">
              community_data
            </Link>
          </span>
          <span>/</span>
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button
                  className={`${
                    open ? "border-gray-200 hover:bg-white" : "border-white"
                  } border-4 -mt-1 border-b-0 inline-flex justify-between items-center p-2 px-3 w-36 hover:bg-gray-100 font-semibold text-gray-900`}
                >
                  <span className="text-green-700">home</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-6 text-gray-600 flex-shrink-0"`}
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Menu.Items className="absolute left-0 z-10 w-36 origin-top-left bg-white shadow-sm border-4 border-t-0 border-gray-200 focus:outline-none">
                  <div className="py-1">
                    {links.map((link, k) => (
                      <Menu.Item key={k}>
                        {({ active }) => (
                          <a
                            href={link.href}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-green-700"
                                : "text-gray-800",
                              "block p-1.5 px-3"
                            )}
                          >
                            <h1 className="text-lg font-semibold flex items-center space-x-1">
                              <span>{link.name}</span>
                            </h1>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
