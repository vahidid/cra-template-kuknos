import { CircularProgress, Stack } from '@mui/material';

function Loading() {
	return (
		<Stack
			direction="row"
			sx={{
				mt: 4,
				width: '100%',
			}}
			justifyContent="center"
		>
			<CircularProgress />
		</Stack>
	);
}

export default Loading;
