import { Mail, Phone, Download, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest text-teal-600 uppercase mb-4">
            Functional Coatings · Electrocatalysis · Hydrogen Energy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            杨欣磊
            <span className="block text-2xl md:text-3xl mt-3 text-slate-500 font-medium">
              材料研发工程师（在读硕士）
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            北京科技大学材料工程硕士，师从张跃院士。专注于
            <span className="text-teal-700 font-medium">功能镀层/涂层材料的设计制备、可靠性评估与失效分析</span>，
            具备从实验室小试到 1.8m × 1.8m 大面积量产放大的完整产业化经验。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
            >
              查看科研项目
            </a>
            <a
              href="./杨欣磊-简历.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              <Download size={16} />
              下载简历 PDF
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} className="text-teal-600" /> 138-3797-7910
            </span>
            <a href="mailto:xinlei2001@foxmail.com" className="inline-flex items-center gap-1.5 hover:text-teal-600">
              <Mail size={14} className="text-teal-600" /> xinlei2001@foxmail.com
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-teal-600" /> 北京 · 北京科技大学
            </span>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-400/30 to-cyan-400/20 blur-xl" />
            <img
              src="./photo.png"
              alt="杨欣磊"
              className="relative w-52 h-68 md:w-64 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
