import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_KEY,
});

const models = [
  'google/gemini-flash-1.5',
  'deepseek/deepseek-chat-v3-0324:free',
  'openai/gpt-4o-mini',
];

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const analysisPromises = models.map((model) =>
      openrouter.chat.completions.create({
        model,
        messages: [
          {
            role: "system",
            content: `
              Eres un asistente de IA especializado en analizar la veracidad y el sesgo de textos políticos.
              Tu respuesta DEBE ser un objeto JSON con la siguiente estructura:
              {
                "veracity_score": number, // Puntuación de veracidad de 1 (muy falso) a 10 (muy verdadero)
                "summary": string, // Un resumen conciso del análisis
                "bias_analysis": string, // Un análisis del posible sesgo encontrado
                "fallacies": string[] // Un array de falacias lógicas identificadas
              }
              NO incluyas ninguna otra información o texto fuera del objeto JSON.
            `,
          },
          { role: "user", content: `Analiza el siguiente texto y proporciona el resultado en el formato JSON especificado: ${text}` },
        ],
        response_format: { type: "json_object" },
      })
    );

    const results = await Promise.all(analysisPromises);

    const analysis = results.reduce((acc, result, index) => {
      try {
        const content = result.choices[0].message.content;
        if (content) {
          acc[models[index]] = JSON.parse(content);
        } else {
          acc[models[index]] = { error: "No content returned" };
        }
      } catch (e) {
        acc[models[index]] = { error: "Invalid JSON response" };
      }
      return acc;
    }, {} as Record<string, any>);

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Error analyzing text:', error);
    return NextResponse.json(
      { error: 'Failed to analyze text' },
      { status: 500 }
    );
  }
}
