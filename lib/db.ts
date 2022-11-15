import { Deta } from 'deta';

// Initialize with a Project Key
const deta = Deta('e00bffh9_cqwGSHHqn4K8FPsFgeZBNC7a3JWGrUzr'); 
// const deta = Deta(process.env.DETA_PROJECT_KEY); 

export const db = deta.Base('comments'); 

    