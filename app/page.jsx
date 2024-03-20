import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { TopSection } from '@/app/components/page-home/TopSection';
import { PageSection } from '@/app/components/PageSection';
import { Features } from '@/app/components/page-home/Features';

export default function Home() {
	return (
		<>
			<Header />
			<TopSection />
			<Features />
			<PageSection
				imgRight
				heading='Identity & Access Management'
				copy='Identity Access Management ensures that the
						right people or groups have access to the
						systems they need in order to do their jobs.'
				image='/images/dark-project-app-screenshot.png'
			/>
			<PageSection
				imgLeft
				heading='Identity Governance'
				copy={
					<span className='flex flex-col gap-6'>
						<span>
							The AI winners will not be businesses
							who use it to automate their current
							security tools and processes. The
							winners will be those who can unleash
							AI to create an automated mesh of
							security, across well integrated
							tools.
						</span>
						<span>
							The role of modern security
							professional is not to shoehorn AI
							into their daily grind, but to create
							an environment full of tools which can
							be orchestrated by an army of
							autonomous AI tools.
						</span>
					</span>
				}
				image='/images/dark-project-app-screenshot.png'
			/>
			<PageSection
				imgRight
				heading='Compliance'
				copy='Leveraging advanced analytics and machine learning algorithms, ionite analyzes identity-related data to detect anomalous behaviors and potential security threats. Rest easy, knowing that with complete auditability, there will never be a black box of knowledge.
'
				image='/images/dark-project-app-screenshot.png'
			/>
			<PageSection
				imgLeft
				heading='Governance And Compliance'
				copy='At ionite, we prioritize governance and
						compliance as essential safeguards against
						security breaches, legal consequences, and
						unauthorized access. These practices not
						only demonstrate our unwavering commitment
						to security but also build trust among our
						valued customers, stakeholders, and external
						partners.
'
				image='/images/dark-project-app-screenshot.png'
			/>
		</>
	);
}
