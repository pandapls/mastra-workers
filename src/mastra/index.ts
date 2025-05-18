import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';
import { weatherAgent } from './agents';
import { codeReviewerAgent } from './agents/CodeReviewerAgent';
import { CloudflareDeployer } from '@mastra/deployer-cloudflare';

export const mastra = new Mastra({
	deployer: new CloudflareDeployer({
		scope: 'your-account-id',
		projectName: 'your-project-name',
		routes: [
			{
				pattern: 'example.com/*',
				zone_name: 'example.com',
				custom_domain: true,
			},
		],
		workerNamespace: 'your-namespace',
		auth: {
			apiToken: 'your-api-token',
			apiEmail: 'your-email',
		},
	}),
	agents: { weatherAgent, codeReviewerAgent },
	storage: new LibSQLStore({
		// stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
		url: ':memory:',
	}),
	logger: createLogger({
		name: 'Mastra',
		level: 'info',
	}),
});
