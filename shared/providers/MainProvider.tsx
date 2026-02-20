'use client';

import { type PropsWithChildren } from 'react'

import { TanstackQueryProvider, ToastProvider, ThemeProvider } from './index'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<ThemeProvider>
			<TanstackQueryProvider>
				<ToastProvider />
				{children}
			</TanstackQueryProvider>
		</ThemeProvider>
	)
}
