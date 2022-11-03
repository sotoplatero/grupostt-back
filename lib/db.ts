import { Deta } from 'deta';

// Initialize with a Project Key
const deta = Deta(process.env.DETA_PROJECT_KEY); 

export const db = deta.Base('comments'); 

    