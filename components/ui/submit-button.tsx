import { useFormStatus } from "react-dom"
import { Button } from "./button"
import { ReactNode } from "react"
import { Loader2 } from "lucide-react"

export function SubmitButton({ children }: { children: ReactNode }) {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
            aria-busy={pending}
            className="relative"
        >
            {pending && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                    />
                </span>
            )}
            <span className={pending ? "invisible" : "visible"}>
                {children}
            </span>
            <span className="sr-only">{pending ? "Loading..." : "Send"}</span>
        </Button>
    )
}
