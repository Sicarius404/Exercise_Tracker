"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./primary-button.module.css";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<{ className?: string }>;
};

export default function PrimaryButton({
  icon: Icon,
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{children}</span>
    </button>
  );
}
