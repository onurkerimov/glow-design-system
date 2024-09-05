import ColorButton from './ColorButton';
import Label from '../Label';
import Tooltip from '../Tooltip';
import ClickAwayListener from 'react-click-away-listener';
import { RgbaColorPicker, RgbaColor } from 'react-colorful';
import { debounce } from 'ts-debounce';
import Popper from '@material-ui/core/Popper';
import React, { useMemo, useEffect, useRef, useState } from 'react';
import { rgbaToString, RGBA, rgbToHex, decomposeColor } from './utils';
import { ColorTextInput, HexInput } from './ColorTextInput';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 12,
    border: `2px solid ${theme.palette.formsort.border.hovered}`,
    boxShadow: '4px 4px 0px 0px rgba(38, 46, 72, 0.15)',
  },
  topRow: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  hexContainer: {
    marginLeft: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomRow: {
    width: 360,
    borderTop: `1px solid ${theme.palette.formsort.border.primary}`,
    padding: '16px 8px 8px 16px',
  },
  presetButton: {
    width: 40,
    height: 40,
    border: `1px solid ${theme.palette.formsort.border.primary}`,
    borderRadius: '50%',
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    cursor: 'pointer',
    '&:focus-visible': {
      borderColor: theme.palette.formsort.border.focused,
      outline: `3px solid ${theme.palette.formsort.border.focused}`,
    },
  },
}));

export const defaultColorPickerValue: RGBA = {
  red: 238,
  green: 68,
  blue: 34,
  alpha: 1,
};

export type ColorPickerProps = UIComponent<
  'button',
  {
    label?: string;
    presetColors?: IColorVariable[];
    onChange: (value: RGBA) => void;
    color?: RGBA;
  },
  'ref'
>;

const getRgbaFromColorResult = (colorResult: RgbaColor) => {
  const { r, g, b, a } = colorResult;
  const value = {
    red: r,
    green: g,
    blue: b,
    alpha: a,
  } as RGBA;
  return value;
};

const getColorResultFromRgba = ({ red, green, blue, alpha }: RGBA) => ({
  r: red,
  g: green,
  b: blue,
  a: alpha ?? 1,
});

const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  (props, ref) => {
    const { label, presetColors, onChange, color, ...htmlProps } =
      props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedColor, setSelectedColor] = useState<RGBA>(
      color ?? defaultColorPickerValue
    );
    const { alpha: _alpha, ...rgb } = selectedColor;
    const hex = rgbToHex(rgbaToString(rgb)).toUpperCase();
    const anchorRef = useRef<HTMLButtonElement>(null);
    const forkedRef = useForkRef(anchorRef, ref);

    const styles = useStyles();

    const debouncedOnChange = useMemo(() => debounce(onChange, 200), []);
    useEffect(() => debouncedOnChange(selectedColor), [selectedColor]);

    const setProperty = (key: keyof RGBA) => (nextValue: number) =>
      setSelectedColor({ ...selectedColor, [key]: nextValue });

    const setSelectedColorFromReactColorful = (colorResult: RgbaColor) => {
      setSelectedColor(getRgbaFromColorResult(colorResult));
    };

    function setSelectedColorFromHex(value: string) {
      const [red, green, blue] = decomposeColor(value).values;
      setSelectedColor({ red, green, blue });
    }

    return (
      <>
        <ColorButton
          {...htmlProps}
          label={label}
          selectedColor={selectedColor}
          ref={forkedRef}
          onClick={() => setIsOpen((s) => !s)}
        />
        <Popper
          open={isOpen}
          disablePortal={true}
          anchorEl={anchorRef.current}
          style={{ zIndex: 2000 }}
        >
          <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            {newFunction_1(styles, selectedColor, setSelectedColorFromReactColorful, hex, setSelectedColorFromHex, setProperty, presetColors)}
          </ClickAwayListener>
        </Popper>
      </>
    );
  }
);

export default ColorPicker;

function newFunction_1(selectedColor: RGBA, setSelectedColorFromReactColorful: (colorResult: RgbaColor) => void, hex: any, setSelectedColorFromHex: (value: string) => void, setProperty: (key: keyof RGBA) => (nextValue: number) => void, presetColors: UIComponent<"button", { label?: string | undefined; presetColors?: IColorVariable[] | undefined; onChange: (value: RGBA) => void; color?: any; }, "ref">) {
  return <div className={styles.container}>
    <div className={styles.topRow}>
      <RgbaColorPicker
        color={getColorResultFromRgba(selectedColor)}
        onChange={setSelectedColorFromReactColorful} />
      <div className={styles.hexContainer}>
        <div>
          <HexInput
            value={hex}
            onChange={(value) => setSelectedColorFromHex(value)} />
        </div>
        <div>
          <ColorTextInput
            label="R"
            type="number"
            min={0}
            max={255}
            value={selectedColor.red}
            onChange={setProperty('red')} />
          <ColorTextInput
            label="G"
            type="number"
            min={0}
            max={255}
            value={selectedColor.green}
            onChange={setProperty('green')} />
          <ColorTextInput
            label="B"
            type="number"
            min={0}
            max={255}
            value={selectedColor.blue}
            onChange={setProperty('blue')} />
          <ColorTextInput
            label="A"
            adornment="%"
            type="number"
            min={0}
            max={100}
            step={1}
            value={selectedColor.alpha !== undefined
              ? Math.round(selectedColor.alpha * 100)
              : 100}
            onChange={(value) => setProperty('alpha')(value / 100)} />
        </div>
      </div>
    </div>
    {presetColors && Boolean(presetColors.length) && newFunction(presetColors, setSelectedColorFromHex)}
  </div>;
}

function newFunction(presetColors: any, setSelectedColorFromHex: (value: string) => void): React.ReactNode {
  return <div className={styles.bottomRow}>
    <Label label={'Color variables'} />
    {presetColors.map((presetColor, key) => (
      <Tooltip title={presetColor.label} key={key}>
        <button
          className={styles.presetButton}
          style={{
            backgroundColor: presetColor.value,
          }}
          onClick={() => setSelectedColorFromHex(presetColor.value)}
        ></button>
      </Tooltip>
    ))}
  </div>;
}

