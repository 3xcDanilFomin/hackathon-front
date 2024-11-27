import { useRef, ButtonHTMLAttributes, ReactNode, useState } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "default" | "outline";
  size: "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const animateButton = () => {
    setIsAnimate((prevState) => !prevState);
    setTimeout(() => {
      setIsAnimate((prevState) => !prevState);
    }, 800);
  };

  const buttonVariant = {
    default: styles["default"],
    outline: styles["outline"],
  }[variant];

  
  const buttonSize = {
    md: styles["md"],
    lg: styles["lg"],
  }[size];
  
  const buttonClassName = [styles["button"], buttonVariant, buttonSize].join(" ")

  return (
    <button
      className={
        isAnimate
          ? [buttonClassName, styles["animate"]].join(" ")
          : buttonClassName
      }
      ref={buttonRef}
      onClick={() => animateButton()}
      {...props}
    >
      {children}
    </button>
  );
};
