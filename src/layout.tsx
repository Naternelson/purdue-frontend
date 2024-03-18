import { Box, Button, ButtonBase, Link, styled, Toolbar } from '@mui/material';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { NavButton } from './components';

export const RootLayout = () => {
	return (
		<MainComponent component="main">
			<Navbar />
			<Outlet />
		</MainComponent>
	);
};

const MainComponent = styled(Box)(() => ({
	boxSizing: 'border-box',
	height: '100vh',
	display: "flex",
	flexDirection: "column"
}));

const Navbar = () => {
	return (
		<Nav>
			<NavButton to={'/'} ButtonProps={{ sx: { padding: '.25rem .75rem', fontSize: '.7rem' } }}>
				Home
			</NavButton>
			<NavButton to={'/courses'} ButtonProps={{ sx: { padding: '.25rem .75rem', fontSize: '.7rem' } }}>
				Courses
			</NavButton>
		</Nav>
	);
};

const Nav = styled('nav')(({ theme }) => ({
	display: 'flex',
	gap: '1rem',
	padding: '.1rem 1rem',
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	boxShadow: theme.shadows[3],
	fontSize: ".8rem"
}));
