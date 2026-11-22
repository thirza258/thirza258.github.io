import metrics from '../data/nevatal-metrics.json';

export const NEVATAL_URL = 'https://nevatal.id';

export type NevatalCampaign =
  | 'featured_section'
  | 'nav'
  | 'hero_split'
  | 'project_card'
  | 'footer';

export const NEVATAL_METRICS = metrics;

const addUtm = (url: string, campaign: NevatalCampaign, content?: string) => {
  const target = new URL(url);
  target.searchParams.set('utm_source', 'portfolio');
  target.searchParams.set('utm_medium', 'referral');
  target.searchParams.set('utm_campaign', campaign);
  if (content) target.searchParams.set('utm_content', content);
  return target.toString();
};

/** A nevatal.id link tagged with the fixed portfolio → studio UTM taxonomy. */
export const nevatalUrl = (campaign: NevatalCampaign, content?: string) =>
  addUtm(`${NEVATAL_URL}/`, campaign, content);

/** A link to one of the studio's product subdomains, carrying the same tags. */
export const nevatalLink = (
  url: string,
  campaign: NevatalCampaign,
  content?: string
) => addUtm(url, campaign, content);

/** GitHub and other non-studio links still carry the campaign for attribution. */
export const campaignUrl = (
  url: string,
  campaign: NevatalCampaign,
  content?: string
) => addUtm(url, campaign, content);

export const NEVATAL_DEPTH_LINKS = [
  {
    name: 'Nevatal Cloud',
    href: nevatalLink('https://cloud.nevatal.id/', 'featured_section', 'nevatal_cloud'),
    descriptor:
      'Bare-metal Proxmox VE 8 on Dell PowerEdge nodes — KVM Linux VPS, game servers and Android containers.',
  },
  {
    name: 'Uptime Medics',
    href: nevatalLink('https://uptime.nevatal.id/', 'featured_section', 'uptime_medics'),
    descriptor:
      'A Rust and Axum uptime monitor with second-level probes, public status pages and SMTP alerts.',
  },
  {
    name: 'Quanta',
    href: nevatalLink('https://quant.nevatal.id/', 'featured_section', 'quanta'),
    descriptor:
      'A Django investment learning workspace with a trading simulator, strategy lab and fifteen courses.',
  },
] as const;
