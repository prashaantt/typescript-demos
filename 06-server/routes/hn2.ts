import { Route } from "../router";
import "isomorphic-fetch";
import { ServerResponse } from "http";
import { HNItem, getCommentUrl, getTopStoriesUrl, getItemUrl, doFetch, renderComment } from "./hn";

export const topStories3: Route = {
    path: "/hn2",
    handler: async (req, res) => {
        const topStories = await doFetch<number[]>(getTopStoriesUrl());
        const topStory = await doFetch<HNItem>(getItemUrl(topStories[0]));
        renderStoryWithComments(topStory, res);
    }
}

export const topStories2: Route = {
    path: "/hn3",
    handler: async (req, res) => {
        const topStories = await doFetch<number[]>(getTopStoriesUrl());
        const topStory = await doFetch<HNItem>(getItemUrl(topStories[0]));
        renderStoryWithComments(topStory, res, true);
    }
}

const renderStoryWithComments = async (story: HNItem, res: ServerResponse, sequential = false) => {
    res.write(`<html>
                <body>
                <h1><a href="${story.url}">${story.title}</a></h1></h1>
                <h4>Submitted by: ${story.by}</h4>`);
    if (story.kids && story.kids.length) {
        await renderComments(story.kids, res, sequential);
    }
    res.end(`</body></html>`);
}

const renderComments = async (comments: number[], res: ServerResponse, sequential = false) => {
    res.write(`<hr>
            <h3>Comments</h3>
            <ul>`);
    if (sequential) {
        for (const comment of comments) {
            const item = await doFetch<HNItem>(getCommentUrl(comment));
            res.write(renderComment(item));
        }
    } else {
        await Promise.all(comments.map(getCommentUrl).map(async (url) => {
            const item = await doFetch<HNItem>(url);
            return res.write(renderComment(item));
        }));
    }
    return res.write("</ul>");
}
