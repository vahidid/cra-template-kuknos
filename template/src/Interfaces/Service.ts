interface ServiceResponseMeta {
	success: boolean;
	data_type: string;
}

export interface ServiceResponse<T> {
	meta: ServiceResponseMeta;
	data: T;
	page_count: number;
}
