// Auto-generated from ~/.openclaw/claude-skills-backup/
// Total: 113 skills from Kirill's repository

const REPO_URL = 'https://github.com/kirniy/claude-skills-backup';

const allSkillsFromRepo = [
    // AI & ML
    { name: 'dspy-ruby', icon: '🔮', category: 'AI & ML', desc: 'DSPy framework for Ruby' },
    { name: 'gemini', icon: '♊', category: 'AI & ML', desc: 'Google Gemini API' },
    { name: 'gemini-deep-research', icon: '🔬', category: 'AI & ML', desc: 'Deep research with Gemini' },
    { name: 'gemini-imagegen', icon: '🖼️', category: 'AI & ML', desc: 'Image generation' },
    { name: 'kimi', icon: '🌙', category: 'AI & ML', desc: 'Kimi models' },
    { name: 'model-router', icon: '🚦', category: 'AI & ML', desc: 'Switch between models' },
    { name: 'orchestrating-swarms', icon: '🐝', category: 'AI & ML', desc: 'Swarm agents' },
    { name: 'sag', icon: '🧠', category: 'AI & ML', desc: 'ElevenLabs TTS' },
    { name: 'self-improving-agent', icon: '🔄', category: 'AI & ML', desc: 'Self-learning agent' },
    
    // Video & Media
    { name: 'club-promo-remotion', icon: '🎬', category: 'Видео', desc: 'Club promo videos' },
    { name: 'openai-whisper', icon: '🎤', category: 'Видео', desc: 'Speech recognition' },
    { name: 'parakeet-stt', icon: '🦜', category: 'Видео', desc: 'Speech-to-text' },
    { name: 'qwen3-tts', icon: '🔊', category: 'Видео', desc: 'Text-to-speech' },
    { name: 'remotion', icon: '🎥', category: 'Видео', desc: 'React video' },
    { name: 'remotion-server', icon: '🖥️', category: 'Видео', desc: 'Video server' },
    { name: 'seedream', icon: '🌱', category: 'Видео', desc: 'Image generation' },
    { name: 'veo', icon: '🎥', category: 'Видео', desc: 'Google Veo video' },
    { name: 'veo3-meta-framework', icon: '🎬', category: 'Видео', desc: 'Veo framework' },
    { name: 'video-transcript-downloader', icon: '📥', category: 'Видео', desc: 'Download transcripts' },
    { name: 'vnvnc-video-frames', icon: '🎞️', category: 'Видео', desc: 'Video frames (VNVNC!)' },
    { name: 'youtube-watcher', icon: '📺', category: 'Видео', desc: 'Monitor YouTube' },
    
    // Design
    { name: 'beautiful-mermaid', icon: '🧜', category: 'Дизайн', desc: 'Mermaid diagrams' },
    { name: 'bg-removal', icon: '✂️', category: 'Дизайн', desc: 'Remove background' },
    { name: 'brand-guidelines', icon: '🏷️', category: 'Дизайн', desc: 'Brand guide' },
    { name: 'canvas-design', icon: '🎨', category: 'Дизайн', desc: 'Canvas API design' },
    { name: 'club-poster-design', icon: '🖼️', category: 'Дизайн', desc: 'Club posters' },
    { name: 'd3-viz', icon: '📈', category: 'Дизайн', desc: 'D3 visualizations' },
    { name: 'every-style-editor', icon: '🎨', category: 'Дизайн', desc: 'Style editor' },
    { name: 'figma-use', icon: '🖌️', category: 'Дизайн', desc: 'Figma integration' },
    { name: 'frontend-design', icon: '💅', category: 'Дизайн', desc: 'Frontend design' },
    { name: 'frontend-slides', icon: '📊', category: 'Дизайн', desc: 'Presentations' },
    { name: 'kpi-dashboard-design', icon: '📊', category: 'Дизайн', desc: 'KPI dashboards' },
    { name: 'marketplace-cards-skill', icon: '🛒', category: 'Дизайн', desc: 'Product cards' },
    { name: 'menu-designer', icon: '📋', category: 'Дизайн', desc: 'Menu design' },
    { name: 'meshy-ai', icon: '🎲', category: 'Дизайн', desc: '3D generation' },
    { name: 'motion-design', icon: '✨', category: 'Дизайн', desc: 'Motion graphics' },
    { name: 'superdesign', icon: '💎', category: 'Дизайн', desc: 'Super design' },
    { name: 'theme-factory', icon: '🎨', category: 'Дизайн', desc: 'Theme factory' },
    { name: 'ui-ux-pro-max', icon: '🎯', category: 'Дизайн', desc: 'UI/UX expert' },
    { name: 'web-animation-design', icon: '🎭', category: 'Дизайн', desc: 'Web animations' },
    
    // Development
    { name: 'agent-browser', icon: '🌐', category: 'Разработка', desc: 'Browser agent' },
    { name: 'agent-native-architecture', icon: '🏗️', category: 'Разработка', desc: 'Agent architecture' },
    { name: 'api-dev', icon: '🔌', category: 'Разработка', desc: 'API development' },
    { name: 'coding-agent', icon: '💻', category: 'Разработка', desc: 'Coding assistant' },
    { name: 'create-agent-skills', icon: '🛠️', category: 'Разработка', desc: 'Create agents' },
    { name: 'create-cli', icon: '⌨️', category: 'Разработка', desc: 'CLI tools' },
    { name: 'git-worktree', icon: '🌳', category: 'Разработка', desc: 'Git worktree' },
    { name: 'mcp-builder', icon: '🔧', category: 'Разработка', desc: 'MCP builder' },
    { name: 'molefrog-skills', icon: '🐸', category: 'Разработка', desc: 'Development tools' },
    { name: 'react-best-practices', icon: '⚛️', category: 'Разработка', desc: 'React patterns' },
    { name: 'read-github', icon: '📖', category: 'Разработка', desc: 'Read GitHub' },
    { name: 'refactor-pass', icon: '♻️', category: 'Разработка', desc: 'Refactoring' },
    { name: 'web-artifacts-builder', icon: '🏗️', category: 'Разработка', desc: 'Build artifacts' },
    { name: 'webapp-testing', icon: '🧪', category: 'Разработка', desc: 'Webapp testing' },
    
    // Code Review
    { name: 'code-simplicity-reviewer', icon: '✨', category: 'Code Review', desc: 'Simplicity review' },
    { name: 'dhh-rails-style', icon: '🚂', category: 'Code Review', desc: 'DHH style' },
    
    // Analytics
    { name: 'adapty-report-creation', icon: '📊', category: 'Аналитика', desc: 'Adapty reports' },
    { name: 'daily-recap', icon: '📅', category: 'Аналитика', desc: 'Daily recap' },
    { name: 'daily-review-ritual', icon: '🔄', category: 'Аналитика', desc: 'Review ritual' },
    { name: 'data-exploration-visualization', icon: '📊', category: 'Аналитика', desc: 'Data viz' },
    { name: 'last30days', icon: '📅', category: 'Аналитика', desc: 'Last 30 days' },
    { name: 'timesheet', icon: '⏱️', category: 'Аналитика', desc: 'Time tracking' },
    
    // Productivity
    { name: 'brainstorming', icon: '💡', category: 'Продуктивность', desc: 'Brainstorming' },
    { name: 'clawtasks', icon: '✅', category: 'Продуктивность', desc: 'Task management' },
    { name: 'file-todos', icon: '📝', category: 'Продуктивность', desc: 'File todos' },
    { name: 'meeting-transcriber', icon: '🎙️', category: 'Продуктивность', desc: 'Meeting notes' },
    { name: 'obsidian', icon: '🗂️', category: 'Продуктивность', desc: 'Obsidian vault' },
    { name: 'remind-me', icon: '⏰', category: 'Продуктивность', desc: 'Reminders' },
    { name: 'second-brain', icon: '🧠', category: 'Продуктивность', desc: 'Knowledge base' },
    { name: 'summarize', icon: '📝', category: 'Продуктивность', desc: 'Summarize' },
    
    // Documents
    { name: 'doc-coauthoring', icon: '✍️', category: 'Документы', desc: 'Co-authoring' },
    { name: 'docx', icon: '📄', category: 'Документы', desc: 'Word docs' },
    { name: 'keep-md', icon: '📝', category: 'Документы', desc: 'Markdown notes' },
    { name: 'pdf', icon: '📑', category: 'Документы', desc: 'PDF operations' },
    { name: 'pptx', icon: '📊', category: 'Документы', desc: 'PowerPoint' },
    { name: 'xlsx', icon: '📊', category: 'Документы', desc: 'Excel' },
    
    // Integrations
    { name: 'bird', icon: '🐦', category: 'Интеграции', desc: 'Twitter/X bot' },
    { name: 'homeassistant', icon: '🏠', category: 'Интеграции', desc: 'Smart home' },
    { name: 'internal-comms', icon: '💬', category: 'Интеграции', desc: 'Internal comms' },
    { name: 'rclone', icon: '☁️', category: 'Интеграции', desc: 'Cloud sync' },
    { name: 'reddit', icon: '🔴', category: 'Интеграции', desc: 'Reddit' },
    { name: 'slack', icon: '💬', category: 'Интеграции', desc: 'Slack' },
    { name: 'slack-gif-creator', icon: '🎭', category: 'Интеграции', desc: 'Slack GIFs' },
    { name: 'tailscale', icon: '🔗', category: 'Интеграции', desc: 'VPN' },
    { name: 'telegram-buttons-style', icon: '🔘', category: 'Интеграции', desc: 'TG buttons' },
    { name: 'ticketscloud', icon: '🎫', category: 'Интеграции', desc: 'Tickets' },
    { name: 'x-research', icon: '🐦', category: 'Интеграции', desc: 'X research' },
    
    // Search
    { name: 'brave-search', icon: '🔍', category: 'Поиск', desc: 'Brave search' },
    { name: 'exa', icon: '🔎', category: 'Поиск', desc: 'Exa search' },
    { name: 'research', icon: '📚', category: 'Поиск', desc: 'Research' },
    
    // Security
    { name: 'skill-audit', icon: '🔍', category: 'Безопасность', desc: 'Audit skills' },
    
    // Utilities
    { name: 'algorithmic-art', icon: '🎨', category: 'Утилиты', desc: 'Generative art' },
    { name: 'audio-antifingerprint', icon: '🔊', category: 'Утилиты', desc: 'Audio antifingerprint' },
    { name: 'auto-updater', icon: '🔄', category: 'Утилиты', desc: 'Auto update' },
    { name: 'clawdbot-logs', icon: '📋', category: 'Утилиты', desc: 'Logs' },
    { name: 'clawdbot-update-plus', icon: '⬆️', category: 'Утилиты', desc: 'Updates' },
    { name: 'compound-docs', icon: '📄', category: 'Утилиты', desc: 'Documentation' },
    { name: 'humanizer', icon: '👤', category: 'Утилиты', desc: 'Humanize text' },
    { name: 'large-files-telegram', icon: '📎', category: 'Утилиты', desc: 'Large files' },
    { name: 'lera-entertainer', icon: '🎭', category: 'Утилиты', desc: 'Entertainment' },
    { name: 'nano-banana-pro', icon: '🍌', category: 'Утилиты', desc: 'Images' },
    { name: 'proza-ru', icon: '✒️', category: 'Утилиты', desc: 'Writing' },
    { name: 'qbittorrent', icon: '🌊', category: 'Утилиты', desc: 'Torrents' },
    { name: 'qmd-external', icon: '📦', category: 'Утилиты', desc: 'External' },
    { name: 'seo-review', icon: '📈', category: 'Утилиты', desc: 'SEO' },
    { name: 'simple-backup', icon: '💾', category: 'Утилиты', desc: 'Backup' },
    { name: 'skill-creator', icon: '🔧', category: 'Утилиты', desc: 'Create skills' },
    { name: 'skills', icon: '📦', category: 'Утилиты', desc: 'Skills' },
    { name: 'tmux', icon: '🖥️', category: 'Утилиты', desc: 'Tmux' },
    { name: 'travel-concierge', icon: '✈️', category: 'Утилиты', desc: 'Travel' },
    { name: 'weather', icon: '🌤️', category: 'Утилиты', desc: 'Weather' }
];

// Get installed skills
const installedSkillNames = [
    'brave-search', 'coding-agent', 'frontend-design', 'skill-creator',
    'second-brain', 'meeting-transcriber', 'remind-me', 'summarize', 
    'brainstorming', 'youtube-watcher', 'skill-audit', 'healthcheck', 'weather'
];

// Group by category
const skillsByCategory = {};
allSkillsFromRepo.forEach(skill => {
    if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
    }
    const isInstalled = installedSkillNames.includes(skill.name);
    skillsByCategory[skill.category].push({ ...skill, installed: isInstalled });
});

// Count
const totalSkills = allSkillsFromRepo.length;
const installedCount = installedSkillNames.length;
