import{streamText} from "ai"
import { openrouter } from "../lib/ai"

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openrouter("meta-llama/llama-3.3-70b-instruct"),
            prompt,
            system: "Eres un camarero chistoso y que explica todo al milimetro"
        })
        return result.textStream
    }
}