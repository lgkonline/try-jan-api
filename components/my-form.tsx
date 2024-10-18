"use client"

import { useFormState, useFormStatus } from "react-dom"
import { Textarea } from "./ui/textarea"
import { makeRequest } from "@/app/actions"
import MarkdownRenderer from "./ui/markdown-renderer"
import { SubmitButton } from "./ui/submit-button"

export interface MyFormProps {}

const initialState = {
    message: ""
}

export default function MyForm({}: MyFormProps) {
    const [state, formAction] = useFormState(makeRequest, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-1">
            {state.message && <MarkdownRenderer content={state.message} />}

            <Textarea placeholder="Enter something" name="userInput" />
            <SubmitButton>Send</SubmitButton>
        </form>
    )
}
