import clsx from 'clsx';

type BaseButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const BaseButton = ({ children, className, ...props }: BaseButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('bg-light-brand text-light-base px-4 py-0.5 rounded-md shadow-md', className)}
      {...props}
    >
      {children}
    </button>
  );
};
