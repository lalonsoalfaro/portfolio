import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido.');
      return;
    }

    const response = await fetch('https://formspree.io/f/xzebqpzq', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('¡Mensaje enviado correctamente!');
      form.reset();
    } else {
      alert('Hubo un error. Intenta de nuevo.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 cursor-default">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-left space-y-6 cursor-default">
            <h3 className="text-2xl font-bold mb-4">¿Hablamos?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Estoy abierto a nuevas oportunidades, colaboraciones en proyectos
              o simplemente conectar con otros desarrolladores. No dudes en escribirme.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,127,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">luis.a.alfaro.c2007@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,127,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">lalonsoalfaro</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,127,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">Luis Alonso Alfaro</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-[0_0_25px_rgba(0,255,127,0.06)] transition-all duration-300">
            <form className="space-y-4" action="https://formspree.io/f/xzebqpzq" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
              <input type="hidden" name="_next" value="/" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <Button type="submit" className="w-full py-6 text-lg">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;