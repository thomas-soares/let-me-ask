import { ButtonHTMLAttributes } from "react";

import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button(props: ButtonProps) {
  return <button className="button" {...props} />;
}
