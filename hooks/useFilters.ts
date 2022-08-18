import { useMemo } from "react"
import IOptions from "../models/IOptions"
import IPost from "../models/IPost"

export const useFilters = (posts: IPost[], options: IOptions): IPost[] => {
    
    const sortedPosts = useSortTypePosts(posts, options.sort)
    return useFilterPosts(sortedPosts, options.filter)
}

const useSortTypePosts =
    (posts: IPost[], sortType: IOptions["sort"]): IPost[] =>
        useMemo(() => {
            if (sortType === 'ASC') {
                return posts.sort((a, b) => a.id - b.id)
            } else {
                return posts.sort((a, b) => b.id - a.id)
            }
        }, [posts, sortType])

const useFilterPosts =
    (posts: IPost[], filter: IOptions["filter"]): IPost[] =>
        useMemo(() => {
            return posts.filter((card) => {
                return card.description.toLowerCase().includes(filter.value.toLowerCase())
            })
        }, [posts, filter])