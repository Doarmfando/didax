import facebookIcon from "lucide-react/dist/esm/icons/facebook.js";
import instagramIcon from "lucide-react/dist/esm/icons/instagram.js";
import linkedinIcon from "lucide-react/dist/esm/icons/linkedin.js";
import youtubeIcon from "lucide-react/dist/esm/icons/youtube.js";

function TiktokIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 3v11.3a4.2 4.2 0 1 1-3.6-4.1" />
      <path d="M14 3c.7 3.5 2.7 5.4 6 5.8" />
      <path d="M18 9v3" />
    </svg>
  );
}

const icons = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
  linkedin: linkedinIcon,
  tiktok: TiktokIcon,
};

export default function SocialIcon({ id, size = 19 }) {
  const Icon = icons[id];

  if (!Icon) {
    return null;
  }

  return <Icon className="social-icon" size={size} aria-hidden="true" />;
}
