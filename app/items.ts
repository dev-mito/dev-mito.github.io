import { type FileType } from "@/app/FileIcon";

interface Items {
    fileType?: FileType;
    id?: string;
    title: string;
    link: string;
}

const items: Items[] = [
    {
        title: "pop_backup_2026_10_11_18_40_26.dat",
        fileType: "unknown",
        link: "pop_backup_2026_10_11_18_40_26.dat"
    }
];

export { items };
