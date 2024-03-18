import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MainRedirect = (props: PropsWithChildren) => {
    // Add sign-in logic here
    const nav = useNavigate(); 
    useEffect(() => {
        nav("/home")
    },[nav])
	return <>{props.children}</>;
};
