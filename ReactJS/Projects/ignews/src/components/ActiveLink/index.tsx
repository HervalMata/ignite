import {cloneElement, ReactElement} from "react";
import {useRouter} from "next/router";
import Link, {LinkProps} from "next/link";

interface IActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: IActiveLinkProps) {
    const { asPath } = useRouter();
    const className = asPath === rest.href ? activeClassName : '';

    return (
        <Link {...rest}>
            {
                cloneElement(children, {
                    className
                })
            }
        </Link>
    )
}