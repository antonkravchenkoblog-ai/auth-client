import { api } from '@/shared/api'

import { TypeLoginSchema, TypeRegisterSchema } from '../schemes'
import { IUser } from '../types'

class AuthService {
	public async register(body: TypeRegisterSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const { data } = await api.post<{ message: string }>('auth/register', body, {
			headers
		})
		return data
	}

	public async login(body: TypeLoginSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const { data } = await api.post<IUser & { message?: string }>('auth/login', body, {
			headers
		})
		return data
	}

	public async oauthGoogle() {
		const { data } = await api.get<{ url: string }>('auth/oauth/connect/google')
		return data
	}

	public async logout() {
		const { data } = await api.post('auth/logout')
		return data
	}
}

export const authService = new AuthService()
