import { serverApi as api } from "../helpers/http-server";

/**
 * WHAT: API service module for chat-related HTTP requests
 * INPUT: None (module exports functions)
 * OUTPUT: Exports functions for fetching messages and AI summarization
 */

/**
 * WHAT: Fetches all chat messages from the server
 * INPUT: None (uses authenticated API instance)
 * OUTPUT: Returns array of message objects or throws error
 */
export const fetchMessages = async () => {
  try {
    const response = await api.get("/messages");
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

/**
 * WHAT: Requests AI summarization of chat history from server
 * INPUT: None (server fetches messages from database)
 * OUTPUT: Returns AI-generated summary object or throws error
 */
export const summarizeChat = async () => {
  try {
<<<<<<< HEAD
    const response = await api.post("/ai/summarize");
=======
    // Format messages to ensure clean data for AI processing
    const formattedMessages = messages.map((msg) => ({
      username: msg.username,
      content: msg.content,
      created_at: msg.created_at,
    }));

    const response = await api.post("/ai/summarize", { 
      messages: formattedMessages 
    });
>>>>>>> 4b3659cad783e1a455841669d25850314a83a68f
    return response.data;
  } catch (error) {
    console.error("Error summarizing chat:", error);
    // Log more details about the error
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    throw error;
  }
};

export default api;
