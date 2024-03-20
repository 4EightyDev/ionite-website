'use client';
import { useState } from 'react';
import { Navigation } from '@/app/components/ui/Navigation';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className='sticky top-0 z-50 bg-surface/50 backdrop-blur-md'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
				aria-label='Global'
			>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>ionite</span>
						<img
							className='h-11 w-auto'
							src='/images/logo-ionite-gradient.svg'
							alt=''
						/>
					</a>
				</div>
				<Navigation />
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-surface-80'
					>
						Demo ionite™{' '}
						<span
							className='ml-2 text-green-400'
							aria-hidden='true'
						>
							&rarr;
						</span>
					</a>
				</div>
			</nav>
		</header>
	);
};
