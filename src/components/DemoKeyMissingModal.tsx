import type { FormEventHandler } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type DemoModalCopy = {
  title: string;
  description: string;
  descriptionTwo?: string;
  inputLabel: string;
  inputPlaceholder: string;
  confirm: string;
  cancel: string;
};

type DemoKeyMissingModalProps = {
  open: boolean;
  copy: DemoModalCopy;
  inputValue: string;
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onInputChange: (value: string) => void;
};

export function DemoKeyMissingModal({
  open,
  copy,
  inputValue,
  onClose,
  onSubmit,
  onInputChange
}: DemoKeyMissingModalProps) {
  if (!open) return null;

  const labelId = 'demo-access-modal-title';
  const isConfirmDisabled = !inputValue.trim();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg border border-border bg-background p-6 font-lato shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <h2 id={labelId} className="text-xl font-semibold">
              {copy.title}
            </h2>
            <p className="text-sm text-muted-foreground">{copy.description}</p>
            {copy.descriptionTwo && <p className="text-sm font-bold">{copy.descriptionTwo}</p>}
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            {copy.inputLabel}
            <input
              type="text"
              value={inputValue}
              onChange={(event) => onInputChange(event.target.value)}
              placeholder={copy.inputPlaceholder}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoFocus
            />
          </label>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className={cn(buttonVariants({ variant: 'ghost' }), 'px-4')}
            >
              {copy.cancel}
            </button>
            <button
              type="submit"
              className={cn(buttonVariants({ variant: 'default' }), 'px-4')}
              disabled={isConfirmDisabled}
            >
              {copy.confirm}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
