
import PencilUpIcon from "./icons/pencilUpIcon";
import PencilDownIcon from "./icons/pencilDownIcon";

export default function Positions() {
  return (
    <div className="mt-5 flex gap-3">
      <h1 className="text-2xl font-[family-name:var(--font-geist-mono)]">
        application designer
      </h1>
      <PencilUpIcon />
      <h1 className="text-2xl font-[family-name:var(--font-geist-mono)]">
        software engineer
      </h1>
      <PencilDownIcon />
      <h1 className="text-2xl font-[family-name:var(--font-geist-mono)]">
        creative code
      </h1>
      <PencilUpIcon />
      <h1 className="text-2xl font-[family-name:var(--font-geist-mono)]">
        curious thinker
      </h1>
      <PencilDownIcon />
      <h1 className="text-2xl font-[family-name:var(--font-geist-mono)]">
        product designer
      </h1>
      <PencilUpIcon />
      
    </div>
  );
}
