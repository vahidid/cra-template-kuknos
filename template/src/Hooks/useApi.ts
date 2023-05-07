/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';
import { ServiceError } from '../Interfaces/Service';

const useApi = <T extends any, R extends any[]>(
	apiFunc: (...args: R) => Promise<T>
) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const request = async (...args: Parameters<typeof apiFunc>) => {
		setLoading(true);
		try {
			setError('');
			setData(undefined);

			const result = await apiFunc(...args);

			setData(result);
			return result;
		} catch (err) {
			if (err instanceof Error) {
				// A TypeError
				setError(err.message);
			} else if (axios.isAxiosError(err)) {
				const errMsg = (err.response?.data as ServiceError)?.message;
				if (errMsg) {
					setError(errMsg);
					throw new Error(errMsg);
				} else {
					setError('خطایی رخ داده است!');
				}
			} else {
				// everything else
				setError('خطایی رخ داده است!');
			}

			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		error,
		loading,
		request,
	};
};

export default useApi;
