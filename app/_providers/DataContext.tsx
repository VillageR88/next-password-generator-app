'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export enum Power {
  vWeak = 'vWeak',
  weak = 'weak',
  medium = 'medium',
  strong = 'strong',
}
export interface Settings {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;
}

export interface Password {
  password: string;
  passwordStrength: Power | undefined;
}

export const DataContext = createContext(
  {} as {
    settings: Settings;
    setSettings: Dispatch<SetStateAction<Settings>>;
    password: Password;
    setPassword: Dispatch<SetStateAction<Password>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    includeUpperCase: false,
    includeLowerCase: false,
    includeNumbers: false,
    includeSymbols: false,
    length: 10,
  });

  const [password, setPassword] = useState<Password>({
    password: '',
    passwordStrength: undefined,
  });

  return (
    <DataContext.Provider
      value={{
        settings,
        setSettings,
        password,
        setPassword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
