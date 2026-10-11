import { File, FileText } from "lucide-react";

const fileIcons = {
    unknown: File,
    text: FileText
};

type FileType = keyof typeof fileIcons;

const FileIcon = ({ fileType = "unknown" }: { fileType?: FileType }) => {
    const Icon = fileIcons[fileType];
    return <Icon />;
};

export { type FileType, FileIcon };
