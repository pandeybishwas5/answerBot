import {neon, neonConfig} from '@neondatabase/serverless';
neonConfig.fetchConnectionCache = true


if (!process.env.DATABASE_URL) {

} 