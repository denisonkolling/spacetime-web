import { MediaPicker } from "@/components/MediaPicker";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {

    return (

        <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className=" flex items-center gap-1 text-sm text-grey-200 hover:text-grey-100">
                <ChevronLeft className="h-4 w-4" />
                voltar à timeline
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-4">
                    <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-grey-200 hover:text-grey-100">

                        <Camera className="h-4 w-4" />
                        Anexar mídia
                    </label>

                    <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-grey-200 hover:text-grey-100">
                        <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-grey-400 bg-grey-700 text-purple-500" />
                        Tornar memória pública
                    </label>

                </div>

                <MediaPicker />

                <textarea name="content" spellCheck={false} className="w-full flex-1 resize-none rounded border-0 bg-transparent text-lg leading-relaxed text-grey-100 placeholder:text-grey-400 focus:ring-0"
                    placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre" />
            </form>

        </div>

    )

}