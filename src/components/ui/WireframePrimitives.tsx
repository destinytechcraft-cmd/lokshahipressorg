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
  return <div className={cn('h-2.5 rounded bg-[#172A4A]/10', widthClasses[w], className)} />;
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
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'navy' | 'green' | 'saffron' | 'blue';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}) {
  const variantStyles = {
    solid: 'bg-[#E30620] hover:bg-[#c7051b] text-white shadow-sm border border-[#E30620]',
    navy: 'bg-[#172A4A] hover:bg-[#0f1c32] text-white shadow-sm border border-[#172A4A]',
    green: 'bg-[#287A18] hover:bg-[#206413] text-white shadow-sm border border-[#287A18]',
    saffron: 'bg-[#E6530C] hover:bg-[#c84607] text-white shadow-sm border border-[#E6530C]',
    blue: 'bg-[#2855A5] hover:bg-[#1f4383] text-white shadow-sm border border-[#2855A5]',
    outline: 'border-2 border-[#172A4A] hover:bg-[#172A4A] hover:text-white text-[#172A4A]',
  };

  const commonClasses = cn(
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-xs sm:text-sm font-bold tracking-wide transition-all duration-150 cursor-pointer select-none active:scale-[0.98]',
    variantStyles[variant] || variantStyles.solid,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        onClick={onClick}
        className={commonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
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
    <div className={cn('rounded-xl border border-[#172A4A]/20 bg-white p-5 shadow-xs transition-all hover:shadow-sm', className)}>
      {label ? (
        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#E30620] flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E30620]" />
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
        'relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#172A4A]/25 bg-white select-none shadow-xs',
        ratio,
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full text-[#172A4A]/15 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="relative z-10 rounded-full bg-[#172A4A] px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-white shadow-sm border border-white/20">
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
      <span className="text-xs font-bold text-[#172A4A]">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 sm:h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3.5 text-sm sm:text-xs text-[#172A4A] placeholder-[#172A4A]/40 focus:border-[#E30620] focus:bg-white focus:outline-none transition-colors"
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
  const { lang } = useLanguage();
  return (
    <section id={id} className={cn('border-b border-dashed border-[#172A4A]/20 py-10 sm:py-12', className)}>
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 sm:mb-8 flex items-center justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {index ? (
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#E30620] px-1.5 text-xs font-black text-white shadow-2xs">
                {index}
              </span>
            ) : null}
            <h2 className="text-base sm:text-2xl font-black tracking-tight text-[#172A4A] min-w-0 break-words leading-tight">
              {title}
            </h2>
          </div>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-[#172A4A]/50 bg-[#172A4A]/5 px-2.5 py-1 rounded border border-[#172A4A]/10">
            {lang === 'mr' ? 'विभाग' : 'SECTION'}
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
    <section className="border-b border-[#172A4A]/20 bg-[#F7F3EC] py-9">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        <nav className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-[#172A4A]/60">
          <button
            type="button"
            onClick={() => onNavigate?.('/')}
            className="hover:text-[#E30620] transition-colors cursor-pointer"
          >
            {t('crumb_home')}
          </button>
          <span>/</span>
          <span className="text-[#172A4A] font-bold">{t(titleKey)}</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="h-9 w-2 rounded-full bg-[#E30620]" />
          <h1 className="text-2xl font-black tracking-tight text-[#172A4A] sm:text-3xl lg:text-4xl">
            {t(titleKey)}
          </h1>
        </div>
        <p className="mt-2 text-xs font-medium text-[#172A4A]/70 max-w-2xl">
          {t('page_subtitle')}
        </p>
      </div>
    </section>
  );
}
