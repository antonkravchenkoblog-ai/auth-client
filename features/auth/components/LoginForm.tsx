'use client';

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/components/ui'

import { useLoginMutation } from '../hooks'
import { LoginSchema, TypeLoginSchema } from '../schemes'
import { AuthSocial } from './AuthSocial'

export function LoginForm() {
	const [isShowTwoFactor, setIsShowFactor] = useState(false)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const { login, isLoadingLogin } = useLoginMutation(setIsShowFactor)

	const onSubmit = (values: TypeLoginSchema) => {
		// if (recaptchaValue) {
		// 	login({ values, recaptcha: recaptchaValue })
		// } else {
		// 	toast.error('Please complete reCAPTCHA')
		// }
	}

	return (
		<Card className='w-120'>
			<CardHeader className='space-y-2'>
				<CardTitle>Sign In</CardTitle>
				<CardDescription>Welcome back! Please enter your details to sign in to your account.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='grid gap-2 space-y-2'
					>
						{isShowTwoFactor && (
							<FormField
								control={form.control}
								name='code'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Code</FormLabel>
										<FormControl>
											<Input
												placeholder='123456'
												disabled={isLoadingLogin}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						{!isShowTwoFactor && (
							<>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder='john@example.com'
													disabled={isLoadingLogin}
													type='email'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<div className='flex items-center justify-between'>
												<FormLabel>Password</FormLabel>
												<Link
													href='/auth/reset-password'
													className='ml-auto inline-block text-sm underline'
												>
													Forgot your password?
												</Link>
											</div>
											<FormControl>
												<Input
													placeholder='******'
													disabled={isLoadingLogin}
													type='password'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}
						<div className='flex justify-center'>
						</div>
						<Button type='submit' disabled={isLoadingLogin}>
							Sign in to account
						</Button>
					</form>
				</Form>
				<AuthSocial />
			</CardContent>

			<CardFooter>
				<Button variant='link' className='w-full font-normal'>
					<Link href='/auth/register'>Don&#39;t have an account? Sign up</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
