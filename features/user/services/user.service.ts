import { IUser } from '@/features/auth/types'

import { api } from '@/shared/api'

import { TypeSettingsSchema } from '../schemes'

class UserService {
	public async findProfile() {
		const { data } = await api.get<IUser>('users/profile')
		return data
	}

	public async updateProfile(body: TypeSettingsSchema) {
		const { data } = await api.patch<IUser>('users/profile', body)
		return data
	}
}

export const userService = new UserService()
