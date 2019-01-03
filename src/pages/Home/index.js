import React, { Fragment } from 'react';

import { Button } from '@regimentor/mof-ui-lib';

export default function Home() {
  return (
    <Fragment>
      <h2>Home</h2>
      <Button theme="red">
        <span>touch me</span>
      </Button>
    </Fragment>
  );
}
