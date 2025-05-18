import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';
import { weatherAgent } from './agents';
import { codeReviewerAgent } from './agents/CodeReviewerAgent';
import { CloudflareDeployer } from '@mastra/deployer-cloudflare';

export const mastra = new Mastra({
	deployer: new CloudflareDeployer({
		scope: process.env.CLOUDFLARE_SCOPE || 'your-cloudflare-scope',
		projectName: 'mastra-workers',
		routes: [
			{
				pattern: 'pandatest.sitem/mastra/*',
				zone_name: 'pandatest.site',
				custom_domain: true,
			},
		],
		workerNamespace: 'production',
		auth: {
			apiToken: process.env.CLOUDFLARE_API_TOKEN || '',
			apiEmail: 'lhf932650719@gmail.com',
		},
	}),
	agents: { weatherAgent, codeReviewerAgent },
	storage: new LibSQLStore({
		url: ':memory:',
	}),
	logger: createLogger({
		name: 'Mastra',
		level: 'info',
	}),
});
