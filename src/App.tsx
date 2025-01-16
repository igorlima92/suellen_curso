import React, { useState, FormEvent } from 'react';
import { Calendar, Mail, MapPin, Phone, Star, Clock, MapPinned, Play, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import perfil from './assets/perfil-foto.png';
import portugal from './assets/portugal.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_lpsn7zr',
        'template_sqk494b',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'aZc3YPn336wSe8B5Z'
      );
      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <header className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Suellen Lima
            <img
              src={portugal}
              alt="Bandeira de Portugal"
              className="w-8 h-8 object-cover rounded-full"
            />
          </h1>
          {/* Botão Hamburguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Navegação Desktop */}
          <nav className={`hidden md:flex gap-6`}>
            <a href="#sobre" className="text-white hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#video" className="text-white hover:text-purple-400 transition-colors">Vídeo</a>
            <a href="#curso" className="text-white hover:text-purple-400 transition-colors">O Curso</a>
            <a href="#contato" className="text-white hover:text-purple-400 transition-colors">Contato</a>
          </nav>
        </div>
        {/* Navegação Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/90 border-t border-gray-700">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="#sobre"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#video"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400"
                >
                  Vídeo
                </a>
              </li>
              <li>
                <a
                  href="#curso"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400"
                >
                  O Curso
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src={portugal}
                alt="Bandeira de Portugal"
                className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 shadow-xl"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Sua Carreira de Nail Desing em Portugal Começa Aqui
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Formação profissional completa com certificação!
            </p>
            <a
              href="#contato"
              className="inline-block bg-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200 shadow-lg"
            >
              Garanta Sua Vaga
            </a>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-black/50" id="video">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-white mb-16">Conheça Mais Sobre o Curso</h3>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-gray-900/50 p-8 rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-20 h-20 text-white opacity-80" />
                </div>
                <iframe
                  className="w-full h-[500px] rounded-xl"
                  src="COLOQUE_AQUI_O_LINK_DO_SEU_VIDEO" 
                  title="Apresentação do Curso de Manicure"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-semibold text-white mb-4">Mensagem da Suellen Lima</h4>
                <p className="text-white/80 text-lg">
                  Assista ao vídeo e descubra como nosso curso pode transformar sua carreira em Portugal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Informações do Curso */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-20" id="curso">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-white mb-16">Informações do Curso</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-8 rounded-2xl text-white border border-purple-500/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-purple-400" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Horários</h4>
                <p>Segunda a Sexta</p>
                <p>9h às 17h</p>
                <p className="mt-2">Turmas aos Sábados</p>
                <p>10h às 16h</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-8 rounded-2xl text-white border border-purple-500/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                  <MapPinned className="text-purple-400" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Local</h4>
                <p>Centro de Formação</p>
                <p>Rua da Liberdade, 123</p>
                <p>Lisboa, Portugal</p>
                <p className="mt-2">Próximo ao Metro</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-8 rounded-2xl text-white border border-purple-500/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="text-purple-400" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Duração</h4>
                <p>Curso Intensivo</p>
                <p>3 meses de duração</p>
                <p className="mt-2">Certificado Incluso</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-8 rounded-2xl text-white border border-purple-500/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                  <Star className="text-purple-400" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Benefícios</h4>
                <p>Material Incluso</p>
                <p>Prática Garantida</p>
                <p>Suporte Pós-curso</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black" id="sobre">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src={perfil}
                  alt="Manicure Profissional"
                  className="rounded-2xl shadow-2xl w-full transform -rotate-3 hover:rotate-0 transition-transform duration-200"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-4xl font-bold text-white mb-8">Sobre Suellen Lima</h3>
                <p className="text-white/90 text-lg mb-6">
                  Com mais de 5 anos de experiência no mercado da beleza, Suellen Lima é referência em manicure e formação profissional em Portugal.
                </p>
                <p className="text-white/90 text-lg mb-8">
                  Sua metodologia única combina técnicas tradicionais com as últimas tendências do mercado, preparando profissionais completos e prontos para o sucesso no mercado português.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-purple-900/20 backdrop-blur-md p-6 rounded-xl border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">100+</h4>
                    <p className="text-white/90">Alunas Formadas</p>
                  </div>
                  <div className="bg-purple-900/20 backdrop-blur-md p-6 rounded-xl border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">5+</h4>
                    <p className="text-white/90">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="contato">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-white mb-16">Entre em Contato</h3>
            <div className="max-w-xl mx-auto">
              <div className="grid gap-8 mb-12">
                <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900 to-gray-900 p-6 rounded-xl text-white border border-purple-500/20">
                  <Phone className="text-purple-400" size={32} />
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <span>+55 (14) 9848-0054</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900 to-gray-900 p-6 rounded-xl text-white border border-purple-500/20">
                  <Mail className="text-purple-400" size={32} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <span>suellengoncalves79@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900 to-gray-900 p-6 rounded-xl text-white border border-purple-500/20">
                  <MapPin className="text-purple-400" size={32} />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <span>Lisboa, Portugal</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500 text-white text-lg"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500 text-white text-lg"
                />
                <input
                  type="tel"
                  placeholder="Seu Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500 text-white text-lg"
                />
                <textarea
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500 text-white text-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-900 text-white px-8 py-5 rounded-xl text-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition-colors transform hover:scale-105 duration-200 shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Suellen Lima - Todos os direitos reservados</p>
          <p>Developed by <a href='#'>Igor Lima</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;