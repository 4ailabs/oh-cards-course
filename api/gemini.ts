export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, systemInstruction } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  try {
    const fullPrompt = systemInstruction ? `${systemInstruction}\n${prompt}` : prompt;
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: fullPrompt }] }
        ]
      })
    });

    const data = await response.json();
    console.log('Respuesta completa de Gemini:', JSON.stringify(data));
    if (!data || !data.candidates || !data.candidates.length || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts.length) {
      console.error('Respuesta vacía o inesperada de Gemini:', JSON.stringify(data));
      return res.status(500).json({ error: 'Respuesta vacía o inesperada de Gemini', details: data });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error calling Gemini API', details: error });
  }
} 