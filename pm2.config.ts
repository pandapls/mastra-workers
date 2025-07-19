module.exports = {
	apps: [
		{
			name: 'mastra-app',
			script: 'npm',
			args: 'start',
			cwd: '/home/ubuntu/apps/mastra-workers',
			instances: 'max',
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
				HOST: '0.0.0.0',
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 3000,
				HOST: '0.0.0.0',
			},
			log_file: '/home/ubuntu/logs/mastra-app.log',
			out_file: '/home/ubuntu/logs/mastra-out.log',
			error_file: '/home/ubuntu/logs/mastra-error.log',
			log_date_format: 'YYYY-MM-DD HH:mm:ss',
			max_memory_restart: '1G',
			restart_delay: 4000,
			max_restarts: 10,
			watch: false,
			ignore_watch: ['node_modules', 'logs'],
		},
	],
};
