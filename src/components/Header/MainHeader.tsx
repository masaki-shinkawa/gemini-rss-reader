import { useState } from 'react';
import { createPortal } from 'react-dom';

import LogoIcon from '@/assets/icon/logo.svg';
import { SettingIcon } from '@/components/Icon';
import { SettingDialog } from '@/features/setting';

export const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-light-base dark:bg-dark-base w-full h-8 py-1 px-4 flex justify-between">
      <img className="text-light-brand fill-light-brand" src={LogoIcon} alt="setting" />
      <button type="button" aria-label="Setting" onClick={() => setIsOpen(true)}>
        <SettingIcon className="fill-light-brand dark:fill-light-brand" />
      </button>
      {createPortal(<SettingDialog open={isOpen} />, document.body)}
    </header>
  );
};
