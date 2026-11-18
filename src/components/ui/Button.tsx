import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentProps<"a">,
    "href" | "className" | "children"
  >;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", icon, iconRight, className, children, ...rest } = props;
  const cls = clsx(styles.button, styles[variant], styles[size], className);
  const inner = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchorProps}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...anchorProps}>
        {inner}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;
  return (
    <button type={type} className={cls} {...buttonProps}>
      {inner}
    </button>
  );
}
