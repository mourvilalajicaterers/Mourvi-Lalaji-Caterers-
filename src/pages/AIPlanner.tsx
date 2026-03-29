import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Utensils, Calendar, Users, MapPin, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const LOGO_URL = "https://i.ibb.co/gL2vBKtr/Whats-App-Image-2026-03-28-at-21-50-29.jpg";

export default function AIPlanner() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm your AI Event Planner from Mourvi Lalaji Caterers. I can help you design the perfect menu, estimate quantities, and suggest themes for your upcoming event. What kind of celebration are you planning?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { 
            role: 'user', 
            parts: [{ text: `You are a professional AI Event Planner for "Mourvi Lalaji Caterers". 
            Your goal is to help users plan their event catering and management. 
            Be professional, premium, and helpful. 
            Suggest specific Indian and International cuisines that Mourvi Lalaji Caterers specializes in.
            Current conversation: ${messages.map(m => `${m.role}: ${m.content}`).join('\n')}
            User says: ${userMessage}` }] 
          }
        ],
        config: {
          systemInstruction: "You are an expert event planner for Mourvi Lalaji Caterers. You help clients with menu selection, guest estimation, and event logistics. You are polite, sophisticated, and knowledgeable about Indian hospitality."
        }
      });

      const assistantMessage = response.text || "I apologize, I'm having trouble processing that. How else can I help you plan your event?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again or contact our team directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-pink-950 min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            <span>AI-Powered Event Planning</span>
          </div>
          <h1 className="serif text-4xl md:text-5xl font-bold text-white mb-4">Plan Your Masterpiece</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Our intelligent planner helps you curate the perfect culinary experience for your guests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2 flex flex-col h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center overflow-hidden ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-white border border-gray-100'}`}>
                        {msg.role === 'user' ? (
                          <Users size={14} />
                        ) : (
                          <img 
                            src={LOGO_URL} 
                            alt="Mourvi Lalaji" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        )}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-gold text-white rounded-tr-none' 
                          : 'bg-gray-100 text-charcoal rounded-tl-none'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center text-gray-400 text-sm italic">
                    <Loader2 size={16} className="animate-spin" />
                    <span>AI is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tell me about your event (e.g., Wedding for 200 guests in December)"
                  className="w-full pl-6 pr-14 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-2 bottom-2 w-10 bg-gold text-white rounded-xl flex items-center justify-center hover:bg-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="space-y-6">
            <h3 className="serif text-xl font-bold text-white px-2">Try Asking...</h3>
            <SuggestionCard 
              icon={<Utensils size={18} />}
              title="Menu Suggestions"
              text="Suggest a premium North Indian menu for a winter wedding."
              onClick={() => setInput("Suggest a premium North Indian menu for a winter wedding.")}
            />
            <SuggestionCard 
              icon={<Users size={18} />}
              title="Guest Estimation"
              text="How much food should I order for 150 guests at a buffet?"
              onClick={() => setInput("How much food should I order for 150 guests at a buffet?")}
            />
            <SuggestionCard 
              icon={<Calendar size={18} />}
              title="Themed Events"
              text="What are some trending themes for a corporate gala dinner?"
              onClick={() => setInput("What are some trending themes for a corporate gala dinner?")}
            />
            <SuggestionCard 
              icon={<MapPin size={18} />}
              title="Venue Logistics"
              text="What should I check before booking an outdoor catering venue?"
              onClick={() => setInput("What should I check before booking an outdoor catering venue?")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SuggestionCard({ icon, title, text, onClick }: { icon: React.ReactNode, title: string, text: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-gold group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="font-bold text-sm text-charcoal">{title}</h4>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
    </button>
  );
}
