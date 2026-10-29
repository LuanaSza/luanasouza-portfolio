import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight, Code2, Sparkles, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from './data/portfolioData';


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

    // Mapeamento dos parâmetros para o Template do EmailJS
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

  const tags = ['#desenvolvimento', '#tecnologia', '#projetos', '#oportunidades'];

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

                    {/* Exibe a setinha somente se o card possuir um link de destino */}
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

              {/* Feedback visual de sucesso */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                </div>
              )}

              {/* Feedback visual de erro */}
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

        {/* Rodapé Interno da Seção */}
 <div className="pt-8 border-t border-purple-800/30 flex flex-col md:flex-row items-center justify-between gap-6 relative">
  {/* Linha decorativa com gradiente sutil no topo */}
  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

  {/* Lado Esquerdo: Ícone + Mensagem */}
  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
    <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0">
      <Code2 className="w-6 h-6" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold mb-0.5">
        NOS VEMOS EM BREVE
      </span>
      <h4 className="text-lg font-bold text-white tracking-tight">
        Juntos, podemos construir <span className="text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">algo incrível.</span>
      </h4>
    </div>
  </div>

  {/* Lado Direito: Tags com Animação Hover */}
  <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
    {tags.map((tag, idx) => (
      <span
        key={idx}
        className="text-xs px-3 py-1.5 rounded-lg bg-[#130f23] border border-purple-900/40 text-purple-300/80 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-200 hover:bg-purple-950/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] cursor-default select-none"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};