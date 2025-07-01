/// <reference types="vite/client" />
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BrainCircuit, Loader2, AlertTriangle, Wand2, Image as ImageIcon, Info } from 'lucide-react';

// The list of OH card image URLs provided by the user.
const imageUrls = [
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/6ecef946-b9e4-446f-b6cf-59730fa0e7ef/84.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/a73b1baf-4efe-4313-9a53-45dca6d6ce3b/80.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/ed35919f-421b-4f0f-9b48-111de14494b1/82.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9cdffdf8-e281-4064-a362-0be0d1a19d33/85.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f6c4cdc0-414e-4f02-b41f-121676571ce9/83.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/935dac77-d8fa-4bc2-9cdd-05e57ee0e048/81.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/1d50be9e-731f-49b8-9595-1aa78380d639/78.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/d5311b76-7d4a-446c-865b-b9f169dadd47/75.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/edb4f1c5-2bd7-4526-813d-3c6eb07bab28/76.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/479250de-d8c8-44a3-a82b-7d6f4b9681a7/77.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/036a9977-b930-4449-a341-6e87b7c9157a/79.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/30efd49f-d2fe-4752-8dab-5fe1c291f0c2/tempImageBO1iaB.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/52565b64-efd6-4d03-827c-c1fc28d93e0e/67.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/c8800e11-7669-4da6-a77a-c837675a45d5/71.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/085fd4b9-172b-4976-97cf-abf71013df7e/72.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/cf22ec54-20dc-45ec-82df-8b2db9fd0302/74.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/ba33b912-993b-436b-a754-2914afcc1a55/63.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/86d21ea8-ab20-4af4-a696-dbc916d68525/66.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/ed180e10-a859-4bc5-a648-85e812707582/68.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/d9624b29-7357-40dc-a7fb-d523e2759270/70.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/7bc56395-6a3e-40bf-a6b1-6f6102e7b418/69.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/a98e2d2a-1e6c-412a-b216-b516d75dfc06/61.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/109d8fb6-0353-4ff9-ad51-185464cf38e3/65.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/c406cd85-6452-4118-adc0-54a53f2f7450/62.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/b44b052b-9317-4263-bcbd-8bba13596001/64.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/4dd6f450-314e-410f-af60-651f611f883d/58.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/b8f7bd4a-5eed-4a78-bfc7-955142dacde9/56.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/d7dddfce-592c-48fe-88c7-61a8a68c4248/60.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/af7a9075-fcea-40d6-ab9f-fa7cb7fa58f2/54.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/57fcaab6-c001-418a-93d0-51501201a298/57.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/03970bbe-ed5e-407a-8ffa-738166681576/59.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/87459929-390a-4da8-ad43-4deaebc9feb4/49.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/290c746e-f42c-4575-8e05-d6ecc2d1274d/53.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/8ff79b89-e5c6-47f3-969a-013fe6805dc6/51.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/2dfc8396-f7d1-4cd5-a5ab-7b26bca2907a/52.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/4f68d775-50f4-44c8-b8ff-cccab143d9b3/55.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9ae083ba-b37a-41ef-a0ad-b618c34cccea/44.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/21719f38-6ea4-44bc-8dd6-c9e7ab663243/46.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/948d6733-9549-47a2-9a2f-2181fece54bf/45.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/3a4f0766-8cca-47c1-b31a-e23db7fe0031/48.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9a1d70a7-0139-4090-a04f-a3d7189fffc8/50.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/e2683184-9732-4144-ad7a-3edc501fe83c/47.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/28bbc414-9374-400c-8ab4-eb71f0b0f8a8/36.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f6098c79-0cf8-490f-a11f-310465393a29/43.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/85592ba0-bc06-42b3-9ff1-23ae8b726fce/42.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f4833ea8-b7e9-4dc1-a0ac-1852f2a3521b/35.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/d111bfbf-b014-48a6-b36e-d5aed8d94d29/37.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/464aac98-acbc-4f95-a1f3-9341bb50dda0/39.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/2c745be1-69cd-4f3b-a55b-9c50879ac524/38.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f2eeb748-42d6-401f-a4ff-21468a1c0944/31.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/529800ef-8955-41f7-bfc3-9b7a23c549e8/32.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/07cf7dbb-1a0f-4c7d-912d-77f79c8fcba9/30.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/3f3f22c5-c85a-43a6-9e34-975a962d8b1f/34.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/c007002d-82aa-4cd3-b30e-97e19455f1a8/33.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/756a339d-f6ad-4b10-8a62-b936dd2c74aa/24.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/b9ced6ec-93fd-4ffe-bc6a-0fadc64cd5bb/29.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/47fab4e4-8396-4fc3-b5b4-fd1476fa07df/27.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9a21e03b-18ca-4799-a5d3-05004049eebd/22.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/4c1f13dc-b0e8-498d-a489-b886739e8f20/28.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f2327ecf-737b-4e15-acad-1e881209f307/23.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/a75db43e-8967-4cd2-bd9d-8ddcfd968aa6/21.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/61f2551a-caef-4248-a22f-c6b45faa0b40/25.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/668a9b4c-8718-47ff-ae66-8d36e8d0c76c/16.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/7c394203-a5aa-4b24-b2b3-c5415c2e36a0/26.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/d9b7f740-e083-41b2-8cb5-ea0fdf98da66/19.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9e8da047-217b-4d28-952c-67fd90f3ac08/15.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/87ecbb75-8c7a-472e-9d44-1090da30473f/20.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/8b2c3583-b144-408b-8490-2b49c6852098/17.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/6e8eae1f-00e2-430b-adc9-2bb67c250ba0/18.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/53e5b4eb-b54f-4b8f-9788-57d10fe853c5/tempImageuQLTYg.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/156eb1b3-c9b8-4aca-ba93-09ab613f3b41/11.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/0a594eda-760c-4cc6-b87e-d35ac92e87ad/13.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/830bd6c5-715d-40b8-ac33-e6f4448f33fd/8.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/0d092bd8-4c4e-4eaf-bdb5-9cb7d92e3afd/10.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/22d1f880-a113-43eb-bf92-092ccfb548c2/5.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/51c22a7f-e233-4523-94f6-101416d70501/4.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/84e18d4c-c2bd-4d8c-90b6-893d3722a9c2/9.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/ec116260-422f-4a35-b110-d848ac090490/3.jpg?format=300w',
  'https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/639dd625-7235-4b02-9b04-86adc91f7e0e/7.jpg?format=300w',
];

