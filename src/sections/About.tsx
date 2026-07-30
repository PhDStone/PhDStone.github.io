const stats = [
  { value: '67%', label: '最优样品性能提升', sub: '钌基催化电极 vs 基底' },
  { value: '4.1 mV/h', label: 'ADT 衰减率', sub: '3000 圈可靠性测试' },
  { value: '1.92 V', label: '电解槽压', sub: 'NiFeMo 阴极 @ 1 A/cm²' },
  { value: '5×', label: '数据分析效率提升', sub: 'Python EIS-DRT 自动化脚本' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          关于我
          <span className="block w-12 h-1 bg-teal-500 rounded mt-3" />
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <p className="text-slate-600 leading-relaxed">
            我是一名专注于电催化与功能镀层材料研究的材料工程硕士，本科毕业于中南大学材料科学与工程学院，
            目前就读于北京科技大学前沿交叉科学技术研究院，师从张跃院士。
          </p>
          <p className="text-slate-600 leading-relaxed">
            研究覆盖「合成路线设计 — 工艺放大 — 表征测试 — 失效分析 — 理论计算」全链条：
            既能用电镀、化学镀等湿法工艺构建微纳结构催化剂，也能用 Python 脚本和 DFT 计算做数据驱动的机理探究，
            并深度参与了从研发到量产的技术转移与产业化落地。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 transition-all"
            >
              <div className="text-3xl font-bold text-teal-600">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-800">{s.label}</div>
              <div className="mt-1 text-xs text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
