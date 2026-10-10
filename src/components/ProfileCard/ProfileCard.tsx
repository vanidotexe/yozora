import bannerImage from '../../assets/banner.jpg';
import gc1Icon from '../../assets/gc1.png';
import githubIcon from '../../assets/github-brands-solid-full.svg?url&no-inline';
import steamIcon from '../../assets/steam-brands-solid-full.svg?url&no-inline';
import spotifyIcon from '../../assets/spotify-brands-solid-full.svg?url&no-inline';
import discordIcon from '../../assets/discord-brands-solid-full.svg?url&no-inline';
import './ProfileCard.css';

interface SocialLink {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', label: 'GitHub', icon: githubIcon, href: 'https://github.com/vanidotexe' },
  { id: 'steam', label: 'Steam', icon: steamIcon, href: 'https://steamcommunity.com/id/vanidotexe/' },
  {
    id: 'spotify',
    label: 'Spotify',
    icon: spotifyIcon,
    href: 'https://open.spotify.com/user/xlldqes5diy3guxo9tk0vo8wl'
  },
  { id: 'discord', label: 'Discord', icon: discordIcon, href: 'https://discord.com/users/291639762593513483' }
];

function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <a className="social-icon" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
      <span
        className="social-icon-glyph"
        style={{ WebkitMaskImage: `url(${link.icon})`, maskImage: `url(${link.icon})` }}
        aria-hidden="true"
      />
    </a>
  );
}

export default function ProfileCard() {
  return (
    <>
      <section className="profile-card glass" aria-label="Profile">
        <img className="profile-card-banner" src={bannerImage} alt="" />
        <div className="profile-card-body">
          <h2 className="profile-card-name">vani</h2>
          <p className="profile-card-tagline">hello world</p>
          <div className="profile-card-links">
            {SOCIAL_LINKS.map(link => (
              <SocialIcon key={link.id} link={link} />
            ))}
          </div>
        </div>
      </section>
      <div className="achievements-row glass" aria-label="Achievements">
        <span className="achievement achievement-gc1" tabIndex={0} aria-label="Grand Champion I — top 1.2%">
          <img className="achievement-icon" src={gc1Icon} alt="Grand Champion I" />
          <span className="achievement-tooltip glass" role="tooltip" aria-hidden="true">
            Top 1.2%
          </span>
        </span>
        <span className="achievement-dot" aria-hidden="true">
          ·
        </span>
        <span className="achievement">150wpm</span>
        <span className="achievement-dot" aria-hidden="true">
          ·
        </span>
        <span className="achievement">Viscose S2 Orca</span>
      </div>
    </>
  );
}
