import imgsend from "../image/send.png"

export default function Button({type, text, className }) {
    return (
      <button
        className={className}
        type={type}
      ><img  src={imgsend} alt="img" /> 
        {text}
      </button>
    );
  }