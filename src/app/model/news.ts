import { CateNews } from "./catenews";
import { Users } from "./users";

export class News {
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    images: string;
    datetime: Date | undefined;
    content: string | undefined;
    catenews: CateNews;
    users: Users;
    
}