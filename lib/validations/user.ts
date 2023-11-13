import * as z from "zod"

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: "Min 3 chars"}).max(30),
    username: z.string().min(3, {message: "Min 3 chars"}).max(30),
    bio: z.string().min(3, {message: "Min 1000 chars"}).max(1000),
})