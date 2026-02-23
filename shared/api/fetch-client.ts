
export class FetchError extends Error {
	public constructor(
		public statusCode: number,
		public message: string
	) {
		super(message);
		
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

type RequestOptions = RequestInit & {
	params?: Record<string, string | number>;
};

export class FetchClient {
	private baseUrl: string;
	private options: RequestInit;
	private headers: Record<string, string>;
	
	constructor({
		            baseUrl,
		            options = {},
		            headers = {},
	            }: {
		baseUrl: string;
		options?: RequestInit;
		headers?: Record<string, string>;
	}) {
		this.baseUrl = baseUrl;
		this.options = options;
		this.headers = headers;
	}
	
	private createSearchParams(params: Record<string, string | number>) {
		const searchParams = new URLSearchParams();
		Object.entries(params).forEach(([key, value]) => {
			searchParams.append(key, String(value));
		});
		return `?${searchParams.toString()}`;
	}
	
	private async request<T>(
		endpoint: string,
		method: RequestInit['method'],
		options: RequestOptions = {}
	): Promise<T> {
		let url = `${this.baseUrl}/${endpoint}`;
		
		if (options.params) {
			url += this.createSearchParams(options.params);
		}
		
		const config: RequestInit = {
			...options,
			...(!!this.options && { ...this.options }),
			method,
			headers: {
				...(!!options?.headers && options.headers),
				...this.headers,
			},
		};
		
		const response: Response = await fetch(url, config);
		
		if (!response.ok) {
			const error = (await response.json()) as
				| { message: string }
				| undefined;
			
			throw new FetchError(
				response.status,
				error?.message || response.statusText
			);
		}
		
		if (response.headers.get('Content-Type')?.includes('application/json')) {
			return (await response.json()) as unknown as T;
		} else {
			return (await response.text()) as unknown as T;
		}
	}
	
	public get<T>(
		endpoint: string,
		options: Omit<RequestOptions, 'body'> = {}
	) {
		return this.request<T>(endpoint, 'GET', options);
	}
	
	public post<T>(
		endpoint: string,
		body?: Record<string, any>,
		options: RequestOptions = {}
	) {
		return this.request<T>(endpoint, 'POST', {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...(options?.headers || {}),
			},
			...(!!body && { body: JSON.stringify(body) }),
		});
	}
	
	public delete<T>(
		endpoint: string,
		options: Omit<RequestOptions, 'body'> = {}
	) {
		return this.request<T>(endpoint, 'DELETE', options);
	}
	
	public patch<T>(
		endpoint: string,
		body?: Record<string, any>,
		options: RequestOptions = {}
	) {
		return this.request<T>(endpoint, 'PATCH', {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...(options?.headers || {}),
			},
			...(!!body && { body: JSON.stringify(body) }),
		});
	}
}