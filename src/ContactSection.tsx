import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight, Code2, Sparkles, Globe, CheckCircle2, AlertCircle, Linkedin, Github, Instagram as InstagramIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from './data/portfolioData';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a10 10 0 1 0 10 10c0-5.523-4.477-10-10-10zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
    <path d="M15.5 10.5a3.5 3.5 0 0 0-3-3 3.5 3.5 0 0 0-3.5 3.5c0 1.25.68 2.34 1.7 2.95"></path>
  </svg>
);

const EMAILJS_SERVICE_ID = 'service_3tvtyyk';
const EMAILJS_TEMPLATE_ID = 'template_7ipf2pq';
const EMAILJS_PUBLIC_KEY = 'dZCJv9P0Uz-bEr7ql';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.assunto,
      message: formData.mensagem,
      to_name: 'Luana Souza'
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
        },
        (error) => {
          console.error('Erro ao enviar mensagem:', error);
          setLoading(false);
          setStatus('error');
        }
      );
  };

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: 'E-mail',
      value: 'luanacs.work@gmail.com',
      href: 'mailto:luanacs.work@gmail.com'
    },
    {
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/luana-souza',
      href: 'https://linkedin.com'
    },
    {
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      label: 'GitHub',
      value: 'github.com/LuanaSza',
      href: 'https://github.com/LuanaSza'
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      label: 'Localização',
      value: personalInfo.location
    }
  ];

  return (
    <section id="contato" className="min-h-screen bg-[#0b0813] text-gray-200 px-6 py-12 md:px-16 lg:px-24 font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-purple-900/30 pb-6 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mt-1">
              Vamos Conversar?
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-400 text-sm">
                <ArrowRight className="w-4 h-4" />
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-300/70 bg-purple-950/30 px-3 py-1.5 rounded-full border border-purple-800/30 self-start md:self-auto">
            <span>Sempre aberta a novas conexões</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
        </div>

        {/* Conteúdo Principal (2 Colunas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Esquerda: Texto + Cards de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Se você tem um projeto em mente, uma oportunidade, uma ideia ou apenas quer trocar uma ideia sobre tecnologia, me chama! Será um prazer conversar. 💜
            </p>

            <div className="space-y-3">
              {contactCards.map((card, idx) => {
                const isLink = Boolean(card.href);

                return (
                  <a
                    key={idx}
                    href={card.href || '#'}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noopener noreferrer" : undefined}
                    onClick={(e) => !isLink && e.preventDefault()}
                    className={`flex items-center justify-between p-4 rounded-xl bg-[#130f23]/60 border border-purple-900/30 transition-all duration-300 group ${
                      isLink
                        ? 'hover:border-purple-600/50 hover:bg-[#18132d] cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-purple-950/50 border border-purple-800/40 group-hover:border-purple-500/50 transition-colors">
                        {card.icon}
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400 font-medium">{card.label}</span>
                        <span className="text-sm font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </div>

                    {isLink && (
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="lg:col-span-7 bg-[#130f23]/40 border border-purple-900/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl shadow-purple-950/20">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-400 mt-1">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Envie uma mensagem</h3>
                <p className="text-xs text-gray-400">Preencha o formulário abaixo e eu te respondo o mais breve possível.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-300 mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-[#0d0a18] border border-purple-900/40 rounded-lg px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-purple-300 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-[#0d0a18] border border-purple-900/40 rounded-lg px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-purple-300 mb-1.5">Assunto</label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full bg-[#0d0a18] border border-purple-900/40 rounded-lg px-3.5 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer"
                  required
                >
                  <option value="" disabled hidden>Qual é o motivo do contato?</option>
                  <option value="Projeto Freelance" className="bg-[#0d0a18]">Projeto Freelance</option>
                  <option value="Oportunidade de Trabalho" className="bg-[#0d0a18]">Oportunidade de Trabalho</option>
                  <option value="Dúvida ou Networking" className="bg-[#0d0a18]">Dúvida ou Networking</option>
                  <option value="Outro" className="bg-[#0d0a18]">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-purple-300 mb-1.5">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem..."
                  className="w-full bg-[#0d0a18] border border-purple-900/40 rounded-lg px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  required
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Ocorreu um erro ao enviar. Tente novamente ou mande e-mail direto.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-950/50 hover:shadow-purple-800/30 transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Enviando...' : 'Enviar mensagem'}</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé Atualizado (Estilo Minimalista L/S + Ícones GitHub, LinkedIn, WhatsApp, Instagram e Threads com Glow Roxo) */}
        <div className="pt-8 border-t border-purple-900/30 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* Linha decorativa superior */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          {/* Lado Esquerdo: Ícone com o seu Logotipo L/S minimalista */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
          </div>

          {/* Centro: Copyright com linhas laterais */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-purple-900/50 flex-1 md:w-20"></div>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              © 2026. Todos os direitos reservados.
            </p>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-purple-900/50 flex-1 md:w-20"></div>
          </div>

          {/* Lado Direito: Ícones das Redes Sociais com efeito Glow Roxo */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/LuanaSza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/558695493913"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <WhatsappIcon />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_.luanasza?obrf=MTF0MHdxdzY5b2RuOQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <InstagramIcon size={18} />
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@lua.ssz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="p-2.5 rounded-xl border border-purple-900/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <ThreadsIcon />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};