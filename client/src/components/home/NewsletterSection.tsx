import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/subscribe", { email });
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#d66ba0]/10 to-[#9d65c9]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Montserrat'] text-3xl font-bold mb-4 text-[#333333]">Stay Informed</h2>
          <p className="text-lg mb-8 text-[#4b4b4b]">
            Subscribe to our newsletter for the latest research, advocacy opportunities, and women's health news.
          </p>
          
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md border border-[#cdc5cb] focus:outline-none focus:ring-2 focus:ring-[#d66ba0] focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className={`whitespace-nowrap bg-[#d66ba0] hover:bg-[#d66ba0]/90 text-white font-medium py-3 px-6 rounded-md shadow-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <p className="text-xs text-[#4b4b4b] mt-3">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
