import React, { forwardRef } from "react";
import classNames from "classnames";

import { Handle, Remove } from "../Item";

import styles from "./Container.module.scss";
import { Collapse } from "antd";

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: Props,
    ref
  ) => {
    // const Component = onClick ? 'button' : 'div';
    // console.log('props >>> ', props);
    // console.log("ref >>> ", ref);

    return (
      <>
        {/* --------------- test1 */}
        {/* <Collapse
          style={
            {
              ...style,
              "--columns": columns,
            } as React.CSSProperties
          }
          ref={ref}
          items={[
            {
              key: "1",
              label: "This is panel header 1",
              children: (
                <div
                  className={classNames(
                    styles.Container,
                    unstyled && styles.unstyled,
                    horizontal && styles.horizontal,
                    hover && styles.hover,
                    placeholder && styles.placeholder,
                    scrollable && styles.scrollable,
                    shadow && styles.shadow
                  )}
                >
                  {children}
                </div>
              ),
            },
          ]}
          defaultActiveKey={["1"]}
        /> */}
        {/* --------------- test2 */}
        {/* <div
          {...props}
          ref={ref}
          style={
            {
              ...style,
              "--columns": columns,
            } as React.CSSProperties
          }
          className={classNames(
            styles.Container,
            unstyled && styles.unstyled,
            horizontal && styles.horizontal,
            hover && styles.hover,
            placeholder && styles.placeholder,
            scrollable && styles.scrollable,
            shadow && styles.shadow
          )}
          onClick={onClick}
          tabIndex={onClick ? 0 : undefined}
        >
          {label ? (
            <div className={styles.Header}>
              {label}
              <div className={styles.Actions}>
                {onRemove ? <Remove onClick={onRemove} /> : undefined}
                <Handle {...handleProps} />
              </div>
            </div>
          ) : null}
          {placeholder ? children : <ul>{children}</ul>}
        </div> */}
        {/* --------------- test3 */}
        <div
          {...props}
          ref={ref}
          style={
            {
              ...style,
              "--columns": columns,
            } as React.CSSProperties
          }
          className={classNames(
            styles.Container,
            unstyled && styles.unstyled,
            horizontal && styles.horizontal,
            hover && styles.hover,
            placeholder && styles.placeholder,
            scrollable && styles.scrollable,
            shadow && styles.shadow
          )}
          onClick={onClick}
          tabIndex={onClick ? 0 : undefined}
        >
          {/* {label ? (
            <div className={styles.Header}>
              {label}
              <div className={styles.Actions}>
                {onRemove ? <Remove onClick={onRemove} /> : undefined}
                <Handle {...handleProps} />
              </div>
            </div>
          ) : null}
          {placeholder ? children : <ul>{children}</ul>} */}
          <Collapse
            ref={ref}
            items={[
              {
                key: "1",
                label: "This is panel header 1",
                children: <div>{children}</div>,
              },
            ]}
            defaultActiveKey={["1"]}
          />
        </div>
      </>
    );
  }
);
