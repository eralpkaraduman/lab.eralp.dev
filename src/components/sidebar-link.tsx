/** @jsx jsx */
import { jsx, Link as ThemeUILink } from "theme-ui";
import { FunctionComponent } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";

type ThemeUILinkVariantProps = { href: string };

const ThemeUILinkVariant: FunctionComponent<ThemeUILinkVariantProps> = ({
  href,
  children,
  ...props
}) => {
  const { pathname } = useLocation();
  const styleVariant = pathname === href ? "links.navActive" : "links.nav";
  return (
    <ThemeUILink href={href} sx={{ variant: styleVariant }}>
      {children}
    </ThemeUILink>
  );
};

type SidebarLinkProps = { to: string };

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({
  children,
  to,
  ...props
}) => (
  <li>
    <RouteLink component={ThemeUILinkVariant} to={to} {...props}>
      {children}
    </RouteLink>
  </li>
);

export default SidebarLink;
