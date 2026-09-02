import TiSeguoPage from '@/components/projects/tiseguo/TiSeguoPage.jsx';
import LanguageSwitcher from '@/global/multiLang/LanguageSwitcher.jsx';
import usePageMeta from '@/hooks/usePageMeta.ts';
import { useTranslation } from 'react-i18next';

export default function TiSeguoView() {
  const { t } = useTranslation('tiseguo');

  usePageMeta({
    title: t('meta.title'),
    favicon: '/projects/tiseguo/favicon.ico',
  });

  return (
    <div className="bg-[#fafaf7] text-[#171918] antialiased [color-scheme:light] [font-family:Arial,Helvetica,sans-serif] selection:bg-[rgba(23,25,24,0.12)] selection:text-[#171918]">
      <TiSeguoPage />
      <LanguageSwitcher />
    </div>
  );
}
