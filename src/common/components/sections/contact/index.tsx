"use client"

export default function Contact() {
    function copyEmail() {
        navigator.clipboard.writeText("ajfeng@gmail.com")
    }

    return (
        <section id="contact" className="flex flex-col items-center gap-6 py-20">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="max-w-2xl text-center text-lg">
                Contact me through email!
            </p>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-md">
                <span className="text-lg">ajfeng@gmail.com</span>
            </div>
            <button
                onClick={copyEmail}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Copy
            </button>
        </section>
    )
}
