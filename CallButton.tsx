import { Phone } from "lucide-react";

const CallButton = () => {
  const phoneNumber = "tel:+256740166788";

  return (
    <a
      href={phoneNumber}
      className="fixed bottom-6 left-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        +256 740 166 788<br />+256 769 616 091
      </span>
    </a>
  );
};

export default CallButton;
