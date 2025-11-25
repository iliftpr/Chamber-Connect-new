import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
// NOTE: In a real production app, ensure API_KEY is set in your environment
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateEventDescription = async (title: string, date: string, details: string): Promise<string> => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Returning mock data.");
    return "This is a placeholder description because the API key is missing. Please configure your API key to generate real content.";
  }

  try {
    const prompt = `
      You are a professional copywriter for a Chamber of Commerce.
      Write a compelling, professional, and inviting event description (approx 100-150 words) for the following event:
      
      Event Title: ${title}
      Date: ${date}
      Key Details: ${details}
      
      The tone should be corporate yet welcoming. Focus on the value of attending (networking, learning, etc.).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No description generated.";
  } catch (error) {
    console.error("Error generating event description:", error);
    return "Failed to generate description. Please try again later.";
  }
};

export const generatePressRelease = async (topic: string, keyPoints: string): Promise<string> => {
    if (!apiKey) {
      return "API Key missing. Cannot generate press release.";
    }

    try {
        const prompt = `
            Write a formal press release for a Chamber of Commerce regarding: ${topic}.
            Key points to include: ${keyPoints}.
            Format it with a headline, dateline, and body text.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text || "No content generated.";
    } catch (error) {
        console.error("Error generating press release", error);
        return "Error generating press release.";
    }
}
