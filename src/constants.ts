export const DATA_LABS_BASE = import.meta.env.PROD
  ? `${import.meta.env.BASE_URL}/..`
  : 'https://datalabs.cfa.harvard.edu';
export const DIY_URL = `${DATA_LABS_BASE}/diy/`;
export const SPECLAB_URL = `${DATA_LABS_BASE}/spectrumlab/`;
