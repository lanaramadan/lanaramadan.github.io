type SubtitleProps = {
  text: string;
  textColor: string;
};

export default function Subtitle({ text, textColor }: SubtitleProps) {
  return (
    <h2 className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}>
      {text}
    </h2>
  );
}
