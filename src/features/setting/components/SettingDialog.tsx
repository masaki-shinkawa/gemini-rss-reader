import { BaseButton } from '@/components/Button';

type SettingDialogProps = {
  open: boolean;
};

export const SettingDialog = ({ open }: SettingDialogProps) => {
  return (
    <dialog open={open} className="inset-0">
      <div className="w-[clamp(300px,_80vw,_800px)] border-2 rounded-md shadow-lg p-4 items-center max-h-[80vh] overflow-y-scroll">
        <h2 className="text-2xl font-bold">Settings</h2>
        <div className="flex flex-col mt-4 gap-4">
          <section className="flex flex-col items-start gap-2">
            <h3 className="font-bold">Gemini API Token</h3>
            <input type="password" className="border-2 rounded-md w-full" />
            <BaseButton>register</BaseButton>
          </section>
          <section className="flex flex-col items-start gap-2">
            <h3 className="font-bold">RSS URL</h3>
            <input type="password" className="border-2 rounded-md w-full" />
            <BaseButton>register</BaseButton>
          </section>
        </div>
      </div>
    </dialog>
  );
};
