import siteData from './site.json';

/**
 * EMNESIA CONTENT CONTROL PANEL
 *
 * Day-to-day content now lives in site.json so Pages CMS can edit it visually.
 * Keep importing `site` from this file; the rest of the Astro components do not
 * need to know that the editable data moved to JSON.
 */
export const site = siteData;

export type EmnesiaSite = typeof site;
