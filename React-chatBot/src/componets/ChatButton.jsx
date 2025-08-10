function ChatButton() {
    return (  
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="currentColor"
        >
            {/* Antenna */}
            <circle cx="12" cy="2" r="1" />
            <line x1="12" y1="3" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Robot head (square) */}
            <rect x="4" y="5" width="16" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            
            {/* Eyes */}
            <circle cx="8.5" cy="11" r="1" fill="currentColor" />
            <circle cx="15.5" cy="11" r="1" fill="currentColor" />
            
            {/* Mouth */}
            <rect x="9" y="14" width="6" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
    );      
}

export default ChatButton;
