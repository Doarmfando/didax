import { Link } from "react-router-dom";

export default function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} {...props}>
      {children}
    </Link>
  );
}
