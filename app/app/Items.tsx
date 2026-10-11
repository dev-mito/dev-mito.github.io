import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { items } from "@/items";
import { FileIcon } from "./FileIcon";

const Items = () => {
    return (
        <>
            <div className="p-2">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-start gap-4">
                    {items.map((item) => (
                        <div key={`${item.title}:${item.id ?? "no-id"}`}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={`${item.link}`}
                                        className="block"
                                    >
                                        <Card>
                                            <CardContent>
                                                <div className="flex gap-2 items-center">
                                                    <FileIcon
                                                        fileType={item.fileType}
                                                    />
                                                    <span className="flex-1 truncate">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <span>{item.title}</span>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Items;
