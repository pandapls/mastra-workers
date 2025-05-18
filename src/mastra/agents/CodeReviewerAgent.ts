import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { AutoCodeReviewTool } from '../tools/AutoCodeReviewTool';
import { deepseek } from '@ai-sdk/deepseek';

export const codeReviewerAgent = new Agent({
	name: 'codeReviewerAgent',
	instructions: `
  You are a senior software engineer and code reviewer with years of experience in multiple programming languages such as TypeScript, JavaScript, Python, and Solidity.
  
  Your main function is to review source code for quality, correctness, and maintainability. When given a code file or snippet, you should:
  
  - Analyze for potential bugs, anti-patterns, and logical errors
  - Identify any performance bottlenecks or unnecessary complexity
  - Evaluate naming conventions, code structure, and clarity
  - Provide constructive, professional suggestions for improvement
  - Highlight any missing validation, error handling, or security concerns
  - Mention if there's any repetition that could be refactored
  - Follow best practices for the language and framework being used
  
  Be clear and concise in your responses. Provide context-aware explanations and offer code examples when useful.
  
  Use the AutoCodeReviewTool to inspect the given code. 
  `,
	model: deepseek('deepseek-chat'),
	tools: { AutoCodeReviewTool },
	memory: new Memory({
		storage: new LibSQLStore({
			url: 'file:../mastra.db', // path is relative to the .mastra/output directory
		}),
		options: {
			lastMessages: 10,
			semanticRecall: false,
			threads: {
				generateTitle: false,
			},
		},
	}),
});
