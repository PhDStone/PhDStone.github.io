import { FileText } from 'lucide-react'

const papers = [
  {
    authors: 'Xinlei Yang, Zhuo Kang, Yue Zhang',
    title:
      'Operando Decoding of the Third-Element Effect in RuNi-Based Ternary Alloy Electrocatalysts for Alkaline Hydrogen Evolution',
    status: 'To be submitted',
    highlight: '第一作者',
    statusClass: 'bg-slate-100 text-slate-600 border-slate-300',
  },
  {
    authors: 'Xin Wang, Xinlei Yang, Yue Zhang',
    title:
      'Cation vacancy-trapped platinum dual atoms on NiFe layered double hydroxides for efficient alkaline water splitting',
    status: 'Nature Communications · Submitted（IF = 15.7，Q1）',
    highlight: '共同作者',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-300',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          论文成果
          <span className="block w-12 h-1 bg-teal-500 rounded mt-3" />
        </h2>

        <div className="mt-10 space-y-5">
          {papers.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 md:p-7 flex gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-xl bg-teal-50 border border-teal-100 items-center justify-center">
                <FileText size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{p.authors}</p>
                <h3 className="mt-1 font-semibold text-slate-900 leading-snug italic">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-3 py-1 font-medium">
                    {p.highlight}
                  </span>
                  <span className={`rounded-full px-3 py-1 border font-medium ${p.statusClass}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
