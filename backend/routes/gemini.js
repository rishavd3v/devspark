const {GoogleGenerativeAI}= require("@google/generative-ai");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  generationConfig:{
    responseMimeType:"application/json",
  }
});

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

const generate = async (tech,difficulty) => {
  try{
    const prompt = `give me 9 project ideas in ${tech} with ${difficulty} difficulty. Give output as an array of json, for each project with the following structure:
    {
      "stack": "${tech}",
      "difficulty": "${difficulty}",
      "name": "Project Name",
      "description": "Short Project Description",
      "steps": ["Step 1", "Step 2", "Step 3",...],
      "requirement": ["Requirement 1", "Requirement 2", "Requirement 3",...],
      "learn": ["Skill 1", "Skill 2", "Skill 3",...]
    }
    `;
    const result = await chat.sendMessage(prompt);
    const jsonData = JSON.parse(result.response.text());
    return jsonData;
  } 
  catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { generate };