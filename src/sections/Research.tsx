import { FlaskConical, Factory } from 'lucide-react'

const projects = [
  {
    icon: FlaskConical,
    role: '硕士课题 · 独立负责人',
    period: '2024.09 — 至今',
    title: '钌基催化电极结构维度设计与界面工程',
    tags: ['电催化', 'HER', 'EIS-DRT 自动化', 'DFT 计算', '原位表征'],
    points: [
      {
        k: '合成路线设计与优化',
        v: '针对电化学器件在复杂工况下活性与稳定性失衡的痛点，通过电镀、化学镀等湿法工艺构建多级微纳结构异质结催化剂，实现界面电子结构、传质效率与电化学性能的协同调控。',
      },
      {
        k: '测试与自动化数据分析',
        v: '独立完成全套电化学测试（LSV、CV、EIS、ADT 等），开发基于 Python / pyDRTtools 的 EIS-DRT 自动化分析脚本，实现批量阻抗数据解析与 Rct 提取，效率提升约 5 倍。',
      },
      {
        k: '失效分析与机理探究',
        v: '结合原位 Raman / XAFS 揭示界面反应机制，进行表面模型构建与 DFT 计算；最优样品性能较基底提升 67%，经 3000 圈 ADT 可靠性测试，衰减率仅为 4.1 mV/h。',
      },
    ],
    metrics: ['性能提升 67%', '衰减率 4.1 mV/h', '分析效率 ×5'],
  },
  {
    icon: Factory,
    role: '教育部项目 · 核心成员',
    period: '2024.11 — 2029.11',
    title: '活性基元序构设计与高性能解水制氢低维催化材料创制',
    tags: ['水电解制氢', '工艺放大', '产业化落地', '可靠性评估'],
    points: [
      {
        k: '系统设计与工艺开发',
        v: '核心参与湿化学工艺流程设计（化学镀、电镀），系统优化关键工艺参数（温度、浓度、pH），完成从实验室到 1.8m × 1.8m 大面积的工艺放大验证，建立「制备参数—微观结构—器件性能」定量关联模型。',
      },
      {
        k: '微观表征与失效分析',
        v: '综合运用 SEM/TEM、XRD、XPS、Raman 等表征手段，系统研究催化层表界面性质、电荷转移动力学及传质过程；主导可靠性评估与加速退化测试（ADT）。',
      },
      {
        k: '产业化落地与跨域协同',
        v: '参与孵化广州青绿氢能公司，开发的 NiFeMo 阴极催化组件在 1 A/cm² 工况下槽压仅 1.92 V，推动工艺从研发到量产的技术转移；对接正泰集团和宝武清洁能源意向订单，支撑与壳牌的联合研发合作。',
      },
    ],
    metrics: ['1.8m × 1.8m 放大', '1.92 V @ 1 A/cm²', '量产技术转移'],
  },
]

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          科研项目
          <span className="block w-12 h-1 bg-teal-500 rounded mt-3" />
        </h2>

        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 md:px-10 py-6 text-white">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <p.icon size={20} className="text-teal-400" />
                  <span className="font-medium text-teal-300">{p.role}</span>
                  <span className="text-slate-400">{p.period}</span>
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-bold leading-snug">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/10 border border-white/15 rounded-full px-3 py-1 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 md:px-10 py-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {p.points.map((pt) => (
                    <div key={pt.k}>
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        {pt.k}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pt.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-sm font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-4 py-1.5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
