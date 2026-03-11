"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { BarChart3, Briefcase, Building2, CheckCircle, DollarSign, Eye, Info, Layers, Sparkles, Star, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Index EleMec SRL"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Servicios", id: "services" },
            { name: "Sobre Nosotros", id: "about" },
            { name: "Testimonios", id: "testimonials" }
          ]}
          button={{ text: "Solicitar Asesoría", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Administración Profesional de Condominios"
          description="Gestión eficiente, transparencia financiera y tranquilidad para propietarios. Somos expertos en administración de propiedades en Santo Domingo."
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "10+", label: "Años de Experiencia" },
            { value: "50+", label: "Condominios Administrados" },
            { value: "98%", label: "Satisfacción de Clientes" }
          ]}
          enableKpiAnimation={true}
          tag="Soluciones Integrales"
          tagIcon={Building2}
          tagAnimation="slide-up"
          buttons={[
            { text: "Solicitar Asesoría", href: "#contact" },
            { text: "Conocer Servicios", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/window-pattern-textures-building_1203-9658.jpg"
          imageAlt="Edificios residenciales modernos en Santo Domingo"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Sobre Index EleMec SRL"
          description="Somos una empresa especializada en administración profesional de condominios en Santo Domingo, República Dominicana. Combinamos experiencia, tecnología y atención personalizada para garantizar la máxima satisfacción de nuestros clientes."
          tag="Quiénes Somos"
          tagIcon={Info}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            { title: "Transparencia", description: "Informes financieros claros y accesibles para todos los propietarios.", icon: Eye },
            { title: "Responsabilidad", description: "Gestión eficiente y profesional de todos los recursos del condominio.", icon: CheckCircle },
            { title: "Organización", description: "Sistemas modernos para administrar y controlar cada aspecto de la propiedad.", icon: Layers },
            { title: "Atención Personalizada", description: "Equipo dedicado disponible para resolver cualquier inquietud de propietarios.", icon: Users }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/young-colleagues-office_23-2147808095.jpg"
          imageAlt="Equipo profesional de Index EleMec SRL"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          features={[
            {
              id: "1",              title: "Administración Financiera",              description: "Control completo de pagos de mantenimiento, presupuestos anuales y reportes financieros detallados.",              tag: "Finanzas",              imageSrc: "http://img.b2bpic.net/free-vector/loans-isometric-composition-with-set-workplace-with-office-pictograms-finance_1284-28135.jpg",              imageAlt: "Sistema de administración financiera"
            },
            {
              id: "2",              title: "Gestión de Mantenimiento",              description: "Supervisión profesional de áreas comunes, equipos, reparaciones y mantenimiento preventivo.",              tag: "Mantenimiento",              imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-working-switchboard-with-fuses_169016-53034.jpg",              imageAlt: "Gestión de mantenimiento"
            },
            {
              id: "3",              title: "Atención a Propietarios",              description: "Comunicación directa y personalizada con residentes, juntas de condominio y resolución de inquietudes.",              tag: "Comunicación",              imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-people-office_23-2149173720.jpg",              imageAlt: "Atención a propietarios"
            },
            {
              id: "4",              title: "Supervisión de Personal",              description: "Control y coordinación de conserjes, seguridad, mantenimiento y personal operativo.",              tag: "Personal",              imageSrc: "http://img.b2bpic.net/free-photo/building-construction-worker-site-with-architect_23-2149124313.jpg",              imageAlt: "Supervisión de personal"
            },
            {
              id: "5",              title: "Planificación de Asambleas",              description: "Organización profesional de reuniones, toma de decisiones y gestión de documentación.",              tag: "Asambleas",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-team-working_23-2149271716.jpg",              imageAlt: "Planificación de asambleas"
            }
          ]}
          animationType="slide-up"
          title="Nuestros Servicios"
          description="Ofrecemos soluciones completas para la administración eficiente de su condominio."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Servicios"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <MetricCardThree
          metrics={[
            { id: "1", icon: BarChart3, title: "Organización", value: "100%" },
            { id: "2", icon: DollarSign, title: "Control Financiero", value: "Garantizado" },
            { id: "3", icon: Building2, title: "Mantenimiento", value: "Óptimo" },
            { id: "4", icon: Users, title: "Comunicación", value: "Efectiva" }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          title="Beneficios para Su Condominio"
          description="Descubra cómo transformamos la administración de propiedades."
          tag="Ventajas"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",              name: "Carlos Rodríguez, Presidente Junta de Condominio",              date: "Date: 15 Noviembre 2024",              title: "Excelente servicio y profesionalismo",              quote: "Desde que contratamos a Index EleMec SRL, la administración de nuestro condominio mejoró significativamente. Son organizados, transparentes y responden rápidamente a cualquier inquietud.",              tag: "Residencial Premium",              avatarSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg",              avatarAlt: "Carlos Rodríguez",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg"
            },
            {
              id: "2",              name: "María García, Propietaria",              date: "Date: 10 Noviembre 2024",              title: "Transparencia y confianza",              quote: "Los reportes financieros son claros y detallados. Finalmente tengo la paz mental de saber exactamente en qué se invierten los fondos del condominio.",              tag: "Residencial Estándar",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident_1258-194088.jpg",              avatarAlt: "María García",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident_1258-194088.jpg"
            },
            {
              id: "3",              name: "Juan Pérez, Propietario",              date: "Date: 05 Noviembre 2024",              title: "Mantenimiento impecable",              quote: "El estado del edificio ha mejorado notablemente. Su equipo de supervisión asegura que todo esté en perfecto estado. Muy recomendado.",              tag: "Residencial Premium",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-using-tablet_1262-5673.jpg",              avatarAlt: "Juan Pérez",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-using-tablet_1262-5673.jpg"
            },
            {
              id: "4",              name: "Ana López, Administradora Anterior",              date: "Date: 01 Noviembre 2024",              title: "Profesionales de verdad",              quote: "La transición fue suave y profesional. Son expertos en su campo y tienen sistemas modernos que facilitan la gestión del condominio.",              tag: "Transición Exitosa",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              avatarAlt: "Ana López",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg"
            },
            {
              id: "5",              name: "Roberto Díaz, Presidente Asamblea",              date: "Date: 28 Octubre 2024",              title: "Gestión integral excepcional",              quote: "Desde la administración financiera hasta el mantenimiento, todo se gestiona de forma profesional. Nuestro condominio está en las mejores manos.",              tag: "Condominio Comercial",              avatarSrc: "http://img.b2bpic.net/free-photo/serious-executive-sitting-couch_1098-2454.jpg",              avatarAlt: "Roberto Díaz",              imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-sitting-couch_1098-2454.jpg"
            },
            {
              id: "6",              name: "Patricia Hernández, Propietaria",              date: "Date: 25 Octubre 2024",              title: "Atención personalizada y dedicada",              quote: "No solo administran, también entienden nuestras necesidades. El equipo es accesible, amable y siempre disponible para ayudar.",              tag: "Residencial Familiar",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",              avatarAlt: "Patricia Hernández",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg"
            }
          ]}
          title="Loe Dicen Nuestros Clientes"
          description="Conoce las experiencias de propietarios y administradores que confían en nosotros."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Testimonios"
          tagIcon={Star}
          tagAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="¿Listo para mejorar la administración de su condominio? Contacte con nosotros hoy para una asesoría gratuita."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Llamar Ahora: (809) 598-9841", href: "tel:+18095989841" },
            { text: "Enviar Mensaje", href: "mailto:info@indexelemecsrl.com" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/las-vegas-strip_649448-3260.jpg"
          imageAlt="Skyline de Santo Domingo"
          logoText="Index EleMec SRL"
          copyrightText="© 2025 Index EleMec SRL | Administración de Condominios"
          columns={[
            {
              title: "Empresa",              items: [
                { label: "Inicio", href: "#hero" },
                { label: "Servicios", href: "#services" },
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Contacto", href: "#contact" }
              ]
            },
            {
              title: "Servicios",              items: [
                { label: "Administración Financiera", href: "#services" },
                { label: "Gestión de Mantenimiento", href: "#services" },
                { label: "Atención a Propietarios", href: "#services" },
                { label: "Supervisión de Personal", href: "#services" }
              ]
            },
            {
              title: "Contacto",              items: [
                { label: "Teléfono: (809) 598-9841", href: "tel:+18095989841" },
                { label: "Email: info@indexelemecsrl.com", href: "mailto:info@indexelemecsrl.com" },
                { label: "Santo Domingo, República Dominicana", href: "#" },
                { label: "Política de Privacidad", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}