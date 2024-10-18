import MyForm from "@/components/my-form"
import { Button } from "@/components/ui/button"
import LgkLogo from "@/components/ui/lgk-logo"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default async function Home() {
    return (
        <div className="container mx-auto font-[family-name:var(--font-geist-sans)]">
            <nav className="float-end flex gap-1">
                <Button variant="outline" size="icon" asChild>
                    <a href="https://lgk.io">
                        <LgkLogo />
                        <span className="sr-only">LGK website</span>
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/lgkonline/try-jan-api">
                        <GitHubLogoIcon />
                        <span className="sr-only">GitHub repository</span>
                    </a>
                </Button>
                <ModeToggle />
            </nav>

            <h1 className="text-xl mt-4 mb-3">Ask Llama questions</h1>

            <MyForm />
        </div>
    )
}
