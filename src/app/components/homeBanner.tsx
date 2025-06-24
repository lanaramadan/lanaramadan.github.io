export default function HomeBanner() {
  const currentDate: Date = new Date();
  const monthAbbreviation = currentDate.toLocaleString('en-US', { month: 'short' });
  const weekdayAbbreviation = currentDate.toLocaleString('en-US', { weekday: 'short' });


  return (
    <div>
        {/* poloroids section */}


        {/* text section */}

        <div className="font-medium pb-6">
            <h3 className="text-3xl font-[family-name:var(--font-new-spirit-condensed)]">Based in...</h3>
            <div className="flex flex-col items-end">
                <p className="text-5xl font-[family-name:var(--font-new-spirit-condensed)]">📍 Orange County, California</p>
                <p className="text-lg font-[family-name:var(--font-geist-mono)]">[ {weekdayAbbreviation} | {monthAbbreviation} {currentDate.getDate()} {currentDate.getFullYear()} | 14:51 | 76°F ]</p>
            </div>
        </div>

        <div className="font-medium pb-6">
            <h3 className="text-3xl font-[family-name:var(--font-new-spirit-condensed)]">Currently...</h3>
            <p className="text-lg font-[family-name:var(--font-geist-mono)]">📚 Computer Science & Informatics @ UCI </p>
            <p className="text-lg font-[family-name:var(--font-geist-mono)]">💻 Application Developer Intern @ Esri</p>
        </div>
    </div>
  );
}
