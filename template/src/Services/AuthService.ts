import { ServiceResponse } from '../Interfaces/Service';
import apiClient from './Api';

export const SendOtpService = (phone_number: string) =>
	apiClient.post<ServiceResponse<boolean>>('/microservice/authorization/otp', {
		mobile: phone_number,
	});
