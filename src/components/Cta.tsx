import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

const PaypalButton: React.FC = () => {
  useEffect(() => {
    const renderPaypal = () => {
      // @ts-ignore
      const w: any = window;
      if (w.paypal) {
        w.paypal.HostedButtons({
          hostedButtonId: "A9A69DGQTJMFE"
        }).render("#paypal-container-A9A69DGQTJMFE");
      }
    };
    if (!document.getElementById('paypal-sdk')) {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=BAA4lz8UNfCxgze9nsnUqpXK2pwKSqxS2KsFHxp7hoLp0mYZJJJcaEFLqoigy1UiObcu496B4rs1kL2zLk&components=hosted-buttons&disable-funding=venmo&currency=MXN";
      script.id = "paypal-sdk";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = renderPaypal;
      document.body.appendChild(script);
    } else {
      renderPaypal();
    }
  }, []);
  return (
    <div
      id="paypal-container-A9A69DGQTJMFE"
      className="mt-6 flex justify-center"
      style={{ minWidth: 320, maxWidth: 400, margin: '0 auto' }}
    ></div>
  );
};

const Cta: React.FC = () => {
    return (
        <section id="inscripciones" className="py-10 sm:py-20 md:py-24 bg-gradient-to-br from-sky-100 to-white text-gray-800">
            <div className="max-w-6xl mx-auto px-2 sm:px-5 text-center">
                <div className="inline-block bg-amber-400 text-amber-900 font-bold rounded-full px-4 py-1 mb-4 text-xs tracking-widest shadow-md sm:hidden">¡Contáctanos!</div>
                <div className="bg-white rounded-3xl p-5 sm:p-10 max-w-lg mx-auto shadow-2xl border border-sky-200 relative flex flex-col items-center">
                    <div className="flex items-center justify-center mb-3">
                        <Phone size={40} className="text-amber-500" />
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl mb-4 text-gray-900">Información e Inscripciones</h3>
                    <p className="mb-6 text-sm sm:text-base text-gray-700">Escribe "INFORMACIÓN OH CARDS" para recibir todos los detalles.</p>
                    <div className="space-y-6 w-full">
                        <div>
                            <p className="mb-2 font-semibold text-base sm:text-lg">WhatsApp:</p>
                            <a href="https://wa.me/+525579076626" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-bold transition-colors text-base sm:text-lg break-words">
                                Enviar mensaje
                            </a>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold text-base sm:text-lg">Email:</p>
                            <a href="mailto:contacto@institucentrobioenergetica.com" className="text-amber-600 hover:text-amber-700 font-bold transition-colors text-base sm:text-lg break-all p-1 block">
                                contacto@institucentrobioenergetica.com
                            </a>
                        </div>
                        <div className="flex flex-col items-center mt-8 w-full">
                          <form
                            action="https://www.paypal.com/ncp/payment/A9A69DGQTJMFE"
                            method="post"
                            target="_blank"
                            style={{
                              display: "inline-grid",
                              justifyItems: "center",
                              alignContent: "start",
                              gap: "0.5rem",
                              width: "100%"
                            }}
                          >
                            <input
                              className="pp-A9A69DGQTJMFE"
                              type="submit"
                              value="Comprar ahora"
                              style={{
                                textAlign: "center",
                                border: "none",
                                borderRadius: "0.25rem",
                                minWidth: "11.625rem",
                                padding: "0 2rem",
                                height: "2.625rem",
                                fontWeight: "bold",
                                backgroundColor: "#FFD140",
                                color: "#000000",
                                fontFamily: 'Helvetica Neue,Arial,sans-serif',
                                fontSize: "1rem",
                                lineHeight: "1.25rem",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
                              alt="cards"
                            />
                            <section style={{ fontSize: "0.75rem" }}>
                              Con la tecnología de {" "}
                              <img
                                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                                alt="paypal"
                                style={{ height: "0.875rem", verticalAlign: "middle" }}
                              />
                            </section>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
