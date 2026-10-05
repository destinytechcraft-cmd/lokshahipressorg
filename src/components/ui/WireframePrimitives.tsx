import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { DictKey } from '../../types';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export type LineWidth = 'full' | '3/4' | '2/3' | '1/2' | '1/3';

export function WFLine({ w = 'full', className }: { w?: LineWidth; className?: string }) {
  const widthClasses: Record<LineWidth, string> = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '2/3': 'w-2/3',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
  };
  return <div className={cn('h-3 rounded bg-neutral-200', widthClasses[w], className)} />;
}

export function WFTextBlock({ lines = 3, className }: { lines?: number; className?: string }) {
  const widths: LineWidth[] = ['full', 'full', '3/4', '2/3', '1/2'];
  return (
    <div className={cn('flex flex-col gap-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <WFLine key={i} w={widths[i % widths.length]} />
      ))}
    </div>
  );
}

export function WFButton({
  children,
  variant = 'solid',
  className,
  onClick,
  type = 'button',
}: {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-150 cursor-pointer select-none active:scale-[0.98]',
        variant === 'solid'
          ? 'bg-neutral-700 hover:bg-neutral-800 text-white shadow-sm'
          : 'border-2 border-neutral-400 hover:border-neutral-600 hover:bg-neutral-100 text-neutral-600',
        className
      )}
    >
      {children}
    </button>
  );
}

export function WFCard({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn('rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-xs transition-colors', className)}>
      {label ? (
        <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          {label}
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function WFImage({
  label = 'IMAGE',
  className,
  ratio = 'aspect-video',
}: {
  label?: string;
  className?: string;
  ratio?: 'aspect-video' | 'aspect-[4/3]' | 'aspect-square' | string;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 bg-neutral-100 select-none',
        ratio,
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full text-neutral-200 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <span className="relative z-10 rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 shadow-2xs backdrop-blur-xs">
        {label}
      </span>
    </div>
  );
}

export function WFInput({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
}: {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-left">
      <span className="text-xs font-semibold text-neutral-500">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border-2 border-neutral-300 bg-neutral-50 px-3 text-xs text-neutral-800 focus:border-neutral-500 focus:bg-white focus:outline-none transition-colors"
      />
    </label>
  );
}

export function SectionShell({
  id,
  index,
  title,
  children,
  className,
}: {
  id?: string;
  index?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('border-b-2 border-dashed border-neutral-300 py-10', className)}>
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 flex items-center gap-3">
          {index ? (
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-neutral-400 px-2 text-xs font-bold text-neutral-500">
              {index}
            </span>
          ) : null}
          <h2 className="text-lg font-bold tracking-tight text-neutral-700 sm:text-xl">
            {title}
          </h2>
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
            Section
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  titleKey,
  onNavigate,
}: {
  titleKey: DictKey;
  onNavigate?: (path: string) => void;
}) {
  const { t } = useLanguage();
  return (
    <section className="border-b-2 border-dashed border-neutral-300 bg-neutral-50 py-8">
      <div className="mx-auto w-full max-w-6xl px-4">
        <nav className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400">
          <button
            type="button"
            onClick={() => onNavigate?.('/')}
            className="hover:text-neutral-700 cursor-pointer"
          >
            {t('crumb_home')}
          </button>
          <span>/</span>
          <span className="text-neutral-600">{t(titleKey)}</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="h-8 w-1.5 rounded bg-neutral-400" />
          <h1 className="text-2xl font-black tracking-tight text-neutral-800 sm:text-3xl">
            {t(titleKey)}
          </h1>
        </div>
        <p className="mt-2 text-xs font-semibold text-neutral-400">
          {t('page_subtitle')}
        </p>
      </div>
    </section>
  );
}
