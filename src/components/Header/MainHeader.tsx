import LogoIcon from '@/assets/icon/logo.svg';
import { SettingIcon } from '@/components/Icon';

export const MainHeader = () => {
  return (
    <header className="bg-light-base dark:bg-dark-base w-full h-8 py-1 px-4 flex justify-between">
      <img className="text-light-brand fill-light-brand" src={LogoIcon} alt="setting" />
      <SettingIcon className="fill-light-brand dark:fill-light-brand" />
    </header>
  );
};
