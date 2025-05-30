import React, { memo, useCallback, forwardRef, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { useBottomSheetInternal } from '../../hooks';
import type { BottomSheetTextInputProps } from './types';
import type { Insets } from 'react-native';

const BottomSheetTextInputComponent = forwardRef<
  TextInput,
  BottomSheetTextInputProps
>(({ onFocus, onBlur, hitSlop, ...rest }, ref) => {
  //#region hooks
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  useEffect(() => {
    return () => {
      // Reset the flag on unmount
      shouldHandleKeyboardEvents.value = false;
    };
  }, [shouldHandleKeyboardEvents]);
  //#endregion

  //#region callbacks
  const handleOnFocus = useCallback(
    (args: any) => {
      shouldHandleKeyboardEvents.value = true;
      if (onFocus) {
        onFocus(args);
      }
    },
    [onFocus, shouldHandleKeyboardEvents]
  );
  const handleOnBlur = useCallback(
    (args: any) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        onBlur(args);
      }
    },
    [onBlur, shouldHandleKeyboardEvents]
  );
  //#endregion

  return (
    <TextInput
      ref={ref}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      hitSlop={hitSlop as Insets | undefined}
      {...rest}
    />
  );
});

const BottomSheetTextInput = memo(BottomSheetTextInputComponent);
BottomSheetTextInput.displayName = 'BottomSheetTextInput';

export default BottomSheetTextInput;
