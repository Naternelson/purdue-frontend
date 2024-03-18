import { PropsOf } from "@emotion/react";
import { ButtonBase, ButtonBaseProps, Link, lighten, styled } from "@mui/material";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
export type NavButtonProps = {
    to: string;
    end?: boolean;
    underline?: "none" | "hover" | "always";
    color?: "inherit" | "primary" | "secondary" | "error";
    disabled?: boolean;
    ButtonProps?: ButtonBaseProps; 
    ButtonRef?: React.Ref<HTMLButtonElement>;
    className?: string;
    LinkProps?: PropsOf<typeof Link>;
    LinkRef?: React.Ref<HTMLAnchorElement>;

}
export const NavButton = (props: PropsWithChildren<NavButtonProps>) => {
    const { to, underline, color,  disabled, ButtonProps, ButtonRef, end, className, LinkProps, LinkRef } = props;
    const bProps:ButtonBaseProps = {
        color: color,
        disabled: disabled,
        className,
        ...ButtonProps
    }
    const aProps = {
        to: to,
        end: end,
        component: NavLink,
        underline: underline || "none",
        color: "inherit",
        ...LinkProps
    }
    return (
        <StyledButton {...bProps} ref={ButtonRef} >
            <Link {...aProps} ref={LinkRef}>
                {props.children}
            </Link>
        </StyledButton>
    )
}

const StyledButton = styled(ButtonBase)(({ theme }) => ({
    color: lighten(theme.palette.primary.contrastText, 0.3),
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "0.15rem",
    transition: "background-color 0.3s",
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    }
}));

