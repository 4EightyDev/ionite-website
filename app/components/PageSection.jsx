import React from 'react';
import { twMerge } from 'tailwind-merge';

export const PageSection = ({ heading, copy, image, imgLeft, imgRight }) => {
	return (
		<div className='relative isolate overflow-hidden'>
			<div
				className={twMerge(
					'flex flex-col gap-6 lg:gap-16 px-6 py-24 max-w-7xl mx-auto',
					imgLeft && 'lg:flex-row',
					imgRight && 'lg:flex-row-reverse'
				)}
			>
				<div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
						<span className='bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent'>
							{heading}
						</span>
					</h2>
					<p className='mt-6 text-lg leading-8 text-surface-80'>
						{copy}
					</p>
					<div className='mt-10 flex items-center gap-x-6'>
						<a
							href='#'
							className='text-sm font-semibold leading-6 text-surface-80'
						>
							Demo ionite™{' '}
							<span
								aria-hidden='true'
								className='text-green-400 ml-2'
							>
								→
							</span>
						</a>
					</div>
				</div>
				<img
					src={image}
					alt='App screenshot'
					className='w-full rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 max-w-2xl mx-auto lg:w-[75rem] lg:max-w-none'
				/>
			</div>
		</div>
	);
};
