export interface Token {
	access_token: string;
	refresh_token: string;
	totp_required: boolean;
}
