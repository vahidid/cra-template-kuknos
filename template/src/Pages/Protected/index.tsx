import { Container, Typography } from '@mui/material';
import withAuthentication from '../../Components/withAuthentication';

function ProtectedPage() {
	return (
		<Container>
			<Typography>Hello from protected page</Typography>
		</Container>
	);
}

export default withAuthentication(ProtectedPage);
