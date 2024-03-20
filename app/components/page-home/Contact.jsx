import React from 'react';
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import { SectionHeading } from '@/app/components/ui/Elements';

export const Contact = () => {
	return (
		<div className='relative isolate'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
				<div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<div
							className='absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
							aria-hidden='true'
						>
							<div
								className='aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-surface-50 to-surface opacity-20'
								style={{
									clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
								}}
							/>
						</div>
						<SectionHeading heading='Get in touch' />
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Nobis
							tenetur quidem veritatis dolorem
							blanditiis corporis vero earum,
							perferendis placeat sint id quis ad
							non ratione numquam
						</p>
						<dl className='mt-10 space-y-4 text-base leading-7 text-gray-300'>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>
										Address
									</span>
									<BuildingOffice2Icon
										className='h-7 w-6 text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									123 Four Ave
									<br />
									Phoenix, AZ 85020
								</dd>
							</div>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>
										Telephone
									</span>
									<PhoneIcon
										className='h-7 w-6 text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									<a
										className='hover:text-white'
										href='tel:+1 (555) 234-5678'
									>
										+1 (555) 234-5678
									</a>
								</dd>
							</div>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>
										Email
									</span>
									<EnvelopeIcon
										className='h-7 w-6 text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									<a
										className='hover:text-white'
										href='mailto:sales@ionite.com'
									>
										sales@ionite.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<form
					action='#'
					method='POST'
					className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
				>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm font-semibold leading-6 text-white'
								>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										autoComplete='given-name'
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-surface-20 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										autoComplete='family-name'
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-surface-20 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-surface-20 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='phone-number'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Phone number
								</label>
								<div className='mt-2.5'>
									<input
										type='tel'
										name='phone-number'
										id='phone-number'
										autoComplete='tel'
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-surface-20 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										name='message'
										id='message'
										rows={4}
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-surface-20 sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className='mt-8 flex justify-end'>
							<button
								type='submit'
								className='rounded-md bg-surface-20 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-surface-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-20'
							>
								Send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
