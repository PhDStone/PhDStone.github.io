import { GraduationCap, Award } from 'lucide-react'

const schools = [
  {
    period: '2024.09 — 2027.06（预计）',
    school: '北京科技大学',
    college: '前沿交叉科学技术研究院',
    degree: '材料工程 · 硕士',
    badge: '985 / 211',
    details: [
      '导师：张跃 院士',
      '研究生学业奖学金（2024–2025、2025–2026 连续获得）',
    ],
  },
  {
    period: '2020.09 — 2024.06',
    school: '中南大学',
    college: '材料科学与工程学院',
    degree: '材料科学与工程 · 学士',
    badge: '985 / 211',
    details: [
      '核心课程：材料科学基础、材料结构分析、材料物理性能、材料的力学行为',
      '中南大学学年奖学金（2021–2022）',
      '校级优秀团支书、优秀团日活动',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          教育背景
          <span className="block w-12 h-1 bg-teal-500 rounded mt-3" />
        </h2>

        <div className="mt-10 relative border-l-2 border-teal-200 pl-8 space-y-10">
          {schools.map((s) => (
            <div key={s.school} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-teal-500 border-4 border-white shadow" />
              <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-center gap-3">
                  <GraduationCap className="text-teal-600" size={22} />
                  <h3 className="text-xl font-bold text-slate-900">{s.school}</h3>
                  <span className="text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-3 py-1">
                    {s.badge}
                  </span>
                  <span className="ml-auto text-sm text-slate-400">{s.period}</span>
                </div>
                <p className="mt-2 text-slate-700 font-medium">
                  {s.college} · {s.degree}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <Award size={14} className="mt-0.5 shrink-0 text-teal-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
