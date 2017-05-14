// @flow

import { asyncComponent } from 'react-async-component';

const AsyncArticle = asyncComponent({
  resolve: () => System.import('./component'),
});

export default AsyncArticle;
