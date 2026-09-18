import { Project } from '../interface/interface';

export const getProjectSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

export const getProjectLiveUrl = (project?: Project | null): string | undefined => {
  if (!project) return undefined;
  const candidate =
    project.liveUrl ||
    project.links?.demo ||
    project.links?.live ||
    project.links?.liveUrl ||
    project.links?.website;

  if (candidate && /^(https?:\/\/|\/)/i.test(candidate.trim())) {
    return candidate.trim();
  }
  return undefined;
};
