import { Route } from "../router";
import "isomorphic-fetch";

interface HNItem {
    id: number;
    deleted?: boolean;
    type: "job" | "story" | "comment" | "poll" | "pollopt";
    by: string;
    time: number;
    text: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url: string;
    score: number;
    title: string;
    parts?: number[];
    descendants?: number[];
}

export const topStories: Route = {
    path: "/hn",
    handler: async (req, res) => {
        const topStories = await doFetch<number[]>(getTopStoriesUrl());
        const topStory = await doFetch<HNItem>(getItemUrl(topStories[0]));
        const kids = topStory.kids;

        let comments: HNItem[] = [];

        if (kids && kids.length) {
            comments = await Promise.all(kids.map(getCommentUrl).map((url) => doFetch<HNItem>(url)))
        }

        res.end(renderStoryWithComments(topStory, comments));
    }
}

const doFetch = <T>(url: string): Promise<T> => {
    return fetch(url).then(res => res.json());
}

const renderStoryWithComments = (story: HNItem, comments: HNItem[]) => {
    return `<html>
            <body>
                <h1><a href="${story.url}">${story.title}</a></h1></h1>
                <h4>Submitted by: ${story.by}</h4>
                <hr>
                <h3>Comments</h3>
                ${renderComments(comments)}
            </body>
            </html>`;
}

const renderComments = (comments: HNItem[]) => {
    return `<ul>${comments.map(renderComment).join("")}</ul>`;
}

const renderComment = (comment: HNItem) => {
    return `<li>${comment.text}</li>`;
}

const getTopStoriesUrl = () => `https://hacker-news.firebaseio.com/v0/topstories.json`;

const getItemUrl = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const getCommentUrl = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
