type SubtitleProps = {
  text: string;
};

export default function Emphasis({ text }: SubtitleProps) {
  return (
    <h2 className={`font-ibm-plex-sans text-text text-lg font-semibold italic`}>
      {text}
    </h2>
  );
}