type DemoResult = {
  palabra: string;
  reflexion: string;
};

const InteractiveDemo: React.FC = () => {
  const MAX_ATTEMPTS = 3;
  const [attempts, setAttempts] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<DemoResult | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isLimitReached = attempts >= MAX_ATTEMPTS;

  useEffect(() => {
    try {
      const savedAttempts = localStorage.getItem('oh-cards-demo-attempts');
      if (savedAttempts) {
        const count = parseInt(savedAttempts, 10);
        if (!isNaN(count) && count < MAX_ATTEMPTS) {
          setAttempts(count);
        } else if (!isNaN(count) && count >= MAX_ATTEMPTS) {
          setAttempts(MAX_ATTEMPTS);
        }
      }
    } catch (e) {
      console.error("Could not read from localStorage:", e);
    }
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLimitReached) {
      setError('Has alcanzado el límite de 3 interacciones.');
      return;
    }
    if (!userInput.trim()) {
      setError('Por favor, introduce una palabra o frase.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setSelectedImageUrl(null);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userInput,
          systemInstruction: "Eres un facilitador sabio y empático de Cartas OH. Tu objetivo es proporcionar una reflexión breve y perspicaz basada en la entrada de un usuario, simulando la experiencia de sacar una carta de palabra. Tu reflexión debe ser lo suficientemente abierta como para conectar la palabra que generas con una imagen simbólica que se mostrará al usuario por separado. Responde siempre en español y únicamente con un objeto JSON válido."
        })
      });
      const data = await response.json();
      // Procesa la respuesta de Gemini
      // Extrae el texto generado (ajusta según el formato de respuesta)
      let jsonStr = '';
      try {
        jsonStr = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
      } catch {
        jsonStr = '';
      }
      const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
      const match = jsonStr.match(fenceRegex);
      if (match && match[2]) {
        jsonStr = match[2].trim();
      }
      if (!jsonStr) throw new Error('Respuesta vacía de Gemini');
      const parsedData: DemoResult = JSON.parse(jsonStr);
      setResult(parsedData);

      const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      setSelectedImageUrl(randomImage);

      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      try {
        localStorage.setItem('oh-cards-demo-attempts', newAttempts.toString());
      } catch (e) {
        console.error("Could not write to localStorage:", e);
      }

    } catch (e) {
      console.error("Error generating reflection:", e);
      setError('Hubo un error al generar la reflexión. Por favor, intenta de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D4333] mb-4 flex items-center justify-center gap-3">
            <BrainCircuit size={40} className="text-amber-500" />
            Experimenta el Poder de las OH Cards
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600">
            ¿Sientes curiosidad? Escribe una palabra o una frase sobre cómo te sientes o una situación actual y recibe una reflexión generada por IA, inspirada en la metodología OH.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {isLimitReached ? (
             <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 rounded-md flex items-start sm:items-center gap-3 max-w-xl mx-auto mb-8" role="status">
                <Info size={40} className="flex-shrink-0 text-amber-600 hidden sm:block" />
                <div>
                  <p className="font-bold">Límite de demostración alcanzado</p>
                  <p className="text-sm">Has utilizado tus 3 reflexiones. Para continuar tu viaje de autodescubrimiento, <a href="#inscripciones" className="underline font-semibold hover:text-amber-900">inscríbete en el taller completo</a>.</p>
                </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-4 text-sm">
                Te quedan <span className="font-bold text-gray-700">{MAX_ATTEMPTS - attempts}</span> de {MAX_ATTEMPTS} reflexiones.
            </p>
          )}

          <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3 mb-8 max-w-xl mx-auto">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ej: 'Incertidumbre' o 'buscando un cambio'"
              className="w-full px-5 py-3 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
              aria-label="Tu situación o sentimiento"
              disabled={isLoading || isLimitReached}
            />
            <button
              type="submit"
              disabled={isLoading || isLimitReached}
              className="bg-gradient-to-br from-amber-500 to-orange-500 text-white py-3 px-8 rounded-full font-bold inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Generando...
                </>
              ) : 'Generar Reflexión'}
            </button>
          </form>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md flex items-center gap-3 max-w-xl mx-auto" role="alert">
              <AlertTriangle size={24} />
              <p>{error}</p>
            </div>
          )}

          {result && selectedImageUrl && (
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 transition-all duration-500 animate-fadeInUp" aria-live="polite">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Image Card Column */}
                    <div className="md:col-span-3">
                        <div className="bg-sky-50 p-3 sm:p-4 rounded-lg border border-sky-200 flex flex-col shadow-sm">
                            <h3 className="font-bold text-sm uppercase tracking-wider text-sky-700 mb-3 flex items-center gap-2 self-center"><ImageIcon size={16} /> Carta de Imagen</h3>
                            <div className="rounded-md overflow-hidden shadow-md">
                                <img 
                                    src={selectedImageUrl} 
                                    alt="Imagen simbólica de una carta OH" 
                                    className="w-full h-auto object-cover rounded-md aspect-square transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Word and Reflection Column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        {/* Word Card */}
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex flex-col text-center shadow-sm">
                            <h3 className="font-bold text-sm uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-2 self-center"><Wand2 size={16} /> Palabra Clave</h3>
                            <div className="flex-grow flex items-center justify-center min-h-[100px]">
                                <p className="text-4xl font-bold text-[#5D4333]">{result.palabra}</p>
                            </div>
                        </div>
                        
                        {/* Reflection */}
                        <div>
                            <h3 className="font-bold text-xl text-[#5D4333] mb-3">Reflexión para ti:</h3>
                            <p className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-md border border-gray-200">{result.reflexion}</p>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default InteractiveDemo;
