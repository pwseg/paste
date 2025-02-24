import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import type {BoxProps} from '@twilio-paste/box';

interface CopyButtonProps {
  text: string;
  i18nCopyLabelBefore?: string;
  i18nCopyLabelAfter?: string;
  element?: BoxProps['element'];
  copyTextFormatter?: (code: string) => string;
}

export const getCopyButtonText = (labelBefore: string, labelAfter: string) => {
  return (copied: boolean) => {
    return copied ? labelAfter : labelBefore;
  };
};

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  i18nCopyLabelBefore = 'Copy code block',
  i18nCopyLabelAfter = 'Copied!',
  element = 'COPY_BUTTON',
  copyTextFormatter,
}) => {
  const tooltipState = useTooltipState();
  const [tooltipText, setTooltipText] = React.useState(i18nCopyLabelBefore);
  // Prevents tooltip being visible on first render due to reakit positioning bug code
  const isFirstRender = React.useRef(true);

  const getText = React.useMemo(() => {
    return getCopyButtonText(i18nCopyLabelBefore, i18nCopyLabelAfter);
  }, [i18nCopyLabelBefore, i18nCopyLabelAfter]);

  const clipboard = useClipboard({copiedTimeout: 1500});
  const handleCopy = React.useCallback(() => {
    const formattedText = copyTextFormatter ? copyTextFormatter(text) : text;
    clipboard.copy(formattedText);
  }, [text]);

  React.useEffect(() => {
    setTooltipText(getText(clipboard.copied));
  }, [clipboard.copied]);

  // NOTE: Reakit has a bug where the tooltip doesn't recalc position on content changes
  // This is a workaround until we upgrade to Ariakit with Floating UI fixes
  // https://github.com/twilio-labs/paste/discussions/2037
  React.useEffect(() => {
    // This prevents the tooltip from showing up on mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    tooltipState.hide();
    setTimeout(() => tooltipState.show(), 0);
  }, [tooltipText]);

  return (
    <Tooltip text={tooltipText} state={tooltipState} element={`${element}_TOOLTIP`}>
      <Button variant="inverse" size="icon_small" onClick={handleCopy} element={element}>
        <Box as="span">
          <CopyIcon decorative />
          <Box as="span" aria-live="polite">
            <ScreenReaderOnly>{tooltipText}</ScreenReaderOnly>
          </Box>
        </Box>
      </Button>
    </Tooltip>
  );
};
