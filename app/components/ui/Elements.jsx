import React from 'react';

export const SectionHeading = ({ heading }) => {
	return (
		<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
			<span className='bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent'>
				{heading}
			</span>
		</h2>
	);
};
