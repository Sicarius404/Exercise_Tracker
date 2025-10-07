"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./secondary-button.module.css";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md";
  intent?: "neutral" | "danger";
};

export default function SecondaryButton({
  icon: Icon,
  className,
  children,
  size = "md",
  intent = "neutral",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        size === "sm" ? styles.sizeSm : styles.sizeMd,
        intent === "danger" ? styles.intentDanger : styles.intentNeutral,
        className
      )}
      {...props}
    >
      {Icon ? (
        <Icon
          className={clsx(
            styles.icon,
            size === "sm" ? styles.iconSm : styles.iconMd
          )}
        />
      ) : null}
      <span>{children}</span>
    </button>
  );
}
