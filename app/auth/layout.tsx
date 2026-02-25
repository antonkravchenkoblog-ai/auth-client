import ActionButtons from "@/components/ActionButtons";
import React from 'react'
import {
	NestJsIcon,
	NextDotJsIcon,
	PrismaIcon,
	ShadcnUiIcon,
	TypeScriptIcon
} from "@/components/stack-icons";
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
							<a href='https://tosha-code.xyz/' className='text-[28px] font-extrabold leading-none text-foreground'>AK</a>
						</div>
						<div>
							<div className="space-y-4">
								<div className="inline-flex items-center  rounded-full border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs font-semibold text-zinc-300 backdrop-blur-sm">
									🚀 Save a full day of setup
								</div>
								<h1 className="text-3xl mb-2 font-extrabold tracking-tight lg:text-4xl lg:leading-[1.2]">
									Production auth you can <br/> actually maintain
								</h1>
							</div>
							<ul className="mt-5 hidden lg:grid gap-3 text-[0.85rem] text-zinc-300 list-disc pl-5 lg:list-inside">
								<li>Copy-pasteable auth for real apps (front + back)
								</li>
								<li>Secure flows + reCAPTCHA, ready out of the box</li>
								<li>Get support when you’re stuck</li>
							</ul>
							
							<h5 className='block text-[0.75rem] mt-2 text-grey lg:hidden'>
								Every time you start a new project, you waste hours setting up authentication.
								Get a secure, production-ready auth system with support. Adapt designs in minutes via AI — no bloat or external dependencies.
							</h5>
							
							<div className="pt-10">
								<div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
									<div className="group flex flex-col items-center gap-2" title="Next.js">
										<div className="w-10 h-10 flex items-center justify-center bg-card border  rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1 ">
											<NextDotJsIcon className="h-5 w-5 text-foreground/80" />
										</div>
									</div>
									<div className="group flex flex-col items-center gap-2" title="Shadcn UI">
										<div className="w-10 h-10 flex items-center justify-center bg-card border  rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1 ">
											<ShadcnUiIcon className="h-5 w-5 text-foreground/80" />
										</div>
									</div>
									
									<div className="group flex flex-col items-center gap-2" title="TypeScript">
										<div className="w-10 h-10 flex items-center justify-center bg-card border  rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1">
											<TypeScriptIcon className="h-5 w-5 text-foreground/80" />
										</div>
									</div>
									
									<div className="group flex flex-col items-center gap-2" title="TypeScript">
										<div className="w-10 h-10 flex items-center justify-center bg-card border  rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1">
											<PrismaIcon className="h-5 w-5 text-foreground/80" />
										</div>
									</div>
									<div className="group flex flex-col items-center gap-2" title="TypeScript">
										<div className="w-10 h-10 flex items-center justify-center bg-card border  rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1">
											<NestJsIcon className="h-5 w-5 text-foreground/80" />
										</div>
									</div>
									
							
								
								</div>
							</div>
						</div>

						<div className='flex items-center gap-3 text-[0.85rem] text-muted-foreground'>
							<a href='https://tosha-code.xyz/' className=''>
								Anton Kravchenko
							</a>
							<span>·</span>
							<a className='hover:underline text-zinc-400' href='#'>Privacy</a>
							<span>·</span>
							<a className='hover:underline text-zinc-400' href='#'>Terms</a>
							<span>·</span>
							<a className='hover:underline text-zinc-400' href='#'>Security</a>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center bg-background px-4 pb-24 lg:bg-muted/55 lg:py-6'>
					<div className='w-full max-w-[520px] lg:max-w-115'>{children}</div>
				</div>
			</div>
		</div>
	)
}
