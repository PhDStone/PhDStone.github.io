import { Layers, Microscope, BarChart3, Users } from 'lucide-react'

const groups = [
  {
    icon: Layers,
    title: '材料制备与工艺优化',
    items: [
      '精通电沉积、化学镀、水热法等湿法镀层制备工艺',
      '熟悉 CVD 管式炉薄膜沉积、退火/热处理工艺优化',
      '具备从小试到规模化制备的产业化经验',
    ],
  },
  {
    icon: Microscope,
    title: '材料表征与失效分析',
    items: [
      'SEM/TEM 微观形貌与缺陷分析',
      'XRD/XPS/Raman 成分与界面表征',
      'LSV/CV/EIS/I-T 等电学性能测试',
      '失效分析（FA）：从微观层面定位性能退化根本原因',
    ],
  },
  {
    icon: BarChart3,
    title: '数据分析与 AI 工具',
    items: [
      'DOE 实验设计；Python 自动化数据处理与脚本开发',
      'Materials Studio 模型构建与 VASP 计算',
      '使用 AI Agent 工具辅助文献调研、数据分析与报告撰写',
      '具备数据驱动优化意识',
    ],
  },
  {
    icon: Users,
    title: '综合素养',
    items: [
      'CET-6：具备英文技术文献阅读与学术写作能力',
      '学生干部经历（团支书、「友善中南」课堂助理）',
      '组织策划主题团日活动，具备团队动员、活动统筹与沟通协调能力',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          专业技能
          <span className="block w-12 h-1 bg-teal-500 rounded mt-3" />
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-slate-200 p-7 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <g.icon size={20} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900">{g.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
