import React from "react";
import { useTranslation } from "react-i18next";

import { Button as Btn, ButtonProps } from "antd";
import "../../translations/i18n";
import "./Button.scss";

export interface IProps extends ButtonProps {
  label?: string;
  size?: "small" | "middle" | "large";
  loading?: boolean;
  type?: "primary" | "text" | "link" | "default";
  shape?: "circle" | "round";
}

const Button = ({
  label = "Cancel",
  size = "middle",
  loading,
  type,
  shape,
  disabled,
  ...rest
}: IProps) => {
  const { t } = useTranslation();
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
        {t(`${label}`)}
      </Btn>
    </>
  );
};

export default Button;
