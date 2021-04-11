import { text, withKnobs } from '@storybook/addon-knobs';

import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  decorators: [withKnobs],
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: HeaderComponent,
  props: {
    ext: text('text', 'Hello Storybook'),
  }
})
