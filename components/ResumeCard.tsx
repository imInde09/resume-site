"use client";

interface ResumeCardProps {
    pdfUrl: string;
}

const DOWNLOAD_NAME = "prathamesh-inde-devops-resume.pdf";

export default function ResumeCard({ pdfUrl }: ResumeCardProps) {
    const handleEmail = () => {
        const subject = encodeURIComponent("Resume – Prathamesh Inde");
        const body = encodeURIComponent(
            `Hi,

You can view or download Resume of Prathamesh Inde by using the link below:
${window.location.origin}${pdfUrl}
`
        );

        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    return (
        <div className="h-screen w-screen flex flex-col bg-black text-white">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4
        bg-white/5 backdrop-blur-xl border-b border-white/10
      ">
                <h1 className="text-sm sm:text-base font-medium tracking-wide">
                    Prathamesh Inde - Resume
                </h1>

                <div className="hidden sm:flex gap-3">
                    <a
                        href={pdfUrl}
                        download={DOWNLOAD_NAME}
                        className="px-4 py-2 rounded-lg
              bg-white/10 hover:bg-white/20
              border border-white/20
              transition-all
            "
                    >
                        Download
                    </a>

                    <button
                        onClick={handleEmail}
                        className="px-4 py-2 rounded-lg
              bg-emerald-500/90 hover:bg-emerald-400
              text-black font-medium
              transition-all
            "
                    >
                        Email
                    </button>
                </div>
            </header>

            {/* PDF Viewer */}
            <div className="flex-1 relative z-0">
                <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0`}
                    className="w-full h-full"
                    title="Resume PDF"
                />
            </div>

            {/* Mobile Actions */}
            <div className="
        sm:hidden
        fixed bottom-0 left-0 right-0 z-50
        flex gap-3 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)]
        bg-black/80 backdrop-blur-xl
        border-t border-white/10
      ">
                <a
                    href={pdfUrl}
                    download={DOWNLOAD_NAME}
                    className="flex-1 py-3 rounded-xl
            bg-white/10 border border-white/20
            text-center font-medium
          "
                >
                    Download
                </a>

                <button
                    onClick={handleEmail}
                    className="flex-1 py-3 rounded-xl
            bg-emerald-500 text-black font-semibold
          "
                >
                    Email
                </button>
            </div>
        </div>
    );
}
