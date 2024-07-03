interface PasswordGeneratorOptions {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;
}

import { Power } from '@/app/_providers/DataContext';

export function passwordGenerator({
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols,
  length,
}: PasswordGeneratorOptions) {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+{}:"<>?|[];\',./';

  let all = '';
  if (includeUpperCase) all += upperCase;
  if (includeLowerCase) all += lowerCase;
  if (includeNumbers) all += numbers;
  if (includeSymbols) all += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  const passwordStrength = (password: string): Power => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]+/)) strength += 1;
    let result: Power = Power.vWeak;
    if (strength === 3) result = Power.weak;
    else if (strength === 4) result = Power.medium;
    else if (strength >= 5) result = Power.strong;
    return result;
  };

  return { password: password, passwordStrength: passwordStrength(password) };
}
