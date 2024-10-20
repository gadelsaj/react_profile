import React, { useState, useRef, useEffect } from 'react';

const AiComponent = () => {
  const [prompt, setPrompt] = useState('');  // To store the user's input
  const [messages, setMessages] = useState([]);  // To store the conversation (both user and AI messages)
  const [loading, setLoading] = useState(false);  // For showing a loading indicator while waiting for AI response
  const [error, setError] = useState('');  // To store any errors
  const chatContainerRef = useRef(null);  // Ref for the chat container to enable scrolling

  // Ensure the API key is fetched correctly using Vite's environment variable system
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to send the user's prompt to OpenAI and receive the response
  const generateResponse = async () => {
    if (!prompt) {
      setError('Please enter a prompt');  // Check if prompt is empty
      return;
    }

    setLoading(true);  // Start loading indicator
    setError('');  // Clear previous errors

    // Add the user's message to the conversation
    setMessages([...messages, { role: 'user', content: prompt }]);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,  // Make sure the API key is passed
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',  // Update to GPT-3.5 Turbo model
          messages: [...messages.map(msg => ({ role: msg.role, content: msg.content })), { role: 'user', content: prompt }],
          max_tokens: 100,  // Limit response length
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error fetching AI response:', errorData);
        setError(`Error: ${errorData.error.message || 'Unable to fetch AI response.'}`);
        return;
      }

      const data = await res.json();

      // Add the AI's response to the conversation
      setMessages([...messages, { role: 'user', content: prompt }, { role: 'assistant', content: data.choices[0].message.content }]);
      setPrompt('');  // Clear the prompt input
    } catch (err) {
      console.error('Error:', err);
      setError('Unable to fetch AI response. Check your network and API key.');
    } finally {
      setLoading(false);  // Stop loading indicator
    }
  };

  return (
    <div id="ai" className="p-8 bg-neutral-800 rounded-md shadow-lg text-white max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">AI Chat</h2>

      {/* Chat container with scroll */}
      <div
        ref={chatContainerRef}
        className="h-64 overflow-y-auto bg-neutral-900 p-4 mb-4 rounded-md"
        style={{ maxHeight: '300px' }}
      >
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-blue-400' : 'text-green-400'}`}>
            <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong> {message.content}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}  // Update the prompt as the user types
        placeholder="Ask the AI something..."
        rows="2"
        className="w-full p-2 border border-gray-300 rounded-md bg-neutral-700 text-white mb-4"
      ></textarea>

      {/* Button to Submit */}
      <button
        onClick={generateResponse}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-6 w-full"
        disabled={loading}  // Disable button while loading
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {/* Display Error Message */}
      {error && (
        <div className="error mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          <p>{error}</p>  {/* Display error message */}
        </div>
      )}
    </div>
  );
};

export default AiComponent;
