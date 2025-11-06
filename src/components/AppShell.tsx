import MobileTopbar from '@/components/navigation/MobileTopbar';
import Sidebar from '@/components/navigation/Sidebar';
import LocalizedContent from '@/components/LocalizedContent';
import { LanguageProvider } from '@/context/LanguageContext';

export default function AppShell() {
  return (
    <LanguageProvider>
      <MobileTopbar />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 lg:flex-row lg:gap-12 lg:px-8">
        <Sidebar />
        <main className="flex-1">
          <LocalizedContent />
        </main>
      </div>
    </LanguageProvider>
  );
}
