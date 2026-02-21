import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "small" | "default" | "large";

export interface ButtonProps {
  tag?: string|Component;
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  loadingIcon?: string;
  autoFocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext{
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export type ButtonEmits = {
  (e: "click", value: MouseEvent): void;
};

export interface ButtonInstance{
  ref: Ref<HTMLButtonElement | void>;
}
