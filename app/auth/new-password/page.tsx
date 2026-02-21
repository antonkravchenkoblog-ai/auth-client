import {ReCaptchaProvider} from "@/shared/providers/ReCaptchaProvider";
import type { Metadata } from 'next'

import { NewPasswordForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'New password'
}

export default function NewPasswordPage() {
	return <ReCaptchaProvider>
	<NewPasswordForm />
		</ReCaptchaProvider>
}
