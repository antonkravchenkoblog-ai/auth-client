import React from 'react'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='min-h-screen w-full'>
			<div className='grid min-h-screen w-full grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[1.35fr_1fr] lg:gap-0 lg:px-0 lg:py-0'>
				<div className='flex w-full border-border bg-background text-foreground lg:border-r'>
					<div className='mx-auto flex w-full max-w-130 flex-col items-center justify-center gap-8 px-4 py-2 text-center lg:mx-0 lg:max-w-none lg:items-start lg:justify-between lg:px-14 lg:py-14 lg:text-left'>
						<div className='inline-flex h-10 w-10 items-center justify-center'>
							{/*you logo*/}
							<span className='text-[28px] font-extrabold leading-none text-foreground'>Y</span>
						</div>

						<div>
							<h1 className='text-[1.5rem] lg:text-[2.5rem] font-extrabold leading-[1.1] text-foreground '>
								Coding agents that work where you do
							</h1>
							<ul className='mt-5 hidden lg:grid gap-3 text-[0.95rem] text-muted-foreground'>
								<li>Ship code and review PRs from Slack, Linear, or GitHub</li>
								<li>Automate bug fixes, docs, and changelogs with AI agents</li>
								<li>Works with your existing tools — no vendor lock-in</li>
							</ul>
							
							<h5 className='block text-[0.75rem] mt-2 text-grey lg:hidden'>
								Ship code from Slack, Linear, or GitHub. Automate bug fixes, docs, and changelogs with AI agents. No vendor lock-in.
							</h5>
						</div>

						<div className='flex items-center gap-3 text-[0.85rem] text-muted-foreground'>
							<a className='hover:underline' href='#'>Privacy</a>
							<span>·</span>
							<a className='hover:underline' href='#'>Terms</a>
							<span>·</span>
							<a className='hover:underline' href='#'>Security</a>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center bg-background px-4 pb-12 lg:bg-muted/55 lg:py-6'>
					<div className='w-full max-w-[520px] lg:max-w-115'>{children}</div>
				</div>
			</div>
		</div>
	)
}
