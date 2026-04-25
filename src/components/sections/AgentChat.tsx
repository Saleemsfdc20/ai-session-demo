"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "system";
  content: string;
};

type ChatStep = "ASK_CONTACT" | "ASK_REQUIREMENT" | "CONFIRMATION" | "SUBMITTED";

export function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "system",
      content: "Please share your email or phone"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [step, setStep] = useState<ChatStep>("ASK_CONTACT");
  const [contact, setContact] = useState("");
  const [requirement, setRequirement] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || step === "SUBMITTED") return;

    const userMessageContent = input.trim();
    const userMessage: Message = { id: Date.now().toString(), role: "user", content: userMessageContent };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (step === "ASK_CONTACT") {
      let isValid = false;
      if (userMessageContent.includes('@')) {
        isValid = true;
      } else if (/\d/.test(userMessageContent)) {
        isValid = true;
      }

      if (!isValid) {
        setIsLoading(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            role: "system",
            content: "Please provide a valid email or phone number."
          }]);
          setIsLoading(false);
        }, 600);
        return;
      }

      setContact(userMessageContent);
      setStep("ASK_REQUIREMENT");
      
      setIsLoading(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "system",
          content: "How can we help you?"
        }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    if (step === "ASK_REQUIREMENT") {
      setRequirement(userMessageContent);
      setStep("CONFIRMATION");
      
      setIsLoading(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "system",
          content: `Contact: ${contact}\nRequirement: ${userMessageContent}\n\nDo you want to submit? (Yes/No)`
        }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    if (step === "CONFIRMATION") {
      const lowerInput = userMessageContent.toLowerCase();
      if (lowerInput === "no" || lowerInput === "n") {
        setStep("ASK_CONTACT");
        setContact("");
        setRequirement("");
        setIsLoading(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            role: "system",
            content: "Please share your email or phone"
          }]);
          setIsLoading(false);
        }, 600);
        return;
      } else if (lowerInput === "yes" || lowerInput === "y") {
        setIsLoading(true);
        try {
          const isEmail = contact.includes('@');
          const extractedEmail = isEmail ? contact : 'chat@website.com';
          const extractedPhone = !isEmail ? contact : '';
          const isUrgent = requirement.toLowerCase().includes('urgent');

          const form = document.createElement('form');
          form.method = 'POST';
          form.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
          form.style.display = 'none';

          const fields: Record<string, string> = {
            'oid': '00DgK00000KnrZ7',
            'retURL': 'https://ai-session-demo.vercel.app/thank-you',
            'first_name': 'Website User',
            'last_name': 'Lead',
            'company': 'Website',
            'email': extractedEmail,
            'phone': extractedPhone,
            '00NgK00003n25PJ': 'AI / Agentforce',
            '00NgK00003n2jvm': 'Not Sure',
            '00NgK00003n48m2': isUrgent ? '1' : '0',
            '00NgK00003n65or': requirement
          };

          for (const [key, value] of Object.entries(fields)) {
            const inputField = document.createElement('input');
            inputField.type = 'hidden';
            inputField.name = key;
            inputField.value = value;
            form.appendChild(inputField);
          }

          document.body.appendChild(form);
          form.submit();
          
          setStep("SUBMITTED");
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            role: "system",
            content: "Your request has been submitted. Our team will contact you soon 🚀"
          }]);

          setTimeout(() => setIsLoading(false), 2000);
          return;
        } catch {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              role: "system",
              content: "Something went wrong. Please try again later.",
            },
          ]);
          setIsLoading(false);
        }
      } else {
        setIsLoading(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            role: "system",
            content: "Do you want to submit? (Yes/No)"
          }]);
          setIsLoading(false);
        }, 600);
        return;
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px] relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-salesforce/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Header */}
      <div className="p-5 md:p-6 border-b border-white/10 bg-white/5 backdrop-blur-md z-10 relative">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-500" />
          Project Assistant
        </h3>
        <p className="text-sm md:text-base text-neutral-400 mt-1">
          Let&apos;s discuss how we can help.
        </p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent z-10 relative">
        {messages.length === 0 && (
          <div className="text-center text-neutral-500 h-full flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 shadow-inner">
              <Bot className="w-8 h-8 text-neutral-400" />
            </div>
            <p className="text-sm md:text-base">No messages yet. Start the conversation below!</p>
          </div>
        )}
        
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-full flex items-center justify-center shadow-lg ${msg.role === "user" ? "bg-blue-600" : "bg-neutral-800 border border-white/10"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4 md:w-5 md:h-5 text-white" /> : <Bot className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />}
                </div>
                <div className={`rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-lg ${msg.role === "user" ? "bg-blue-600 text-white rounded-tr-sm" : "bg-neutral-800/80 text-neutral-200 border border-white/10 rounded-tl-sm backdrop-blur-md"}`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shadow-lg">
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <div className="rounded-2xl px-5 py-4 bg-neutral-800/80 border border-white/10 rounded-tl-sm backdrop-blur-md flex items-center gap-1.5 shadow-lg h-[44px] md:h-[56px]">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-black/60 border-t border-white/10 backdrop-blur-xl z-20 relative">
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <div className="relative flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Describe your requirement..."
              disabled={step === "SUBMITTED"}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 md:py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 resize-none min-h-[50px] md:min-h-[56px] max-h-[150px] block transition-all shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
              rows={1}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading || step === "SUBMITTED"}
            className="h-[50px] md:h-[56px] px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 active:scale-95 flex-shrink-0"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
          </button>
        </form>
      </div>
    </div>
  );
}
