import React from 'react';

import { UserProfileProvider, UserProfile } from '@regimentor/mof-page-user-profile';
import '@regimentor/mof-page-user-profile/dist/bundle.css';

export default function Users() {
  return (
    <UserProfileProvider>
      <UserProfile />
    </UserProfileProvider>
  );
}
