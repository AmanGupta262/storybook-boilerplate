import React from "react";
import { Button as Btn, ButtonProps } from "antd";
import "./Button.scss";

export interface IProps extends ButtonProps {
  label?: string;
  size?: "small" | "middle" | "large";
  loading?: boolean;
  type?: "primary" | "text" | "link" | "default";
  shape?: "circle" | "round";
}

const Button = ({
  label = "Button",
  size = "middle",
  loading,
  type,
  shape,
  disabled,
  ...rest
}: IProps) => {
  return (
    <>
      <Btn
        data-testid="button"
        className="button"
        type={type}
        size={size}
        loading={loading}
        shape={shape}
        disabled={disabled}
        {...rest}
      >
        {label}
      </Btn>
    </>
  );
};

export default Button;
