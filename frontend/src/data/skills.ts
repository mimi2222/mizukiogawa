import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: '言語',
    items: ['Python（約2年半）', 'TypeScript（約1年半）', 'JavaScript', 'C#', 'C++'],
  },
  {
    category: 'フレームワーク・ライブラリ',
    items: ['React', 'Next.js', 'FastAPI', 'PyTorch', 'MediaPipe', 'p5.js'],
  },
  {
    category: 'インフラ・ツール',
    items: [
      'Azure（OpenAI Service / Key Vault / Container Apps / Static Web Apps）',
      'Google Cloud',
      'Docker',
      'GitHub Actions',
      'Figma',
      'PostgreSQL',
      'MySQL',
      'Vercel',
    ],
  },
  {
    category: '語学',
    items: ['日本語（母語）', '英語（TOEFL iBT 97）'],
  },
]
