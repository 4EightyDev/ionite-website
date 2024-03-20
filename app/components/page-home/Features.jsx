import React from 'react';
import { SectionHeading } from '@/app/components/ui/Elements';

export const Features = () => {
	return (
		<div className='py-24'>
			<div className='mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:max-w-7xl sm:text-center'>
					<SectionHeading heading='Revolutionize the way you control access' />
					<p className='mt-6 text-lg leading-8 text-surface-80'>
						ionite™ empowers you to effortlessly manage
						access to your organization's resources with
						ease and precision. With our intuitive
						interface, you can grant or revoke access
						permissions swiftly, ensuring only
						authorized individuals have the right level
						of access at all times.
					</p>
				</div>
			</div>
			<div className='relative overflow-hidden pt-16'>
				<div className='mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8'>
					<img
						src='/images/dark-project-app-screenshot.png'
						alt='App screenshot'
						className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
						width={2432}
						height={1442}
					/>
					<div className='relative' aria-hidden='true'>
						<div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-surface pt-[7%]' />
					</div>
				</div>
			</div>
		</div>
	);
};
