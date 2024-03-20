import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export const TopSection = () => {
	return (
		<>
			<svg
				className='fixed inset-0 -z-10 h-full w-full stroke-surface-20/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
				aria-hidden='true'
			>
				<defs>
					<pattern
						id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
						width={200}
						height={200}
						x='50%'
						y={-1}
						patternUnits='userSpaceOnUse'
					>
						<path d='M.5 200V.5H200' fill='none' />
					</pattern>
				</defs>
				<svg
					x='50%'
					y={-1}
					className='overflow-visible fill-surface-10/50'
				>
					<path
						d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
						strokeWidth={0}
					/>
				</svg>
				<rect
					width='100%'
					height='100%'
					strokeWidth={0}
					fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
				/>
			</svg>
			<div
				className='fixed left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
				aria-hidden='true'
			>
				<div
					className='aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-surface-50 to-surface opacity-20'
					style={{
						clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
					}}
				/>
			</div>

			<div className='relative isolate overflow-hidden h-screen'>
				<div className='flex flex-col gap-16 px-6 py-12 max-w-7xl mx-auto lg:flex-row'>
					<div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
						<div className=''>
							<a
								href='#'
								className='inline-flex space-x-6'
							>
								<span className='rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20'>
									No code solution
								</span>
								<span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-surface-80'>
									<span>
										Just shipped v1.0
									</span>
									<ChevronRightIcon
										className='h-5 w-5 text-surface-50'
										aria-hidden='true'
									/>
								</span>
							</a>
						</div>
						<h1 className='font-display mt-10 text-4xl sm:text-6xl font-extrabold tracking-tight text-surface-80 flex'>
							<span className='bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent'>
								Identity
							</span>{' '}
							<span className='flex bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent'>
								Amplified™
							</span>
						</h1>
						<p className='mt-6 text-lg leading-8 text-surface-80'>
							Frictionless integration across all of
							your security tools, is the only way
							to achieve seamless security across
							all of your platforms.
						</p>
						<div className='mt-20 flex items-center gap-x-6'>
							{/* <a
							href='#'
							className='rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-surface-80 shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'
						>
							Get started
						</a> */}
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
						src='/images/dark-project-app-screenshot.png'
						alt='App screenshot'
						className='w-full rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 max-w-2xl mx-auto lg:w-[75rem] lg:max-w-none'
					/>
				</div>
			</div>
		</>
	);
};
