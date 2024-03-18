import { SpaceDashboard, Today } from '@mui/icons-material';
import { Paper, Stack, Tab, Tabs, makeStyles, styled, Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const HomePage = () => {
	return (
		<PageContainer>
			<SideNavigation />
		</PageContainer>
	);
};

const PageContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	flex: 1,
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,
}));

const SideNav = styled(Paper)(({ theme }) => ({
	borderRadius: "0",
	borderRight: `1px solid ${theme.palette.primary.main}`,
}));

const SideNavigation = () => {
	const location = useLocation(); // Use useLocation to get the current path

	// Define your routes and labels
	const routes = [
		{
			path: '/home',
			label: 'Dashboard',
			icon: (
				<Tooltip title={'Dashboard'} arrow placement="right">
					<SpaceDashboard fontSize="large" />
				</Tooltip>
			),
		},
		{
			path: '/home/calendar',
			label: 'Calender',
			icon: (
				<Tooltip title={'Calendar'} arrow placement="right">
					<Today fontSize="large" />
				</Tooltip>
			),
		},
		// Add more routes as needed
	];
	useEffect(() => {
		console.log({ path: location.pathname });
	}, [location.pathname]);
	return (
		<SideNav elevation={5}>
			<Tabs orientation="vertical" value={location.pathname} sx={{"& a.MuiTab-root":{
				minWidth: "30px",
				minHeight: "30px",
				padding: "0.5rem"
			}, "& .MuiTabs-indicator": {left: 0}}}>
				{routes.map((r) => (
					<Tab key={r.path} value={r.path} icon={r.icon} to={r.path} component={NavLink} />
				))}
			</Tabs>
		</SideNav>
	);
};
