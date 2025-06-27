
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Tu sitio web listo en un día, con soporte 24/7 para digitalizar tus ventas sin complicaciones." cta1="Transforma Tu Negocio" />
<How step1Title="Solicita tu Web" step1Desc="Comienza con un formulario simple." step2Title="Nosotros Creamos" step2Desc="Desarrollamos tu sitio en 24 horas." step3Title="Ventas Online" step3Desc="Empieza a vender sin complicaciones." />
<Aboutus headline="WebGo: Digitaliza tus ventas hoy" subheadline="WebGo crea sitios impactantes para aumentar ventas online sin complicaciones." beneficiotitulo1="Aumento de Ventas" beneficio1="Convierta recomendaciones en ventas digitales." beneficiotitulo2="Gestión Sin Esfuerzo" beneficio2="Nos encargamos de todo por usted." />
<Services heading="Impulsa tu Negocio al Mundo Digital" description="asda digitaliza tus ventas en menos de 24 horas." services={[{"name":"Diseño Web Rápido","icon":"bolt","description":"Webs listas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Siempre disponible para ti."},{"name":"Optimización SEO","icon":"chart-line","description":"Aumenta tu visibilidad online."},{"name":"Integración Pago Online","icon":"credit-card","description":"Facilita transacciones seguras."},{"name":"Marketing Digital","icon":"bullhorn","description":"Impulsa tus ventas con estrategias."},{"name":"Mantenimiento Web","icon":"wrench","description":"Mantén tu sitio siempre actualizado."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales con resultados excepcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a crear una tienda online efectiva, permitiéndote vender más allá de las recomendaciones personales. Nosotros nos encargamos de todo para que no tengas que preocuparte por la parte técnica."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, tendrás una presencia digital profesional que atrae a más clientes. Además, nos ocupamos del mantenimiento para que puedas concentrarte en hacer crecer tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo WebGo resuelve este problema?","respuesta":"Nosotros en WebGo nos encargamos de todo el proceso de gestión de tu sitio web, desde el diseño hasta el mantenimiento, para que puedas dedicar tu tiempo a lo que más importa: tu negocio."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"El servicio de WebGo cuesta 123 e incluye la creación y gestión completa de tu tienda online. Te ofrecemos una solución integral para que puedas vender en línea sin complicaciones."},{"pregunta":"No sé cómo generar ventas online, ¿puede WebGo ayudarme?","respuesta":"Sí, en WebGo no solo construimos tu tienda online, sino que también te asesoramos en estrategias de marketing digital para aumentar tus ventas en línea."}]} />
<BookAppointment 
                      heading="¡Transforma Tu Negocio en Línea!" 
                      description="Descubre cómo WebGo puede digitalizar tus ventas y dejar de depender solo de recomendaciones. Ahorra tiempo y empieza a generar ingresos online con nuestro producto asda por solo 123 en Santiago."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
