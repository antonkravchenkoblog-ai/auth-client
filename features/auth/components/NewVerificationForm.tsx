'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Loading
} from '@/components/ui'

import { useVerificationMutation } from '../hooks'

export function NewVerificationForm() {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [token])

	return (
		<Card className='w-120'>
			<CardHeader className='space-y-2'>
				<CardTitle>Email Verification</CardTitle>
			</CardHeader>
			<CardContent>
				<div>
					<Loading />
				</div>
			</CardContent>
		</Card>
	)
}
