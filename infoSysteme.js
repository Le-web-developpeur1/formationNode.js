import os from 'os';

export function getStats() {
  const infoS = {
    nomDuSysteme: os.type(),
    architecture: os.arch(),
    memoireLibre: Math.round(os.freemem() / 1024 / 1024) + ' Mo',
    nombreDeCoeurs: os.cpus().length,
  }
  return infoS;
}
