import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-blue-600" />
            <span className="text-xl font-bold tracking-tight text-white">SpecSnap</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} SpecSnap. All rights reserved.
        </div>
      </div>
    </footer>
  )
}