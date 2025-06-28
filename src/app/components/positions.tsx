
import PencilUpIcon from "./icons/pencilUpIcon";
import PencilDownIcon from "./icons/pencilDownIcon";

export default function Positions() {
  return (
    <div className="overflow-hidden w-full">
      <div className="animate-scroll whitespace-nowrap mt-5 flex gap-3 text-3xl items-center font-[family-name:var(--font-geist-mono)]">
        <h1>application designer</h1>
        <PencilUpIcon />
        <h1>software engineer</h1>
        <PencilDownIcon />
        <h1>creative coder</h1>
        <PencilUpIcon />
        <h1>curious thinker</h1>
        <PencilDownIcon />
        <h1>product designer</h1>
        <PencilUpIcon />

        <h1>application designer</h1>
        <PencilUpIcon />
        <h1>software engineer</h1>
        <PencilDownIcon />
        <h1>creative coder</h1>
        <PencilUpIcon />
        <h1>curious thinker</h1>
        <PencilDownIcon />
        <h1>product designer</h1>
        <PencilUpIcon />
      </div>
    </div>
  );
}
