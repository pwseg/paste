import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {CalendarIcon} from '@twilio-paste/icons/esm/CalendarIcon';
import {DisplayPillGroup} from '../src/DisplayPillGroup';
import {DisplayPill} from '../src/DisplayPill';

export const CustomDisplayPillGroup: React.FC = () => {
  return (
    <CustomizationProvider
      baseTheme="default"
      theme={{
        textColors: {colorTextLink: 'red'},
        fonts: {fontFamilyText: 'arial'},
      }}
      elements={{
        DISPLAY_PILL_GROUP: {
          margin: 'space40',
        },
        DISPLAY_PILL: {
          backgroundColor: 'colorBackgroundNew',
          color: 'colorText',
          padding: 'space40',
        },
      }}
    >
      <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
        <DisplayPill
          data-testid="display-pill-anchor"
          onFocus={() => {
            console.log('Focused Tennis!');
          }}
          onBlur={() => {
            console.log('Blurred Tennis!');
          }}
          href="https://google.com"
        >
          <CalendarIcon color="colorTextIcon" decorative size="sizeIcon10" />
          Tennis
        </DisplayPill>
        <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
        <DisplayPill href="/">Baseball</DisplayPill>
        <DisplayPill>Basketball</DisplayPill>
        <DisplayPill>Soccer</DisplayPill>
      </DisplayPillGroup>
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Display Pill Group/Customization',
  component: DisplayPill,
};
