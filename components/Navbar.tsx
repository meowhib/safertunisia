"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Safer Tunisia</span>
            <img
              className="h-8 w-auto"
              src="/logosafertunisia.png"
              alt="logo safer tunisia"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-2xl p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/digital-nomads"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Digital Nomads
          </Link>
          <Link
            href="/activities"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Activities & trips
          </Link>
          <Link
            href="/stays"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Stays
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/guide"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button>Guide</Button>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Eatourist</span>
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Safer Tunisia</span>
                <img
                  className="h-8 w-auto"
                  src="/logosafertunisia.png"
                  alt="logo safer tunisia"
                />
              </Link>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-2xl p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-2xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/digital-nomads"
                  className="-mx-3 block rounded-2xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Digital Nomads
                </Link>
                <Link
                  href="/activities"
                  className="-mx-3 block rounded-2xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Activities & Trips
                </Link>
                <Link
                  href="/stays"
                  className="-mx-3 block rounded-2xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Stays
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-2xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/guide"
                  className="-mx-3 block rounded-2xl px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <Button>Guide</Button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
