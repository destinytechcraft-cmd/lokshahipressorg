import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PageShell } from './components/PageShell';
import { PageHero } from './components/ui/WireframePrimitives';
import { Hero, HeroIntroSection } from './components/sections/Hero';
import { MediaCoverage } from './components/sections/MediaCoverage';
import { StatsSection } from './components/sections/StatsSection';
import { AboutSection } from './components/sections/AboutSection';
import { RoleSection } from './components/sections/RoleSection';
import { VisionSection } from './components/sections/VisionSection';
import { OrganisationSection } from './components/sections/OrganisationSection';
import { CommitteesSection } from './components/sections/CommitteesSection';
import { RightsSection } from './components/sections/RightsSection';
import { SocialSection } from './components/sections/SocialSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { MediaSection } from './components/sections/MediaSection';
import { EventsSection } from './components/sections/EventsSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { HelpDeskSection } from './components/sections/HelpDeskSection';
import { GrievanceSection } from './components/sections/GrievanceSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { ContactSection } from './components/sections/ContactSection';
import { OrgNetworkSection } from './components/sections/OrgNetworkSection';
import { GallerySection } from './components/sections/GallerySection';
import { JoinMembershipModal, QuickIssueModal } from './components/modals/InteractiveModals';
import type { DictKey } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [issueModalOpen, setIssueModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine current page definition
  let nameKey: DictKey = 'nav_home';
  if (currentPath === '/about') nameKey = 'nav_about';
  else if (currentPath === '/organisation') nameKey = 'nav_org';
  else if (currentPath === '/leadership') nameKey = 'nav_leadership';
  else if (currentPath === '/rights') nameKey = 'nav_rights';
  else if (currentPath === '/social-work') nameKey = 'nav_social';
  else if (currentPath === '/media') nameKey = 'nav_media';
  else if (currentPath === '/events') nameKey = 'nav_events';
  else if (currentPath === '/roadmap') nameKey = 'nav_roadmap';
  else if (currentPath === '/membership') nameKey = 'nav_membership';
  else if (currentPath === '/help-desk') nameKey = 'nav_helpdesk';
  else if (currentPath === '/gallery') nameKey = 'nav_gallery';
  else if (currentPath === '/contact') nameKey = 'nav_contact';

  const renderPageContent = () => {
    switch (currentPath) {
      case '/about':
        return (
          <>
            <PageHero titleKey="nav_about" onNavigate={navigate} />
            <AboutSection />
            <RoleSection />
            <VisionSection />
            <AchievementsSection />
          </>
        );

      case '/organisation':
        return (
          <>
            <PageHero titleKey="nav_org" onNavigate={navigate} />
            <OrganisationSection />
            <OrgNetworkSection />
            <CommitteesSection />
          </>
        );

      case '/leadership':
        return (
          <>
            <PageHero titleKey="nav_leadership" onNavigate={navigate} />
            <LeadershipSection />
          </>
        );

      case '/rights':
        return (
          <>
            <PageHero titleKey="nav_rights" onNavigate={navigate} />
            <RightsSection onHelpdeskClick={() => navigate('/help-desk')} />
          </>
        );

      case '/social-work':
        return (
          <>
            <PageHero titleKey="nav_social" onNavigate={navigate} />
            <SocialSection />
            <AchievementsSection />
          </>
        );

      case '/media':
        return (
          <>
            <PageHero titleKey="nav_media" onNavigate={navigate} />
            <MediaCoverage />
            <MediaSection />
          </>
        );

      case '/events':
        return (
          <>
            <PageHero titleKey="nav_events" onNavigate={navigate} />
            <EventsSection />
            <GallerySection />
          </>
        );

      case '/roadmap':
        return (
          <>
            <PageHero titleKey="nav_roadmap" onNavigate={navigate} />
            <RoadmapSection />
          </>
        );

      case '/membership':
        return (
          <>
            <PageHero titleKey="nav_membership" onNavigate={navigate} />
            <MembershipSection onJoinClick={() => setMembershipModalOpen(true)} />
            <StatsSection />
            <GrievanceSection onSubmitIssueClick={() => setIssueModalOpen(true)} />
          </>
        );

      case '/help-desk':
        return (
          <>
            <PageHero titleKey="nav_helpdesk" onNavigate={navigate} />
            <HelpDeskSection />
            <GrievanceSection onSubmitIssueClick={() => setIssueModalOpen(true)} />
          </>
        );

      case '/gallery':
        return (
          <>
            <PageHero titleKey="nav_gallery" onNavigate={navigate} />
            <GallerySection />
          </>
        );

      case '/contact':
        return (
          <>
            <PageHero titleKey="nav_contact" onNavigate={navigate} />
            <ContactSection />
          </>
        );

      case '/':
      default:
        // Matching exact structure from PDF Pages 18 & 19
        return (
          <>
            <Hero />
            <HeroIntroSection
              onJoinClick={() => setMembershipModalOpen(true)}
              onVoiceClick={() => setIssueModalOpen(true)}
            />
            <MediaCoverage />
            <OrgNetworkSection />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <PageShell nameKey={nameKey} currentPath={currentPath} onNavigate={navigate}>
        {renderPageContent()}
      </PageShell>

      {/* Interactive Modals */}
      <JoinMembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
      />
      <QuickIssueModal
        isOpen={issueModalOpen}
        onClose={() => setIssueModalOpen(false)}
      />
    </LanguageProvider>
  );
}
