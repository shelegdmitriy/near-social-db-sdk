import type { NetworkId, WalletSelector } from '@near-wallet-selector/core';
import * as React from 'react';

import { SocialDb } from '../social-db';

type SocialContext = {
  social: SocialDb;
};

export const SocialContext = React.createContext<SocialContext | undefined>(
  undefined
);

type SocialProviderProps = {
  children: React.ReactNode;
  debug?: boolean;
  networkId: NetworkId;
  onProvision?: (social: SocialDb) => void;
  walletSelector: WalletSelector | null;
};

export const SocialProvider = ({
  children,
  debug,
  networkId,
  onProvision,
  walletSelector,
}: SocialProviderProps) => {
  const [social] = React.useState<SocialDb>(new SocialDb({ debug, networkId }));

  React.useEffect(() => {
    social.debug = debug ?? false;
    social.networkId = networkId;
    social.walletSelector = walletSelector;
  }, [debug, social, networkId, walletSelector]);

  React.useEffect(() => {
    if (!onProvision) return;
    onProvision(social);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [social]);

  return (
    <SocialContext.Provider
      value={{
        social,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};
