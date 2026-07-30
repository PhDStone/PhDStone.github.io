import { Mail, Phone, Download } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">期待与您进一步交流</h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          2027 届硕士毕业生，求职方向：功能镀层/涂层材料研发、可靠性评估与失效分析。
          欢迎通过以下方式联系我。
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:xinlei2001@foxmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 font-medium text-white hover:bg-teal-400 transition-colors"
          >
            <Mail size={18} />
            xinlei2001@foxmail.com
          </a>
          <a
            href="tel:13837977910"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-medium hover:border-teal-400 hover:text-teal-300 transition-colors"
          >
            <Phone size={18} />
            138-3797-7910
          </a>
          <a
            href="./杨欣磊-简历.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-medium hover:border-teal-400 hover:text-teal-300 transition-colors"
          >
            <Download size={18} />
            下载简历 PDF
          </a>
        </div>
      </div>
    </section>
  )
}
