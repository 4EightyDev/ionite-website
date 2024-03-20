import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from '@heroicons/react/20/solid';

const solutions = [
	{
		name: 'Identity & Access Management',
		description: 'Enable appropriate access',
		href: '#',
		icon: ChartPieIcon,
	},
	{
		name: 'Identity Governance',
		description: 'Follow policies, processes, and practices',
		href: '#',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Compliance',
		description: 'Conform to Laws, regulations, and standards',
		href: '#',
		icon: FingerPrintIcon,
	},
	{
		name: 'Governance & Compliance',
		description: 'Protecting the organization and its assets',
		href: '#',
		icon: SquaresPlusIcon,
	},
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
];
const company = [
	{ name: 'About us', href: '#' },
	{ name: 'Careers', href: '#' },
	{ name: 'Support', href: '#' },
];
export const Navigation = () => {
	return (
		<Popover.Group className='hidden lg:flex lg:gap-x-12'>
			<Popover className='relative'>
				<Popover.Button
					as='a'
					className='cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-surface-80 hover:text-white duration-150'
				>
					Solutions
					<ChevronDownIcon
						className='h-5 w-5 flex-none text-green-400'
						aria-hidden='true'
					/>
				</Popover.Button>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-200'
					enterFrom='opacity-0 translate-y-1'
					enterTo='opacity-100 translate-y-0'
					leave='transition ease-in duration-150'
					leaveFrom='opacity-100 translate-y-0'
					leaveTo='opacity-0 translate-y-1'
				>
					<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden popover-panel'>
						<div className='p-2'>
							{solutions.map((item) => (
								<div
									key={item.name}
									className='group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-surface-10/75 duration-150'
								>
									<div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-surface-10 group-hover:bg-surface-20/75 duration-150'>
										<item.icon
											className='h-6 w-6 text-surface-30 group-hover:text-surface-60 duration-150'
											aria-hidden='true'
										/>
									</div>
									<div className='flex-auto'>
										<a
											href={
												item.href
											}
											className='block font-semibold text-surface-80 hover:bg-surface-10 hover:text-white duration-150'
										>
											{item.name}
											<span className='absolute inset-0' />
										</a>
										<p className='mt-1 text-sm text-surface-60/50'>
											{
												item.description
											}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className='grid grid-cols-2 divide-x divide-surface-20 bg-surface-10'>
							{callsToAction.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-surface-80 hover:text-white duration-150 hover:bg-surface-20'
								>
									<item.icon
										className='h-5 w-5 flex-none text-green-400'
										aria-hidden='true'
									/>
									{item.name}
								</a>
							))}
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>

			<a
				href='#'
				className='text-sm font-semibold leading-6 text-surface-80 hover:text-white duration-150'
			>
				Contact/Sales
			</a>

			<Popover className='relative'>
				<Popover.Button
					as='a'
					className='cursor-pointer flex items-center gap-x-1 text-sm font-semibold leading-6 text-white'
				>
					Company
					<ChevronDownIcon
						className='h-5 w-5 flex-none text-green-400'
						aria-hidden='true'
					/>
				</Popover.Button>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-200'
					enterFrom='opacity-0 translate-y-1'
					enterTo='opacity-100 translate-y-0'
					leave='transition ease-in duration-150'
					leaveFrom='opacity-100 translate-y-0'
					leaveTo='opacity-0 translate-y-1'
				>
					<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 p-2 popover-panel'>
						{company.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-surface-80 hover:bg-surface-10 hover:text-white duration-150'
							>
								{item.name}
							</a>
						))}
					</Popover.Panel>
				</Transition>
			</Popover>
		</Popover.Group>
	);
};
