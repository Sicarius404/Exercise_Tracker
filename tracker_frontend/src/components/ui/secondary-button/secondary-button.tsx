"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./secondary-button.module.css";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<{ className?: string }>;
};

export default function SecondaryButton({
  icon: Icon,
  className,
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{children}</span>
    </button>
  );
}
