import LiveChatBubble from "@/components/LiveChatBubble";

export default function PubliCLayout({ children }: { children: React.ReactNode}){
    return (
        <div className="w-full">
            {children}
            <LiveChatBubble />
        </div>
    )
}