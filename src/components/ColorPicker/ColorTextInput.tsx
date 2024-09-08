import { makeStyles } from '@material-ui/core/styles';
import { cx } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${theme.palette.brand.border.primary}`,
    display: 'flex',
    width: 104,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -1,
    padding: 12,
    fontFamily: 'code',
    fontWeight: 700,
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '&:last-child': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    '&:focus-within': {
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main,
      // z-index hack
      transform: 'translateX(0)',
    },
  },
  label: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 700,
  },
  input: {
    border: 0,
    width: '100%',
    fontWeight: 700,
    outline: 'none',
    textAlign: 'right',
    color: theme.palette.text.primary,
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
  centered: {
    textAlign: 'center',
  },
}));

// 3 or 6 digit hex code. `#` is optional
const validHexColorRegex = /^#?([0-9a-f]{6})$/i;

type Override<T, U> = Omit<T, keyof U> & U;

type ColorTextInputBaseProps<T> = Override<
  React.ComponentProps<'input'>,
  {
    value: T;
    onChange: (value: T) => void;
    label?: string;
    height?: number;
    adornment?: string;
  }
>;

const ColorTextInputBase = <T extends string | number>(
  props: ColorTextInputBaseProps<T>
) => {
  const {
    value,
    onChange,
    label,
    type,
    height = 37,
    adornment,
    ...htmlProps
  } = props;
  const styles = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container} style={{ height }}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        {...{
          type,
          value,
        }}
        onChange={(e) => onChange(e.target.value as T)}
        spellCheck="false"
        className={cx(styles.input, { [styles.centered]: type !== 'number' })}
        ref={inputRef}
        {...htmlProps}
      />
      <span onClick={() => inputRef.current?.focus()}>{adornment}</span>
    </div>
  );
};

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export const ColorTextInput = (
  props: Override<
    ColorTextInputBaseProps<number>,
    {
      min: number;
      max: number;
    }
  >
) => {
  const { onChange, ...rest } = props;
  return (
    <ColorTextInputBase
      type="number"
      {...rest}
      onChange={(nextValue) => {
        onChange(clamp(nextValue, props.min, props.max));
      }}
    />
  );
};

export const HexInput = (props: ColorTextInputBaseProps<string>) => {
  const { value, onChange } = props;
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => setLocalValue(value), [value]);

  return (
    <ColorTextInputBase
      value={localValue}
      height={40}
      onChange={(nextValue) => {
        if (validHexColorRegex.test(nextValue)) {
          const maybeHashtag = nextValue[0] !== '#' ? '#' : '';
          onChange(maybeHashtag + nextValue.toUpperCase());
        }
        setLocalValue(nextValue);
      }}
      onFocus={(e) => e.target.setSelectionRange(0, e.target.value.length)}
    />
  );
};
