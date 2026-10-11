import { type FileType } from "@/app/FileIcon";

interface Items {
    fileType?: FileType;
    id?: string;
    title: string;
    link: string;
}

const items: Items[] = [
    { title: "test.txt", fileType: "text", link: "text.txt" }
];

export { items };
