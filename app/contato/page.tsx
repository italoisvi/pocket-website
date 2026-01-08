"use client";

import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O Pocket é gratuito?",
      answer: "Sim! O Pocket oferece uma versão gratuita completa com todos os recursos essenciais de gerenciamento financeiro. Também temos planos premium com funcionalidades adicionais para quem deseja ir além.",
    },
    {
      question: "Meus dados financeiros estão seguros?",
      answer: "Absolutamente. Utilizamos criptografia end-to-end para proteger todos os seus dados, tanto em trânsito quanto em repouso. Seus dados são armazenados de forma segura e jamais são compartilhados com terceiros.",
    },
    {
      question: "O Pocket funciona offline?",
      answer: "Sim! Você pode registrar seus gastos offline e eles serão sincronizados automaticamente quando você recuperar a conexão com a internet.",
    },
    {
      question: "Como funciona a categorização automática?",
      answer: "Nossa IA analisa o estabelecimento, tipo de compra e descrição para categorizar automaticamente seus gastos. Quanto mais você usa o app, mais preciso ele se torna, aprendendo com suas preferências.",
    },
    {
      question: "Posso usar o Pocket em mais de um dispositivo?",
      answer: "Sim! Sua conta do Pocket sincroniza automaticamente entre todos os seus dispositivos. Faça login com a mesma conta e todos os seus dados estarão disponíveis.",
    },
    {
      question: "Como funciona o scan de recibos?",
      answer: "Basta tirar uma foto do seu recibo e nossa tecnologia OCR extrai automaticamente informações como valor, data, estabelecimento e categoria. É rápido, preciso e elimina a necessidade de digitação manual.",
    },
    {
      question: "O que é o assistente virtual Walts?",
      answer: "Walts é seu consultor financeiro pessoal com inteligência artificial. Você pode conversar com ele para tirar dúvidas, receber insights sobre seus gastos e obter dicas personalizadas para melhorar sua saúde financeira.",
    },
    {
      question: "Posso exportar meus dados?",
      answer: "Sim! Você pode exportar seus dados financeiros em diversos formatos (PDF, CSV, Excel) a qualquer momento para análise ou backup.",
    },
    {
      question: "O Pocket está disponível para iOS e Android?",
      answer: "Atualmente o Pocket está disponível para Android. A versão iOS está em desenvolvimento e será lançada em breve. Cadastre-se na nossa newsletter para ser notificado do lançamento.",
    },
    {
      question: "Como entro em contato com o suporte?",
      answer: "Você pode usar este formulário acima, enviar um email para suporte@pocket-app.com ou nos contatar através das nossas redes sociais. Respondemos todas as mensagens em até 24 horas.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-6">
          Entre em Contato
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-12 md:mb-16 leading-relaxed">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos aqui para você.
        </p>

        {/* Formulário de Contato */}
        <div className="bg-surface rounded-2xl border-2 border-border p-6 md:p-8 lg:p-10 mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
            Envie sua Mensagem
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-base md:text-lg font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-base md:text-lg"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-base md:text-lg"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="assunto" className="block text-base md:text-lg font-medium mb-2">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-base md:text-lg"
              >
                <option value="">Selecione um assunto</option>
                <option value="suporte">Suporte Técnico</option>
                <option value="sugestao">Sugestão de Recurso</option>
                <option value="bug">Relatar Bug</option>
                <option value="parceria">Parcerias</option>
                <option value="privacidade">Privacidade e Dados</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-base md:text-lg font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 border-border bg-background text-foreground focus:border-foreground focus:outline-none transition-colors text-base md:text-lg resize-none"
                placeholder="Descreva sua mensagem aqui..."
              />
            </div>

            {formStatus === "success" && (
              <div className="p-4 md:p-5 rounded-xl bg-[#81C784]/20 border-2 border-[#81C784]/40 text-[#2E7D32]">
                <p className="text-base md:text-lg font-medium">
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="p-4 md:p-5 rounded-xl bg-[#FF6B6B]/20 border-2 border-[#FF6B6B]/40 text-[#C62828]">
                <p className="text-base md:text-lg font-medium">
                  Erro ao enviar mensagem. Tente novamente.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "sending" ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-8 md:mb-12 leading-relaxed">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o Pocket.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-border rounded-xl overflow-hidden transition-all hover:border-foreground/20"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between bg-surface hover:bg-background transition-colors text-left"
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-5 md:px-8 md:py-6 bg-background border-t-2 border-border animate-in slide-in-from-top-2 duration-200">
                    <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 md:mt-20 p-6 md:p-8 lg:p-10 bg-surface rounded-2xl border-2 border-border">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            Outras Formas de Contato
          </h3>
          <div className="space-y-4 text-text-secondary">
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Email:</strong> contato@gladiussistemas.com.br
            </p>
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Horário de Atendimento:</strong> Segunda a Sexta, 9h às 18h
            </p>
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Tempo de Resposta:</strong> Até 24 horas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
